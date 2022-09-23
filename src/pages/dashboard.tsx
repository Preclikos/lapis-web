import Layout from '../layout';
import PageHeader from '../components/page-header';
import { useIntl } from 'react-intl';
import { menuMessages } from '../messages/menu-messages';
import SEO from '../components/seo';
import Mansory from '../containers/dashboard/mansory';

const Dashboard = () => {
  const t = useIntl();

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
