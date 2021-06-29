import { ViewStyle, TextStyle } from "react-native";
import { Colors } from "../../Styles/Colors";

interface Styles {
    container: ViewStyle,
    modalTopView: ViewStyle
    modalView: ViewStyle,
    rightButton: ViewStyle
    title: TextStyle,
    leftButton: ViewStyle,
    topSection: ViewStyle,
    rightButtonTitle: TextStyle
}

export const styles: Partial<Styles> = {
    container: {
        flex: 1,
        opacity: 1
    },
    modalView: {
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        padding: 35,
        elevation: 1,
        height: "100%",
        backgroundColor: Colors.backgroundColor,

    },
    modalTopView: {
        height: 150,
        backgroundColor: Colors.black,
        opacity: 0.5
    },
    topSection: {
        flexDirection: "row",
        paddingHorizontal: 4,
        height: 50
    },
    title: {
        textAlign: "center",
        flex: .5
    },
    leftButton: { flex: .25, alignSelf: "flex-start" },
    rightButton: { flex: .25 },
    rightButtonTitle: { textAlign: "right" }
};