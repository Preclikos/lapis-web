import { useKeycloak } from "@react-keycloak/web";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const SignOut = () => {
    const router = useHistory();
    const { keycloak } = useKeycloak();
    useEffect(() =>
    {
        keycloak.logout({redirectUri: "https://lapis.report"}).then(() => router.push("/"))
    });

    return (<>Loading</>);
};

export default SignOut;