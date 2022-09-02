import { useKeycloak } from "@react-keycloak/web";
import Preloader from "../components/preloader";

const Signout = () => {
    const { keycloak } = useKeycloak();
    const path = location.protocol + "//" + location.host;
    void keycloak?.logout({ redirectUri: path });

    return <Preloader />;
};

export default Signout;
