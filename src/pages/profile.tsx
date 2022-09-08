import SEO from "../components/seo";
import PageHeader from "../components/page-header";
import MainContent from "../containers/profile/main-content";
import Layout from "../layout";
import { menuMessages } from "../data/menuMessages";
import { useIntl } from "react-intl";

const Profile = () => {
    const t = useIntl();
    
    return (
        <Layout>
            <SEO />
            <PageHeader
                prev={[{ text: t.formatMessage({...menuMessages.home}), path: "/" }]}
                currentPage={t.formatMessage({...menuMessages.profile})}
                title={t.formatMessage({...menuMessages.profile})}
            />
            <div className="grid  gap-5">
                    <MainContent />
            </div>
        </Layout>
    );
};

export default Profile;
