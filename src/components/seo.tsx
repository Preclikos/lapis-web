import { FC } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface IProps {
    title?: string;
    titleTemplate?: string;
    description?: string;
}

const SEO: FC<IProps> = ({ title, titleTemplate, description }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    {title} - {titleTemplate}
                </title>
                <meta name="description" content={description} />
            </Helmet>
        </HelmetProvider>
    );
};

SEO.defaultProps = {
    title: "Lapis",
    titleTemplate: "About how stones travel",
    description: "About how stones travel",
};

export default SEO;
