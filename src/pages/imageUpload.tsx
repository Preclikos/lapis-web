import Layout from '../layout';
import PageHeader from '../components/page-header';
import { useIntl } from 'react-intl';
import { menuMessages } from '../data/menuMessages';
import SEO from '../components/seo';
import Mansory from '../containers/dashboard/mansory';
import { usePosition } from '../hooks/use-position';
import { ChangeEvent, useEffect, useState } from 'react';
import NominatimOsmApi from '../api/nominatim-api';
import ExifReader, { GpsTags } from 'exifreader';

const ImageUpload = () => {
  const t = useIntl();
  /*
  const position = usePosition(true);

  useEffect(() => {
    if (position.position) {
      NominatimOsmApi.Reverse(
        position.position?.latitude,
        position.position?.longitude
      ).then((res) => console.log(res));
    }
  }, [position]);
*/
  const [preview, setPreview] = useState<string>();
  const [gps, setGps] = useState<GpsTags>();
  const [location, setLocation] = useState<GpsTags>();

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      const objectUrl = URL.createObjectURL(files[0]);
      setPreview(objectUrl);
    }
  };

  useEffect(() => {
    if (preview)
      ExifReader.load(preview, { expanded: true }).then((data) => {
        if (data.gps) {
          setGps(data.gps);
        }
      });
  }, [preview]);

  useEffect(() => {
    if (gps && gps.Latitude && gps.Longitude)
      NominatimOsmApi.Reverse(gps.Latitude, gps.Longitude).then((res) =>
        setLocation(res)
      );
  }, [gps]);

  return (
    <Layout>
      <SEO />
      <PageHeader
        prev={[{ text: t.formatMessage({ ...menuMessages.home }), path: '/' }]}
        currentPage={t.formatMessage({ ...menuMessages.dashboard })}
        title={t.formatMessage({ ...menuMessages.dashboard })}
      />
      <input type="file" accept="image/*" onChange={(e) => onImageChange(e)} />
      {preview && <img src={preview} />}
      <br />
      {JSON.stringify(location)}
    </Layout>
  );
};

export default ImageUpload;
