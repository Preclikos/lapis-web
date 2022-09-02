const Footer = () => {
    return (
        <footer className="bg-gray-100 border-t border-t-ghost mt-[1.875rem] py-[0.938rem] lg:p-0 lg:mt-[3.125rem]">
            <div className="container md:h-[3.75rem] md:flex md:items-center md:justify-between md:text-left text-sm text-center">
                <p className="mb-0">
                    Copyright {new Date().getFullYear()} &copy; All Rights
                    Reserved. Lapis in BlackZone Site Group
                </p>
            </div>
        </footer>
    );
};

export default Footer;
