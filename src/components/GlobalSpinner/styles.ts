import { ViewStyle } from "react-native";
import { Colors } from "../../Styles";

interface Styles {
    container: ViewStyle,
}

export const styles: Styles = {
    container: {
        backgroundColor: Colors.overlay,
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        justifyContent: "center",
        flex: 1
    }
}