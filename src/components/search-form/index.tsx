import { useIntl } from "react-intl";
import { messages } from "./messages";
import Input from "../form-elements/input";
import Button from "../ui/button";

const SearchForm = () => {
    const t = useIntl();

    return (
        <div className="pl-3">
            <div className="search-box rounded-full p-0.5 bg-gray-200 border border-geyser items-center hidden md:flex">
                <Input
                    id="search"
                    name="search"
                    placeholder={t.formatMessage({...messages.search})}
                    customStyle="nofocus"
                    className="w-[15.625rem] border-0 bg-transparent pl-6 rounded-full bg-gray-200 "
                />
                <Button
                    className="bg-primary-400 hover:bg-primary-400 focus:bg-primary-400 border-0"
                    shape="ellipse"
                    size="lg"
                    iconButton
                >
                    <i className="fa fa-search"></i>
                </Button>
            </div>        
            <div className="search-box rounded-full p-0.5 bg-gray-200 border border-geyser items-center md:hidden">
                <Button
                    className="bg-primary-400 hover:bg-primary-400 focus:bg-primary-400 border-0"
                    shape="ellipse"
                    size="lg"
                    iconButton
                >
                    <i className="fa fa-search"></i>
                </Button>
            </div>
        </div>       
    );
};

export default SearchForm;
