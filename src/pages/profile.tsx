import SEO from '../components/seo';
import PageHeader from '../components/page-header';
import MainContent from '../containers/profile/main-content';
import Layout from '../layout';
import { menuMessages } from '../data/menu-messages';
import { useIntl } from 'react-intl';
import Sidebar from '../containers/profile/sidebar';

const Profile = () => {
  const t = useIntl();

  return (
    <Layout>
      <SEO />
      <PageHeader
        prev={[{ text: t.formatMessage({ ...menuMessages.home }), path: '/' }]}
        currentPage={t.formatMessage({ ...menuMessages.profile })}
        title={t.formatMessage({ ...menuMessages.profile })}
      />
      <div className="grid lg:grid-cols-12 gap-5">
        <div className="lg:col-span-8">
          <MainContent />
        </div>
        <div className="lg:col-span-4">
          <Sidebar />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
