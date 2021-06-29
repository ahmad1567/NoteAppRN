import { ActionTypes, Action } from "../actions";
import { NotesState } from "../models";

const initialState: NotesState = {
    notes: [],
    isLoading: true,
    isNoteUpdating: false,
    hasError: false
}

export const notesReducer = (state = initialState, action: Action): NotesState => {
    switch (action.type) {
        case ActionTypes.UPDATE_NOTES:
            return { ...state, notes: [...action.result] };
        case ActionTypes.UPDATE_NOTE:
            return { ...state, notes: [...state.notes, action.result] }
        case ActionTypes.UPDATE_NOTE_BY_ID: {
            const notes = [...state.notes];
            const { noteId, note } = action.result;
            const index = notes.findIndex(note => note.id === noteId);
            if (index >= 0) {
                notes[index] = { ...note };
            }
            return { ...state, notes }
        }
        case ActionTypes.DELETE_NOTE: {
            const notes = [...state.notes];
            const { noteId } = action.result;
            const index = notes.findIndex(note => note.id === noteId);
            notes.splice(index, 1)
            return { ...state, notes }
        }
        case ActionTypes.UPDATE_IS_LOADING:
            return { ...state, isLoading: action.result };
        case ActionTypes.UPDATE_HAS_ERROR:
            return { ...state, hasError: action.result };
        case ActionTypes.UPDATE_IS_NOTE_UPDATING:
            return { ...state, isNoteUpdating: action.result }
        default:
            return { ...state }
    }

}