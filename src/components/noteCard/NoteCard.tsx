import React, { useRef, MutableRefObject } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";
import { ActionSheet, ActionSheetElement } from "../ActionSheet";
import { LocaleUtils } from "../../utilities";
import { Note } from "../../Framework.ts/models";
import { Icons } from "../../../resources/icons";
import { IconSize, Colors } from "../../Styles";

interface NoteCardProps {
    title: string,
    body: string,
    createdOn: string,
    id: string
    onEdit: (note: Partial<Note>) => void
    onDelete: (noteId: string) => void
    isReminder?: boolean,
    reminderTime?: number,
}

export function NoteCard(props: NoteCardProps) {
    const { title, body, id, createdOn, onEdit, onDelete, isReminder } = props;
    const actionSheet: MutableRefObject<ActionSheetElement | null> = useRef(null);
    return (
        <View style={styles.container}>
            <View style={styles.titleSection}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={() => actionSheet?.current?.show()}>
                    <MaterialCommunityIcons name={Icons.Edit} color={Colors.black} size={IconSize.medium} />
                </TouchableOpacity>

            </View>
            <Text style={styles.createdOn}>{createdOn}</Text>
            <Text style={styles.body}>{body}</Text>
            <ActionSheet actionSheetElement={actionSheet} options={[
                {
                    text: LocaleUtils.getLocalizedString("edit"),
                    onPress: () => onEdit({ title, body, id, isReminder })
                },
                {
                    text: LocaleUtils.getLocalizedString("delete"),
                    onPress: () => onDelete(id)
                }
            ]} />
        </View>
    )
}