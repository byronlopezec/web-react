import moment from 'moment';
import React, { useState } from 'react'
import DateTimePicker from 'react-datetime-picker';
import Modal from 'react-modal';
import Swal from 'sweetalert2';


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

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const dateAfter = now.clone().add(1, 'hours');

export const CalendarModal = () => {

    const [dateStart, setDateStart] = useState(now.toDate());
    const [dateEnd, setDateEnd] = useState(dateAfter.toDate());
    const [titleValid, setTitleValid] = useState(true)

    const [formValues, setFormValues] = useState({
        title: 'Evento',
        notes: '',
        start: now.toDate(),
        end: dateAfter.toDate(),
    })

    const { notes, title, start, end } = formValues;

    const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const closeModal = () => {
        // TODO: cerrar modal
    }

    const handleDateStartChange = (date) => {
        setDateStart(date);
        setFormValues({
            ...formValues,
            start: date
        })
    }

    const handleDateEndChange = (date) => {
        setDateEnd(date);
        setFormValues({
            ...formValues,
            end: date
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const momentStart = moment(start);
        const momentEnd = moment(end);

        if (momentStart.isSameOrAfter(momentEnd)) {
            return Swal.fire('Error', 'La fecha de inicio debe ser menor a la fecha de fin', 'error');
        }

        if (title.trim().length < 2) {
            return setTitleValid(false);
        }

        //TODO: realizar grabacion
        setTitleValid(true);
        closeModal();

    }

    return (
        <Modal isOpen={true}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"

        >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container"
                onSubmit={handleSubmit}
            >

                <div className="form-group">
                    <label>Fecha y hora inicio</label>

                    <DateTimePicker
                        format="dd/MM/y h:mm a"
                        amPmAriaLabel='Select AM/PM'
                        className='form-control'
                        onChange={handleDateStartChange}
                        value={dateStart} />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        format="dd/MM/y h:mm a"
                        amPmAriaLabel='Select AM/PM'
                        className='form-control'
                        onChange={handleDateEndChange}
                        minDate={dateStart}
                        value={dateEnd} />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className={`form-control ${!titleValid && 'is-invalid'}`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={title}
                        onChange={handleInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={notes}
                        onChange={handleInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}