import { useEffect, useState } from "react";
import { takeUntil, scan, finalize, Subject } from "rxjs";
import Layout from "../layout";
import { fromFetchStream } from "../api/fromFetchStream";
import PageHeader from "../components/page-header";
import { useIntl } from "react-intl";
import { menuMessages } from "../data/menuMessages";
import SEO from "../components/seo";
import PostCard from "../components/post-card";

interface LapisData
{
  id : number
  name: string
}

const Dashboard = () => {
  const t = useIntl();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<LapisData[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [stopSource, setstopSource] = useState(new Subject());

  useEffect(() => {
    setLoading(true)
    const fetchData = fromFetchStream<LapisData>(process.env.REACT_APP_WEBAPI_API + '/Search/Code').pipe(
      takeUntil(stopSource),
      scan((all, item) =>  [...all, item], [] as LapisData[]),
      finalize(() => {setLoading(false)})
    );

    const subscription = fetchData.subscribe(setData);
   
    return () => subscription.unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return( 
  <Layout>   
    <SEO />         
    <PageHeader
      prev={[{ text: t.formatMessage({...menuMessages.home}), path: "/" }]}
      currentPage={t.formatMessage({...menuMessages.dashboard})}
      title={t.formatMessage({...menuMessages.dashboard})} />
      <PostCard title={"Nahlasil novou polohu"} user={{
        image: {
          src: "https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/131273260_10218550013368020_3840312457061816031_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=M8yomtEYJlEAX89FqW8&_nc_ht=scontent-prg1-1.xx&oh=00_AT_IYFgf9j7VS0xRxh38j6aRKjmpf0KBGf-6suSWs3bO-w&oe=633FCDB6",
          alt: undefined
        },
        name: "Preclikos Husák",
        path: "/profile/nejakyid",
        designation: "Czech - Guru",
        lastActivity: "Pred 2. hodinama"
      }} activity={{
        image: {
          src: "https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/305930899_5997173090293006_823830225743787113_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=f4VMkhScKKgAX8GgyCA&_nc_ht=scontent-prg1-1.xx&oh=00_AT83ezFHEkardChgqkahzaYMhjY3eB4t_3REzMruDvu6zA&oe=631E4754",
          alt: undefined
        },
        title: "Sifon s Vodou",
        path: "/lapis/nejakyid",
        excerpt: "Krasny kaminek nedaleko Noveho brodu, dekujeme posuneme dal."
      }} />
      </Layout>
      );
};

export default Dashboard;
