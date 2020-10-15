import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notesAction'

const NotesAppBar = () => {

  const dispatch = useDispatch()
  const { active: activeNote } = useSelector(state => state.notes)

  const handleSave = () => {
    dispatch(startSaveNote(activeNote))
  }

  const handlePictureUpload = () => {
    document.querySelector('#fileSelector').click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      dispatch(startUploading(file))
    }
  }



  return (
    <div className="notes__appbar">
      <span>28 de julio 2009</span>
      <input
        id="fileSelector"
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div>
        <button
          className="btn"
          onClick={handlePictureUpload}
        >
          Picture
        </button>
        <button
          className="btn"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default NotesAppBar
