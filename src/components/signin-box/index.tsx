
import { useKeycloak } from "@react-keycloak/web";
import { useCallback } from "react";
import { FormattedMessage } from "react-intl";
import { Redirect } from "react-router-dom";
import Logo from "../logo";
import Button from "../ui/button";
import { messages } from "./messages";

const SigninBox = () => {
   const { keycloak } = useKeycloak();

    const loginFacebook = useCallback(async () => {
        await keycloak?.login({ idpHint: "facebook", });
    }, [keycloak]);

    const loginGoogle = useCallback(async () => {
        await keycloak?.login({ idpHint: "google" });
    }, [keycloak]);

    return !keycloak.authenticated ? (
        <div className="signup-box w-full max-w-[500px] bg-white border border-ghost p-5 sm:p-10">
            <Logo className="mb-10 lg:mr-0" />
            <h2 className="font-light"><FormattedMessage {...messages.title} /> </h2>
            <h3 className="font-light text-body mb-[50px] leading-snug">
                <FormattedMessage {...messages.content} /> 
            </h3>
            <Button onClick={loginFacebook} color="facebook" fullwidth>
                <FormattedMessage {...messages.facebook} /> 
            </Button>
            <Button
                onClick={loginGoogle}
                fullwidth
                color="danger"
                className="mt-2"
            >
                <FormattedMessage {...messages.google} />
            </Button>
        </div>
    ) : (
        <Redirect to="/" />
    );
};

export default SigninBox;
