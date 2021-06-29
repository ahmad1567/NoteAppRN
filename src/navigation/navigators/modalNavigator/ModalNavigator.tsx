import React from "react";
import {StatusBar, View} from "react-native";
import {RouteNames} from "../../routes";
import {createStackNavigator} from "@react-navigation/stack";
import {createStackNavigationOptions} from "../utils";
import {EditNoteView} from "../../../views/EditNoteView";
import {styles} from "./styles";

const stackNavigator = createStackNavigator();

export function ModalNavigator(): JSX.Element {
  return (
    <>
      <StatusBar
        animated
        barStyle="dark-content"
        backgroundColor={"rgba(0,0,0,0.4)"}
      />
      <View style={styles.container}>
        <stackNavigator.Navigator
          initialRouteName={RouteNames.NoteModal}
          headerMode="none"
          screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: "transparent"},
          }}>
          <stackNavigator.Screen
            name={RouteNames.NoteModal}
            component={EditNoteView}
          />
        </stackNavigator.Navigator>
      </View>
    </>
  );
}
