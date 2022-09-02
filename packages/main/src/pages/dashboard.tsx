import Layout from "../layouts";
import SEO from "../components/seo";
import PageHeader from "../components/page-header/layout";
import Wrapper from "../containers/timeline/wrapper";
import Main from "../containers/timeline/main";
import Sidebar from "../containers/timeline/sidebar";

const Dashboard = () => {
    return (
        <Layout>
            <SEO />
            <PageHeader
                prev={[]}
                currentPage="Home"
                title="Timeline"
                variant={3}
            />
            <Wrapper>
                <Main />
                <Sidebar />
            </Wrapper>
        </Layout>
    );
};

export default Dashboard;
