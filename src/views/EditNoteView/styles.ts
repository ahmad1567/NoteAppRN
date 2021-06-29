import {ViewStyle, TextStyle} from "react-native";

interface Styles {
  reminderSection: ViewStyle;
  reminderLabel: TextStyle;
  line: ViewStyle;
  cameraButtonContainer: ViewStyle;
}

export const styles: Styles = {
  reminderSection: {flexDirection: "row"},
  reminderLabel: {textAlign: "center", marginTop: 6},
  line: {height: 1, borderWidth: 1, borderColor: "grey"},
  cameraButtonContainer: {position: "absolute", top: 480},
};
