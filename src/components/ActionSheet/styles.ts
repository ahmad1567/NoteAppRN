import { ViewStyle, TextStyle } from "react-native";

export const actionSheetStyles = {
  buttonBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 50,
    paddingLeft: 8,
  } as ViewStyle,
  titleBox: {
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  } as ViewStyle,
  body: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  } as ViewStyle,
  cancelButtonBox: {
    height: 0,
    marginTop: 8,
  } as ViewStyle,
};

export default {
  buttonOptionContainer: {
    flex: 1,
  } as ViewStyle,
  buttonOptionTextContainer: {
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
  seperatorLine(hasIcon: boolean): ViewStyle {
    const MARGIN_LEFT_WITH_ICON = 68;
    const MARGIN_LEFT_WITHOUT_ICON = 8;
    return {
      height: 1,
      marginLeft: hasIcon ? MARGIN_LEFT_WITH_ICON : MARGIN_LEFT_WITHOUT_ICON,
    };
  },
  buttonOptionText: {
  } as TextStyle,
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
    marginRight: 36,
  } as ViewStyle,
  titleView: {
    width: 36,
    height: 4,
    borderRadius: 2,
  } as ViewStyle,
};
