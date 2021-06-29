import {Note} from "../../Framework.ts/models";

export interface NotesState {
  notes: Note[];
  isLoading: boolean;
  isNoteUpdating: boolean;
  hasError: boolean;
}
