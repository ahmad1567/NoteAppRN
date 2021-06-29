import { ViewStyle } from "react-native";
import { Colors } from "../../Styles";

interface Styles {
    container: ViewStyle
    icon: ViewStyle
}

export const styles: Styles = {
    container: {
        position: "absolute",
        bottom: 10,
        right: 20,
        zIndex: 1,
        borderRadius: 30,
        borderColor: "#215cb2",
        borderWidth: 1
    }, icon: {
        backgroundColor: Colors.backgroundColor,
        borderRadius: 40
    }
}