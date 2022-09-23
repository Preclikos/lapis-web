import SEO from '../components/seo';
import PageHeader from '../components/page-header';
import MainContent from '../containers/profile/main-content';
import Layout from '../layout';
import { menuMessages } from '../data/menu-messages';
import { useIntl } from 'react-intl';
import Wrapper from '../containers/timeline/wrapper';
import Main from '../containers/timeline/main';
import Sidebar from '../containers/timeline/sidebar';

const Lapis = () => {
  const t = useIntl();

  return (
    <Layout>
      <SEO />
      <PageHeader
        prev={[{ text: t.formatMessage({ ...menuMessages.home }), path: '/' }]}
        currentPage={t.formatMessage({ ...menuMessages.lapis })}
        title={t.formatMessage({ ...menuMessages.lapis })}
        variant={3}
      />
      <Wrapper>
        <Main />
        <Sidebar />
      </Wrapper>
    </Layout>
  );
};

export default Lapis;
