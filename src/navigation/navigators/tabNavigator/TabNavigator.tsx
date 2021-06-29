import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RouteNames} from "../../routes";
import {NotesView} from "../../../views/NotesView";
import {RemindersView} from "../../../views/RemindersView";
import {createBottomTabNavigationOptions} from "../utils";
import {Icons} from "../../../../resources/icons";

export function TabNavigator(): JSX.Element {
  const TabNavigator = createBottomTabNavigator();
  return (
    <TabNavigator.Navigator initialRouteName={RouteNames.NotesView}>
      <TabNavigator.Screen
        name={RouteNames.NotesView}
        component={NotesView}
        options={createBottomTabNavigationOptions({
          iconName: Icons.Notes,
          labelKey: "notes",
        })}
      />
      <TabNavigator.Screen
        name={RouteNames.RemindersView}
        component={RemindersView}
        options={createBottomTabNavigationOptions({
          iconName: Icons.Reminders,
          labelKey: "reminders",
        })}
      />
    </TabNavigator.Navigator>
  );
}
