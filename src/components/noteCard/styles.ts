import { TextStyle, ViewStyle } from "react-native";
import { Colors } from "../../Styles"

interface Styles {
    container: ViewStyle,
    titleSection: ViewStyle,
    title: TextStyle,
    createdOn: TextStyle
    body: TextStyle
}

export const styles: Styles = {
    container: {
        padding: 16,
        backgroundColor: Colors.backgroundColor,
        marginTop: 4,
        marginBottom: 4,
        marginHorizontal: 4,
        borderRadius: 8,
        elevation: 3
    },
    title: {
        fontSize: 15,
        color: Colors.noteTitle
    },
    titleSection: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between"
    },
    createdOn: {
        fontSize: 13,
        color: Colors.noteBody
    },
    body: {
        marginTop: 14,
        fontSize: 15,
        color: Colors.noteBody
    }

}