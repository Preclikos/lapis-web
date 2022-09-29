import SEO from '../components/seo';
import PageHeader from '../components/page-header';
import Layout from '../layout';
import { menuMessages } from '../messages/menu-messages';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';
import ReportCard from '../components/report-card';

interface ILapisProps {
  id: string;
}

const Report = () => {
  const t = useIntl();

  const { id } = useParams<ILapisProps>();

  return (
    <Layout>
      <SEO />
      <PageHeader
        prev={[
          { text: t.formatMessage({ ...menuMessages.home }), path: '/' },
          {
            text: t.formatMessage({ ...menuMessages.lapis }),
            path: `/lapis/${id}`,
          },
        ]}
        currentPage={t.formatMessage({ ...menuMessages.lapisLocationReport })}
        title={t.formatMessage({ ...menuMessages.lapisLocationReport })}
      />
      <ReportCard id={Number(id)} />
    </Layout>
  );
};

export default Report;
