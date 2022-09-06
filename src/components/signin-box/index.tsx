
import { useKeycloak } from "@react-keycloak/web";
import { useCallback } from "react";
import { Redirect } from "react-router-dom";
import Logo from "../logo";
import Button from "../ui/button";

const SigninBox = () => {
   const { keycloak } = useKeycloak();
console.log("asd")
    const loginFacebook = useCallback(async () => {
        await keycloak?.login({ idpHint: "facebook" });
    }, [keycloak]);

    const loginGoogle = useCallback(async () => {
        await keycloak?.login({ idpHint: "google" });
    }, [keycloak]);

    return !keycloak.authenticated ? (
        <div className="signup-box w-full max-w-[500px] bg-white border border-ghost p-5 sm:p-10">
            <Logo className="mb-10 lg:mr-0" />
            <h2 className="font-light">Get Started!</h2>
            <h3 className="font-light text-body mb-[50px] leading-snug">
                It&apos;s free to signin and only takes a minute.
            </h3>
            <Button onClick={loginFacebook} color="facebook" fullwidth>
                Sign In Using Facebook
            </Button>
            <Button
                onClick={loginGoogle}
                fullwidth
                color="danger"
                className="mt-2"
            >
                Sign In Using Google
            </Button>
        </div>
    ) : (
        <Redirect to="/" />
    );
};

export default SigninBox;
