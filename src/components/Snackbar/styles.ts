import { ViewStyle, TextStyle, Platform } from "react-native";
// import { Colors, Fonts } from "../../styles";

export default {
  container: (isErrorSnackbar?: boolean): ViewStyle => {
    return {
      position: "absolute",
      minHeight: 48,
      marginHorizontal: 34,
      backgroundColor: "blue",
      left: 0,
      bottom: 0,
      right: 0,
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
      marginBottom: 52,
      borderRadius: 12,
    };
  },
  text: (isErrorSnackbar?: boolean): TextStyle => {
    return {
      color: "black",
      alignSelf: "flex-start",
    };
  },
  leftText: (isErrorSnackbar?: boolean): TextStyle => {
    return {
      color: "black",
      alignSelf: "flex-end",
    };
  },
  touchableContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 8,
    marginVertical: -8,
    marginRight: -8,
  } as ViewStyle,
  iconContainer: {
    flex: 0.2,
    paddingLeft: 10,
  } as ViewStyle,
  textAndIconContainer: {
    flexDirection: "row",
    flex: 3,
  } as ViewStyle,
  textContainer: {
    alignContent: "center",
    flex: 1,
  } as ViewStyle,
  touchableText: (isErrorSnackbar?: boolean): TextStyle => {
    return {
      ...Platform.select({
        ios: {
          // ...Fonts.button1,
          // color: isErrorSnackbar ? Colors.errorMessage : Colors.snackbarText,
        },
        android: {
          // ...Fonts.body2,
          // color: isErrorSnackbar
          //   ? Colors.errorMessage
          //   : Colors.snackbarTextAndroid,
        },
      }),
    };
  },
};
