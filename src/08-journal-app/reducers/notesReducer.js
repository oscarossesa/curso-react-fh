const { types } = require("../types/types");

const initialState = {
  notes: [],
  active: null
}

export const notesReducer = (state = initialState, action) => {

  switch (action.type) {

    case types.noteActive:
      return {
        ...state,
        active: {
          ...action.payload,
        }
      }

    case types.noteLoad:
      // console.log(action.payload)
      return {
        ...state,
        notes: [
          ...action.payload,
        ]
      }

    case types.noteUpdated:
      return {
        ...state,
        notes: state.notes.map(note => note.id === action.payload.id ? action.payload.note: note)
      }

    default:
      return state
  }

}