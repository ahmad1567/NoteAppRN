import {Note} from "../../Framework/models";

export interface NotesState {
  notes: Note[];
  isLoading: boolean;
  isNoteUpdating: boolean;
  hasError: boolean;
}
