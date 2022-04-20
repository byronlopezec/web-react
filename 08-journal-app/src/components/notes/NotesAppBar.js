import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploadPicture } from './../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();

    const { active } = useSelector(state => state.notes);

    const handleSave = () => {

        dispatch(startSaveNote(active))
    }

    const handlePicture = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            dispatch(startUploadPicture(file))
        }

    }
    return (
        <div className='notes__appbar'>
            <span> 28 febre 2020</span>
            <div>
                <input
                    id='fileSelector'
                    type="file"
                    name="file"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <button className='btn' onClick={handlePicture}>picture</button>
                <button className='btn'
                    onClick={handleSave}
                >Save</button>
            </div>
        </div>
    )
}
