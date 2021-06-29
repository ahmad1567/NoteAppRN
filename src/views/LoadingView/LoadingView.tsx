
import React from "react"
import { View, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { Colors, IconSize } from "../../Styles";

export function LoadingView() {
    return <View style={styles.spinnerContainer}><ActivityIndicator color={Colors.blue} size={IconSize.default} /></View>
}