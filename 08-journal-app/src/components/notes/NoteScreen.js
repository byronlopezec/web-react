import React, { useEffect, useRef } from 'react'
import { NotesAppBar } from './NotesAppBar';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from './../../hooks/useForm';
import { activateNote } from './../../actions/notes';

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active: note } = useSelector(state => state.notes);
    //useform solo actualiza su estado
    const [formValues, handleInputChange, reset] = useForm(note)
    const { body, title } = formValues;

    // creamos un useRef para mantener el id de la nota
    const activeId = useRef(note.id);


    // disparamos useEffect para cuando cambie el id de la nota
    useEffect(() => {

        // Si el id de la nota es diferente al id de la nota que tenemos en el useRef
        if (note.id !== activeId.current) {
            // ejecutamos el reset para actualizar el estado del useForm
            reset(note);
            // actualizamos el useRef
            activeId.current = note.id;
        }
    }, [note, reset]);


    useEffect(() => {
        // const note = formValues.note ? formValues.note : formValues
        dispatch(activateNote(formValues.id, { ...formValues }));
    }, [formValues, dispatch])

    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className='notes__content'>

                <input type="text"
                    placeholder='Some awsome title'
                    className='notes__title-input'
                    autoComplete='off'
                    name='title'
                    value={title}
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder='What happen today'
                    className='notes__textarea'
                    autoComplete='off'
                    value={body}
                    name='body'
                    onChange={handleInputChange}
                >
                </textarea>

                {
                    (note?.url) &&
                    <div className='notes__image'>
                        <img alt='fondo'
                            src={note.url}
                        />
                    </div>
                }
            </div>
        </div>
    )
}
