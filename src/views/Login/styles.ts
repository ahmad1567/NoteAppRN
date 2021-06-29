import { TextStyle, ViewStyle } from "react-native";
import { Colors } from "../../Styles"

interface Styles {
    container: ViewStyle,
    field: TextStyle,
    touchable: ViewStyle
    label: TextStyle,
    footer: ViewStyle,
    footerText: TextStyle
}

export const styles: Styles = {
    container: {
        flex: 1,
        justifyContent: "center"
    },
    field: {
        alignSelf: "center",
        fontSize: 14,
        borderRadius: 30,
        borderWidth: 1,
        minWidth: 300,
        backgroundColor: Colors.backgroundColor,
        borderColor: Colors.blue,
        color: Colors.black,
        marginVertical: 5,
        textAlign: "center",
        textAlignVertical: "center"
    },
    touchable: {
        marginTop: 16,
        alignSelf: "center",
        borderRadius: 30,
        borderWidth: 1,
        minWidth: 150,
        backgroundColor: Colors.blue,
        borderColor: Colors.blue,
    },
    label: {
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 16,
        color: Colors.backgroundColor,
        paddingVertical: 10
    },
    footer: {
        justifyContent: "center",
        marginTop: 10
    },
    footerText: {
        textAlign: "center",
        color: Colors.blue
    }
}