import { Framework } from "../../Framework/Framework";
import { Note } from "../../Framework/models";

export interface Action {
  type: ActionTypes;
  result?: any;
}

export enum ActionTypes {
  UPDATE_NOTES = "UPDATE_NOTES",
  UPDATE_NOTE = "UPDATE_NOTE",
  UPDATE_NOTE_BY_ID = "UPDATE_NOTE_BY_ID",
  DELETE_NOTE = "DELETE_NOTE",
  UPDATE_IS_LOADING = "UPDATE_IS_LOADING",
  UPDATE_IS_NOTE_UPDATING = "UPDATE_IN_NOTE_UPDATING",
  UPDATE_HAS_ERROR = "UPDATE_HAS_ERROR",
}

type ThunkAction = (dispatch: Dispatch, getState: () => any) => any;
type Dispatch = (action: Action | ThunkAction) => any;

const updateNotes = (notes: Note[]): Action => ({
  type: ActionTypes.UPDATE_NOTES,
  result: notes,
});

const updateNote = (note: Note): Action => ({
  type: ActionTypes.UPDATE_NOTE,
  result: note,
});

const updateNoteById = (noteId: string, note: Note): Action => ({
  type: ActionTypes.UPDATE_NOTE_BY_ID,
  result: { note, noteId },
});

const deleteNoteById = (noteId: string): Action => ({
  type: ActionTypes.DELETE_NOTE,
  result: noteId,
});

const getNotes = (onDone?: () => void): ThunkAction => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(updateIsLoading(false));
      const notes = await Framework.getInstance().NotesService.getAllNotes();
      dispatch(updateNotes(notes));
    } catch (error) {
      dispatch(updateHasError(true));
    } finally {
      dispatch(updateIsLoading(false));
      onDone?.();
    }
  };
};

const getNote = (noteId: string): ThunkAction => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      const note = await Framework.getInstance().NotesService.getNote(noteId);
      dispatch(updateNote(note));
    } catch (error) {
      dispatch(updateHasError(true));
    } finally {
      dispatch(updateIsLoading(false));
    }
  };
};

const updateExistingNote = (
  noteId: string,
  note: Partial<Note>,
  onError?: () => void,
): ThunkAction => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(updateIsNoteUpdating(true));
      const notesService = Framework.getInstance().NotesService;
      await notesService.updateNote(noteId, note);
      const updatedNote = await notesService.getNote(noteId);
      dispatch(updateNoteById(noteId, updatedNote));
    } catch (error) {
      onError?.();
      dispatch(updateHasError(true));
    } finally {
      dispatch(updateIsNoteUpdating(false));
    }
  };
};

const addNote = (note: Note, onError?: () => void): ThunkAction => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(updateIsNoteUpdating(true));
      const notesService = Framework.getInstance().NotesService;
      const noteData = await notesService.addNote(note);
      dispatch(updateNote(noteData));
    } catch (error) {
      onError?.();
      dispatch(updateHasError(true));
    } finally {
      dispatch(updateIsNoteUpdating(false));
    }
  };
};

const deleteNote = (noteId: string, onError?: () => void): ThunkAction => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(updateIsNoteUpdating(true));
      await Framework.getInstance().NotesService.deleteNote(noteId);
      dispatch(deleteNoteById(noteId));
    } catch (error) {
      onError?.();
      dispatch(updateHasError(true));
    } finally {
      dispatch(updateIsNoteUpdating(false));
    }
  };
};

const updateIsLoading = (isLoading: boolean): Action => ({
  type: ActionTypes.UPDATE_IS_LOADING,
  result: isLoading,
});

const updateHasError = (hasError: boolean): Action => ({
  type: ActionTypes.UPDATE_HAS_ERROR,
  result: hasError,
});

const updateIsNoteUpdating = (hasError: boolean): Action => ({
  type: ActionTypes.UPDATE_IS_NOTE_UPDATING,
  result: hasError,
});

export {
  getNote,
  getNotes,
  updateNoteById,
  updateNote,
  updateNotes,
  deleteNote,
  updateExistingNote,
  addNote,
};
