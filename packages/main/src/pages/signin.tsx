import SigninBox from "../components/auth/";
import SEO from "../components/seo";

const Signin = () => {
    return (
        <>
            <SEO />
            <div className="signup-wrapper p-2.5 min-h-screen flex justify-center items-center sm:p-[30px]">
                <SigninBox />
            </div>
        </>
    );
};

export default Signin;
