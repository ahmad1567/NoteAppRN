import { ViewStyle, TextStyle } from "react-native";

interface Styles {
    container: ViewStyle,
    icon: ViewStyle,
    title: TextStyle
}

export const styles: Styles = {
    container: { flex: 1, justifyContent: "center" },
    icon: { alignSelf: "center" },
    title: { textAlign: "center", fontSize: 24, marginTop: 20 }
}