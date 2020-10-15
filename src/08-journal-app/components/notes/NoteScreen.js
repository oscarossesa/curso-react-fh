import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { activeNote } from '../../actions/notesAction'
import { useForm } from '../../hooks/useForm'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {

  const dispatch = useDispatch()
  const { active: note } = useSelector(state => state.notes)
  const [ formValues, handleInputChange, reset ] = useForm(note)
  const { title, body } = formValues

  const activeId = useRef(note.id)

  useEffect(() => {
    
    if (note.id !== activeId.current) {
      reset(note)
      activeId.current = note.id
    }
    
  }, [note, reset])

  useEffect(() => {
    
    dispatch(activeNote(formValues.id, { ...formValues }))

  }, [formValues, dispatch])

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          name="title"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          name="body"
          placeholder="What happened today"
          className="notes__textarea"
          value={body}
          onChange={handleInputChange}
        />
        {
          note.url &&
          <div className="notes__image">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt="Landscape"
            />
          </div>
        }

      </div>
    </div>
  )
}

export default NoteScreen
