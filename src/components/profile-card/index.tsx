import { FC, useState } from "react";
import Anchor from "../ui/anchor";
import Card from "../ui/card/card";
import CardBody from "../ui/card/card-body";
import Media from "../ui/media/media";
import MediaBody from "../ui/media/media-body";


interface IProps {
    name: string;
    designation: string;
    company: string;
    location: string;
    bio: string;
    path: string;
    image: { src: string; alt?: string };
}

const ProfileCard: FC<IProps> = ({
    name,
    designation,
    company,
    location,
    bio,
    path,
    image,
}) => {
    const [ltlBio, setLtlBio] = useState("");
    const [expanded, setExpanded] = useState(false);
    
    const readMoreHandler = () => {
        if (!expanded) {
            setLtlBio(bio);
            setExpanded(true);
        } else {
            setLtlBio(bio.substring(0, 100) + "...");
            setExpanded(false);
        }
    };

    return (

        
        <>
           <Card className="card-profile">
                <CardBody className="p-[30px]">
                    <Media className="flex-col md:flex-row">
                        {image?.src && (
                            <img
                                src={image.src}
                                alt={image?.alt || "profile"}
                                className="mt-5 w-[120px] rounded-full"
                                width={120}
                                height={120}
                            />
                        )}

                        <MediaBody className="mt-[25px] md:mt-0 md:ml-[30px]">
                            <h3 className="font-normal">{name}</h3>
                            <p className="mb-[5px] text-[15px] text-heading leading-relaxed">
                                {designation} at{" "}
                                <span className="text-primary">{company}</span>
                            </p>
                            <p>{location}</p>

                            <p className="mb-0">
                                {ltlBio}{" "}
                                <button
                                    type="button"
                                    className="text-primary"
                                    onClick={readMoreHandler}
                                >
                                    Read {expanded ? "Less" : "More"}
                                </button>
                            </p>
                        </MediaBody>
                    </Media>
                </CardBody>
                <div className="bg-gray-200 border-t border-t-geyser md:flex md:items-center md:justify-between">
                    <Anchor
                        path={path}
                        className="block py-3.8 px-8 border-b border-geyser text-gray-600 md:border-b-0 md:px-5 md:py-0"
                    >
                        {path}
                    </Anchor>
                    <button
                        type="button"
                        className="inline-block py-3.8 px-8 md:px-5 md:border-l border-l-geyser text-primary"
                   >
                        Edit Profile
                    </button>
                </div>
            </Card>
        </>
    );
};

export default ProfileCard;
