import Swal from 'sweetalert2'
import { db } from '../firebase/firebase-config'
import { loadNote } from '../helpers/loadNote'
import { types } from '../types/types'

export const startNewNote = () => {
  return async (dispatch, getState) => {

    const { uid } = getState().auth
    
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }

    const documento = await db.collection(`${uid}/journal/notes`).add(newNote)

    dispatch(activeNote(documento.id, newNote))
  }
}

export const activeNote = (id, note) => ({
  type: types.noteActive,
  payload: {
    id,
    ...note
  }
})

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {

    const notes = await loadNote(uid)
    dispatch(setNotes(notes))

  }
}

export const setNotes = (notes) => ({
  type: types.noteLoad,
  payload: notes
})

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {

    const { uid } = getState().auth

    if (!note.url)
      delete note.url

    const noteToFirebase = { ...note }
    delete noteToFirebase.id

    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirebase)

    dispatch(refreshNote(note.id, noteToFirebase))
    Swal.fire('Saved', note.title, 'success')

  }
}

export const refreshNote = (id, note) => ({
  type: types.noteUpdated,
  payload: {
    id,
    note: {
      id,
      ...note
    }
  }
})