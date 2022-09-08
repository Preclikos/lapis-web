import { FC } from "react";
import Modal from "../../ui/modal/modal";
import ModalClose from "../../ui/modal/modal-close";
import ModalHeader from "../../ui/modal/modal-header";
import ModalTitle from "../../ui/modal/modal-title";

interface IProps {
    show: boolean;
    onClose: () => void;
}

const CommentModal: FC<IProps> = ({ show, onClose }) => {
    return (
        <Modal show={show} onClose={onClose}>
            <ModalHeader>
                <ModalTitle tag="h5">Comments</ModalTitle>
                <ModalClose onClose={onClose}>x</ModalClose>
            </ModalHeader>
            <ul className="py-3">
                <li className="border-b border-ghost py-3 px-4 flex last:border-b-0">
                    <img
                        src={""}
                        alt="comment"
                        className="w-14 h-14 rounded-full"
                    />
                    <div className="pl-3">
                        <div className="flex justify-between items-center">
                            <h5>John Wick</h5>
                            <span className="text-sm text-gray-600">
                                12 March, 2021
                            </span>
                        </div>
                        <p className="mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Libero, consequatur aliquam
                        </p>
                    </div>
                </li>
                <li className="border-b border-ghost py-3 px-4 flex last:border-b-0">
                    <img
                        src={""}
                        alt="comment"
                        className="w-14 h-14 rounded-full"
                    />
                    <div className="pl-3">
                        <div className="flex justify-between items-center">
                            <h5>Jack Sparrow</h5>
                            <span className="text-sm text-gray-600">
                                12 March, 2021
                            </span>
                        </div>
                        <p className="mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Libero, consequatur aliquam
                        </p>
                    </div>
                </li>
                <li className="border-b border-ghost py-3 px-4 flex last:border-b-0">
                    <img
                        src={""}
                        alt="comment"
                        className="w-14 h-14 rounded-full"
                    />
                    <div className="pl-3">
                        <div className="flex justify-between items-center">
                            <h5>Barry Allen</h5>
                            <span className="text-sm text-gray-600">
                                12 March, 2021
                            </span>
                        </div>
                        <p className="mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Libero, consequatur aliquam
                        </p>
                    </div>
                </li>
            </ul>
        </Modal>
    );
};

export default CommentModal;
