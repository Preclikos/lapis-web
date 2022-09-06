import { useState } from "react";
import { Link } from "react-router-dom";
import menuData from "../../data/menu";
import Logo from "../../components/logo";
import MainMenu from "../../components/main-menu";
import BurgerButton from "../../components/ui/burger-button";
import MobileMenu from "../../components/mobile-menu";

const Header = () => {
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

                    </div>
                    <div className="header-right flex items-center">
                            <Link to="/signin">
                                Sign In
                            </Link>               
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
