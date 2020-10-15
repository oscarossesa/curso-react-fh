import Swal from 'sweetalert2'
import { db } from '../firebase/firebase-config'
import { fileUpload } from '../helpers/fileUpload'
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
    dispatch(addNewNote(documento.id, newNote))
  }
}

export const activeNote = (id, note) => ({
  type: types.noteActive,
  payload: {
    id,
    ...note
  }
})

export const addNewNote = (id, note) => ({
  type: types.noteAddNew,
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

export const startUploading = (file) => {
  return async (dispatch, getState) => {

    const { active: activeNote } = getState().notes

    Swal.fire({
      title: 'Uploading...',
      text: 'Plase wait...',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    })

    const fileUrl = await fileUpload(file)
    activeNote.url = fileUrl

    dispatch(startSaveNote(activeNote))

    Swal.close()

  }
}

export const startDeleting = (id) => {
  return async (dispatch, getState) => {

    const { uid } = getState().auth

    await db.doc(`${uid}/journal/notes/${id}`).delete()

    dispatch(deleteNote(id))

  }
}

export const deleteNote = (id) => ({
  type: types.noteDelete,
  payload: id
})

export const noteLogout = () => ({
  type: types.noteLogoutCleaning
})
