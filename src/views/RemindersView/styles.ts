import { ViewStyle } from "react-native";

interface Styles {
    container: ViewStyle,
    spinnerContainer: ViewStyle,
}

export const styles: Styles = {
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    spinnerContainer: { flex: 1,  justifyContent: "center" },
}