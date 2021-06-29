import React from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { LocaleUtils } from "../../utilities";
import { Switch } from 'react-native-paper';
import { styles } from "./styles";
import { useEditNoteView } from "./useEditNoteView";
import { ModalSheet } from "../../components/modalSheet";
import { Note } from "../../Framework.ts/models";
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, IconSize } from "../../Styles"
import { Icons } from "../../../resources/icons";


export function EditNoteView() {
    const { titleValue, setTitleValue, bodyValue, setBodyValue, isReminder, setIsReminder, dismiss, onSavePress, onCameraPress } = useEditNoteView();


    return (
        <ModalSheet
            isVisible={true}
            setIsVisible={dismiss}
            title={LocaleUtils.getLocalizedString("note")}
            rightButtonTitle={LocaleUtils.getLocalizedString("save")}
            onRightButtonPress={() => {
                const note = { body: bodyValue, title: titleValue, isReminder } as any as Note
                onSavePress(note)
            }}
            isRightButtonDisabled={!titleValue?.trim() || !bodyValue?.trim()}
        >
            <View>
                <View style={styles.reminderSection}>
                    <Text style={styles.reminderLabel}>{LocaleUtils.getLocalizedString("set_as_reminder")}</Text>
                    <Switch value={isReminder} onValueChange={() => setIsReminder(!isReminder)} />
                </View>
                <View style={styles.line} />
                <TextInput placeholder={LocaleUtils.getLocalizedString("title")} value={titleValue} onChangeText={setTitleValue} />
                <View style={styles.line} />
                <TextInput placeholder={LocaleUtils.getLocalizedString("note")} value={bodyValue} onChangeText={setBodyValue} />
                <TouchableOpacity style={styles.cameraButtonContainer} onPress={onCameraPress}>
                    <MaterialIcons color={Colors.black} size={IconSize.default} name={Icons.Camera} />
                </TouchableOpacity>
            </View>
        </ModalSheet>
    )
}

