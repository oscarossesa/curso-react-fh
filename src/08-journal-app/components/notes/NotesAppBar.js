import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notesAction'

const NotesAppBar = () => {

  const dispatch = useDispatch()
  const { active: activeNote } = useSelector(state => state.notes)

  const handleSave = () => {
    dispatch(startSaveNote(activeNote))
  }

  return (
    <div className="notes__appbar">
      <span>28 de julio 2009</span>
      <div>
        <button
          className="btn"
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
