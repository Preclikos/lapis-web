import { useEffect, useState } from "react";
import { takeUntil, scan, finalize, Subject } from "rxjs";
import Layout from "../layout";
import { fromFetchStream } from "../api/fromFetchStream";

interface LapisData
{
  id : number
  name: string
}

const Dashboard = () => {
  const [data, setData] = useState<LapisData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [stopSource, setstopSource] = useState(new Subject());

  useEffect(() => {
    setLoading(true)
    const fetchData = fromFetchStream<LapisData>('https://api.lapis.report/Search').pipe(
      takeUntil(stopSource),
      scan((all, item) =>  [...all, item], [] as LapisData[]),
      finalize(() => {setLoading(false)})
    );

    const subscription = fetchData.subscribe(setData);
   
    return () => subscription.unsubscribe();
  }, []);

  return <Layout>{data.map(m => {return <>{m.id + "-" + m.name}<br /></>})}</Layout>;
};

export default Dashboard;
