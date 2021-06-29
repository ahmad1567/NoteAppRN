import {AnyAction, combineReducers, CombinedState} from "redux";
import {NotesState} from "../models";
import {notesReducer} from "./NotesReducer";

export interface AppState {
  NotesState: NotesState;
}

export const reducers = combineReducers<AppState>({
  NotesState: notesReducer,
});

export const rootReducer = (
  state: AppState | undefined,
  action: AnyAction,
): AppState => {
  return reducers(state, action);
};
