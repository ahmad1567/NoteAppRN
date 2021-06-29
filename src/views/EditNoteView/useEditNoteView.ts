import {useNavigation, useRoute} from "@react-navigation/native";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {Note} from "../../Framework.ts/models";
import {addNote, updateExistingNote} from "../../redux/actions";
import {ImagePickerResponse, launchCamera} from "react-native-image-picker";
import {Framework} from "../../Framework.ts/Framework";
import {AlertUtils} from "../../utilities/AlertUtils";

export interface EditNoteViewProps {
  titleValue: string;
  setTitleValue: (text: string) => void;
  bodyValue: string;
  setBodyValue: (text: string) => void;
  isReminder: boolean;
  setIsReminder: Function;
  dismiss: () => void;
  onSavePress: (note: Note) => void;
  onCameraPress: () => void;
}

export function useEditNoteView(): EditNoteViewProps {
  const route = useRoute();
  const routeNote = (route?.params as any)?.note;
  const [titleValue, setTitleValue] = useState(routeNote?.title);
  const [bodyValue, setBodyValue] = useState(routeNote?.body);
  const [isReminder, setIsReminder] = useState(routeNote?.isReminder);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const dismiss = () => navigation.goBack();
  const onError = () => AlertUtils.alert("generic_error", "please_try_again");
  const onSavePress = (note: Note) =>
    routeNote
      ? dispatch(updateExistingNote(routeNote?.id, note, onError))
      : dispatch(addNote(note, onError));
  const extractNote = async (response: ImagePickerResponse) => {
    if (response.assets[0].base64) {
      const text = await Framework.getInstance().NotesService.extractNote(
        response.assets[0].base64,
      );
      setBodyValue(`${bodyValue} ${text}`);
    }
  };
  const onCameraPress = () => {
    launchCamera(
      {mediaType: "photo", includeBase64: true, maxHeight: 1000, maxWidth: 500},
      extractNote,
    );
  };

  return {
    titleValue,
    setTitleValue,
    bodyValue,
    setBodyValue,
    isReminder,
    setIsReminder,
    dismiss,
    onSavePress,
    onCameraPress,
  };
}
