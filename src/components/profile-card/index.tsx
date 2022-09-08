import { FC } from "react";


interface IProps {
    name: string;
    designation: string;
    company: string;
    location: string;
    bio: string;
    path: string;
    image: { src: string; alt?: string };
}

const ProfileCard: FC<IProps> = () => {

    return (
        <>

        </>
    );
};

export default ProfileCard;
