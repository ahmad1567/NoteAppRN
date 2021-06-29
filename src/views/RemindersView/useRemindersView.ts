import {useNavigation} from "@react-navigation/native";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Note} from "../../Framework/models";
import {RouteNames} from "../../navigation/routes";
import {getNotes, deleteNote as deleteNoteById} from "../../redux/actions";
import {AppState} from "../../redux/reducers/index";
import {AlertUtils} from "../../utilities/AlertUtils";

interface NotesViewProps {
  notes: Note[];
  isNotesLoading: boolean;
  addNote: () => void;
  editNote: (note: Partial<Note>) => void;
  deleteNote: (noteId: string) => void;
}

export function useRemindersView(): NotesViewProps {
  const notes = useSelector((state: AppState) =>
    state.NotesState.notes.filter(note => note.isReminder),
  );
  const isNotesLoading = useSelector(
    (state: AppState) => state.NotesState.isLoading,
  );
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  const addNote = () =>
    navigation.navigate(RouteNames.ModalStack, {screen: RouteNames.NoteModal});
  const editNote = (note: Partial<Note>) =>
    navigation.navigate(RouteNames.ModalStack, {
      screen: RouteNames.NoteModal,
      params: {note},
    });
  const onError = () => AlertUtils.alert("generic_error", "please_try_again");
  const deleteNote = (noteId: string) =>
    dispatch(deleteNoteById(noteId, onError));

  return {notes, addNote, editNote, deleteNote, isNotesLoading};
}
