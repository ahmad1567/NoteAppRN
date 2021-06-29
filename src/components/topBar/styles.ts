import { Platform, TextStyle, ViewStyle } from "react-native";

interface Styles {
    container: ViewStyle,
    text: TextStyle
}

export const styles: Styles = {
    container: {
        flexDirection: "row",
        width: "100%",
        zIndex: 3,
        height: 56,
        elevation: 3,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4
    },
    text: {
        fontSize: 30,
        marginHorizontal: 8,
        textAlignVertical: "center"
    }
}