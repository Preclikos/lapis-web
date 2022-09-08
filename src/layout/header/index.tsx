import { useState } from "react";
import { Link } from "react-router-dom";
import menuData from "../../data/menu";
import Logo from "../../components/logo";
import MainMenu from "../../components/main-menu";
import BurgerButton from "../../components/ui/burger-button";
import MobileMenu from "../../components/mobile-menu";
import { FormattedMessage } from "react-intl";
import { messages } from "./messages";
import UserDropdown from "../../components/user-dropdown";
import { useKeycloak } from "@react-keycloak/web";
import SearchForm from "../../components/search-form";
import Button from "../../components/ui/button";


const Header = () => {
    const { keycloak } = useKeycloak();
    const [offcanvas, setOffcanvas] = useState(false);
    const offcanvasHandler = () => {
        setOffcanvas((prev) => !prev);
    };

    return (
        <>
            <div className="h-[75px] flex items-center bg-white border-b border-b-geyser">
                <div className="container flex items-center justify-between">
                    <div className="header-left flex items-center">
                        <Logo />
                        <SearchForm />
                    </div>
                    <div className="header-right flex items-center">
                    {keycloak.authenticated ? (
                            <>
                                <UserDropdown />
                            </>
                        ) : (<Link to="/signin">
                                <FormattedMessage {...messages.login} />
                            </Link>    
                                )}           
                            <BurgerButton
                                label="Click here to open offcanvas menu"
                                onClick={offcanvasHandler}
                                className="ml-[0.938rem] lg:hidden"
                        />
                    </div>
                </div>
            </div>
            <MainMenu menu={menuData} />
            <MobileMenu
                menu={menuData}
                isOpen={offcanvas}
                onClick={offcanvasHandler}
            />
        </>
    );
};

export default Header;
