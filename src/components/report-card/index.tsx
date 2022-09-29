import clsx from 'clsx';
import ExifReader, { GpsTags } from 'exifreader';
import { LatLng } from 'leaflet';
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import FileBrowser from '../form-elements/file-browser';
import { TInput } from '../form-elements/types';
import Card from '../ui/card/card';
import CardTitle from '../ui/card/card-title';
import NominatimOsmApi from '../../api/nominatim-api';
import MapPan from './mappan';

interface IProps {
  id: number;
  className?: string;
}

const ReportCard: FC<IProps> = ({ id, className }) => {
  const [preview, setPreview] = useState<string>();
  const [gps, setGps] = useState<GpsTags>();
  const [location, setLocation] = useState<GpsTags>();

  const onImageChange = (event: ChangeEvent<TInput>) => {
    const { files } = event.target as HTMLInputElement;
    console.log(files);
    if (files && files.length > 0) {
      const objectUrl = URL.createObjectURL(files[0]);
      setPreview(objectUrl);
    }
  };

  useEffect(() => {
    if (preview)
      ExifReader.load(preview, { expanded: true }).then((data) => {
        if (data.gps) {
          console.log(data.gps);
          setGps(data.gps);
        }
      });
  }, [preview]);
  /*
  useEffect(() => {
    if (gps && gps.Latitude && gps.Longitude)
      NominatimOsmApi.Reverse(gps.Latitude, gps.Longitude).then((res) =>
        setLocation(res)
      );
  }, [gps]);*/

  return (
    <div className="mb-5 grid lg:grid-cols-2 gap-5">
      <Card className="p-5 sm:p-10">
        <CardTitle>Fotografie kaminku</CardTitle>
        <p className="mb-5 sm:mb-10">
          Prosim vyberte fotku nebo vyfotte kaminek
        </p>

        <div className="grid sm:grid-cols-12 sm:gap-[30px] mt-5">
          <div className="sm:col-span-12 border-2 border-sky-500">
            <img
              src={
                preview ??
                'https://northmoravians.cz/wp-content/uploads/2022/07/empty.jpeg'
              }
              alt="zadej obrazek vole"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-12 sm:gap-[30px] mt-5">
          {/*<input type="file" accept="image/*" />*/}

          <div className="sm:col-span-12">
            <FileBrowser
              multiple={false}
              accept="image/*"
              id="customFile"
              name="customFile"
              label="Choose File"
              color="primary"
              onChange={(e) => onImageChange(e)}
            />
          </div>
        </div>
      </Card>

      <Card className="p-5 sm:p-10">
        <CardTitle>Zadani polohy</CardTitle>
        <p className="mb-5 sm:mb-10">
          Prosim presunte sipku na misto kde byl kaminek nalezen.
        </p>
        <div className="grid sm:grid-cols-12 sm:gap-[30px]">
          <div className="sm:col-span-12 sm:text-right">
            <MapContainer
              style={{ paddingTop: '75%' }}
              center={
                gps && gps.Longitude && gps.Latitude
                  ? new LatLng(gps.Latitude, gps.Longitude)
                  : new LatLng(49.25, 16.588)
              }
              zoom={11}
              scrollWheelZoom={false}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker
                riseOnHover={true}
                position={
                  gps && gps.Longitude && gps.Latitude
                    ? new LatLng(gps.Latitude, gps.Longitude)
                    : new LatLng(49.25, 16.588)
                }
                draggable={true}
              ></Marker>
              {gps && gps.Longitude && gps.Latitude && (
                <MapPan lat={gps.Latitude} lng={gps.Longitude} />
              )}
            </MapContainer>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ReportCard;
