import React from "react";
import {View, ScrollView} from "react-native";
import {NoteCard} from "../../components/noteCard";
import {Note} from "../../Framework.ts/models";
import {TopBar} from "../../components/topBar";
import {CircleButton} from "../../components/CircleButton";
import {LocaleUtils} from "../../utilities";
import {useRemindersView} from "./useRemindersView";
import {styles} from "./styles";
import {ActivityIndicator} from "react-native-paper";
import {EmptyView} from "../EmptyView";
import {Icons} from "../../../resources/icons";
import {Colors, IconSize} from "../../Styles";
import {MomentUtils} from "../../utilities/MomentUtils";

export function RemindersView(): JSX.Element {
  const {notes, editNote, addNote, deleteNote, isNotesLoading} =
    useRemindersView();

  return (
    <View style={styles.container}>
      <TopBar title={LocaleUtils.getLocalizedString("reminders")} />
      {isNotesLoading ? (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator color={Colors.blue} size={IconSize.default} />
        </View>
      ) : (
        <NotesList
          notes={notes}
          isLoading={isNotesLoading}
          editNote={editNote}
          deleteNote={deleteNote}
        />
      )}
      <CircleButton onPress={addNote} iconName={Icons.Add} />
    </View>
  );
}

function NotesList(props: {
  notes: Note[];
  editNote: (note: Partial<Note>) => void;
  deleteNote: (noteId: string) => void;
  isLoading: boolean;
}) {
  const {notes, editNote, deleteNote} = props;

  if (notes.length) {
    return (
      <ScrollView>
        {notes.map((note: Note) => (
          <NoteCard
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            isReminder={note.isReminder}
            createdOn={`${LocaleUtils.getLocalizedString(
              "created_on",
            )} ${MomentUtils.getFormattedDate(note.createdOn)}`}
            onEdit={editNote}
            onDelete={deleteNote}
          />
        ))}
      </ScrollView>
    );
  }

  return <EmptyView title={LocaleUtils.getLocalizedString("no_notes")} />;
}
