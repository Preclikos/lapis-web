import Keycloak from "keycloak-js";

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = new Keycloak({
    url: "https://login.lapis.report",
    realm: "Lapis",
    clientId: "lapis-web",
});

export default keycloak;
