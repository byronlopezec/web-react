import React from 'react'
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className='notes__content'>

                <input type="text"
                    placeholder='Some awsome title'
                    className='notes__title-input'
                    autoComplete='off'
                />
                <textarea
                    placeholder='What happen today'
                    className='notes__textarea'
                    autoComplete='off'
                >
                </textarea>

                <div className='notes__image'>
                    <img alt='fondo'
                        src='https://www.xtrafondos.com/wallpapers/vertical/noche-en-las-montanas-con-planetas-de-fondo-7980.jpg'></img>
                </div>
            </div>
        </div>
    )
}
