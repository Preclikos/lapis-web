import Layout from '../layout';
import PageHeader from '../components/page-header';
import { useIntl } from 'react-intl';
import { menuMessages } from '../data/menuMessages';
import SEO from '../components/seo';
import Mansory from '../containers/dashboard/mansory';
import { usePosition } from '../hooks/use-position';
import { useEffect } from 'react';
import NominatimOsmApi from '../api/nominatim-api';

const Dashboard = () => {
  const t = useIntl();

  const position = usePosition(true);

  useEffect(() => {
    if (position.position) {
      NominatimOsmApi.Reverse(
        position.position?.latitude,
        position.position?.longitude
      ).then((res) => console.log(res));
    }
  }, [position]);

  return (
    <Layout>
      <SEO />
      <PageHeader
        prev={[{ text: t.formatMessage({ ...menuMessages.home }), path: '/' }]}
        currentPage={t.formatMessage({ ...menuMessages.dashboard })}
        title={t.formatMessage({ ...menuMessages.dashboard })}
      />
      <Mansory />
    </Layout>
  );
};

export default Dashboard;
