import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Note } from "../../Framework/models";
import { RouteNames } from "../../navigation/routes";
import { getNotes, deleteNote as deleteNoteById } from "../../redux/actions";
import { AppState } from "../../redux/reducers/index";
import { AlertUtils } from "../../utilities/AlertUtils";

interface NotesViewProps {
  notes: Note[];
  isNotesLoading: boolean;
  refreshing: boolean;
  setIsRefreshing: () => void;
  addNote: () => void;
  editNote: (note: Partial<Note>) => void;
  deleteNote: (noteId: string) => void;
}

export function useNoteView(): NotesViewProps {
  const notes = useSelector((state: AppState) => state.NotesState.notes);
  const isNotesLoading = useSelector(
    (state: AppState) => state.NotesState.isLoading,
  );
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const setIsRefreshing = useCallback((isRefresh: boolean): void => setRefreshing(isRefresh), []);

  useEffect(() => {
    if (isNotesLoading || refreshing)
      dispatch(getNotes(() => setIsRefreshing(false)));
  }, [dispatch, refreshing]);

  const addNote = () =>
    navigation.navigate(RouteNames.ModalStack, { screen: RouteNames.NoteModal });
  const editNote = (note: Partial<Note>) =>
    navigation.navigate(RouteNames.ModalStack, {
      screen: RouteNames.NoteModal,
      params: { note },
    });
  const onError = () => AlertUtils.alert("generic_error", "please_try_again");
  const deleteNote = (noteId: string) =>
    dispatch(deleteNoteById(noteId, onError));

  return {
    notes, addNote, editNote, deleteNote, isNotesLoading, refreshing, setIsRefreshing: () => setIsRefreshing(true)
  }
};
