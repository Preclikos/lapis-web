import { useParams } from "react-router-dom";
import ProfileCard from "../../../components/profile-card";

interface IProfileProps
{
    id: string
}

const MainContent = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { id } = useParams<IProfileProps>();

    return (
        <>
            <ProfileCard 
            name={""}
             designation={""} 
             company={""} 
             location={""} 
             bio={""} 
             path={"https://"+window.location.host +"/profile?id="} 
             image={{src: "test", alt: "test"
            }} />
        </>
    );
};

export default MainContent;
