import { useState } from "react";
import { Logo, MainMenu, MobileMenu, BurgerButton } from "@ht/components";
import SearchForm from "../../components/search-form";
import UserDropdown from "../../components/dropdown/user";
import NotificationDropdown from "../../components/dropdown/notification";
import ActivityDropdown from "../../components/dropdown/activity";
import menuData from "@ht/shared/data/menu";
import { useKeycloak } from "@react-keycloak/web";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { messages } from "./messages";

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
                                <ActivityDropdown />
                                <NotificationDropdown />
                                <UserDropdown />
                            </>
                        ) : (
                            <Link to="/signin">
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
