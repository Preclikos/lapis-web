import { useIntl } from "react-intl";
import { messages } from "./messages";
import Input from "../form-elements/input";
import Button from "../ui/button";
import Modal from "../ui/modal/modal";
import ModalBody from "../ui/modal/modal-body";
import { createRef, useState } from "react";

const SearchForm = () => {
    const t = useIntl();
    const inputRef = createRef<HTMLInputElement>()
    const [ searchModal, showSearchModal ] = useState<boolean>(false);

    return (
        <div className="pl-3">
            <div onClick={() => showSearchModal(true)} className="search-box rounded-full p-0.5 bg-gray-200 border border-geyser items-center hidden md:flex">
                <Input 
                    disabled={true}
                    id="search"
                    type="tel"
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
                    disabled={true}
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
                    onClick={() => showSearchModal(true)}
                >
                    <i className="fa fa-search"/>

                </Button>
            <div/>
            <Modal className={"pt-[3.45rem] overflow-scroll"} centered={false} show={searchModal} onClose={() => showSearchModal(false) } onEntering={() => {inputRef.current?.focus()}}>
                <ModalBody>
                    <div className="search-box rounded-full p-0.5 bg-gray-200 border border-geyser items-center flex">
                        <Input
                            type="tel"
                            ref={inputRef}
                            id="search-modal"
                            name="search"
                            placeholder={t.formatMessage({...messages.search})}
                            customStyle="nofocus"
                            className="w-11/12 border-0 bg-transparent  rounded-full bg-gray-200"
                        />
                        <Button
                            className="bg-primary-600 hover:bg-primary-400 focus:bg-primary-400 border-0"
                            shape="ellipse"
                            size="lg"
                            iconButton
                        >
                            <i className="fa fa-search"></i>
                        </Button>
                    </div>  
                    <div>
                        <div className="grid grid-cols-4 py-4">
                            <img  />
                            <div className="col-span-3">
                                <h4>Descripton</h4>
                                <p>Descripton</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 py-4">
                            <img  />
                            <div className="col-span-3">
                                <h4>Descripton</h4>
                                <p>Descripton</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 py-4">
                            <img  />
                            <div className="col-span-3">
                                <h4>Descripton</h4>
                                <p>Descripton</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 py-4">
                            <img  />
                            <div className="col-span-3">
                                <h4>Descripton</h4>
                                <p>Descripton</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 py-4">
                            <img  />
                            <div className="col-span-3">
                                <h4>Descripton</h4>
                                <p>Descripton</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 py-4">
                            <img  />
                            <div className="col-span-3">
                                <h4>Descripton</h4>
                                <p>Descripton</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 py-4">
                            <img  />
                            <div className="col-span-3">
                                <h4>Descripton</h4>
                                <p>Descripton</p>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
            </div>
        </div>       
    );
};

export default SearchForm;

