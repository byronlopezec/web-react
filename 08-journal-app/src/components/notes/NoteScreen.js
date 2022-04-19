import React from 'react'
import { NotesAppBar } from './NotesAppBar';
import { useSelector } from 'react-redux';
import { useForm } from './../../hooks/useForm';

export const NoteScreen = () => {

    const { active: note } = useSelector(state => state.notes);

    const [values, handleInputChange] = useForm({ note })

    const { id, title, body, url, date } = values;

    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className='notes__content'>

                <input type="text"
                    placeholder='Some awsome title'
                    className='notes__title-input'
                    autoComplete='off'
                    value={title}
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder='What happen today'
                    className='notes__textarea'
                    autoComplete='off'
                    value={body}
                    onChange={handleInputChange}
                >
                </textarea>

                {
                    (note.url) &&
                    <div className='notes__image'>
                        <img alt='fondo'
                            src={url} />
                    </div>
                }
            </div>
        </div>
    )
}
