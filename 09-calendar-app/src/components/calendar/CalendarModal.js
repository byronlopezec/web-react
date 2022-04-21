import React, { useState } from 'react'
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {


    const [isOpen, setIsOpen] = useState(true);


    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <Modal isOpen={isOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"

        >
            <h1> Hola mundo </h1>
        </Modal>
    )
}