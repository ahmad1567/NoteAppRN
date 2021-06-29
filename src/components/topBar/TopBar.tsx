import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface TopBarProps {
    title: string
}

export function TopBar(props: TopBarProps) {
    const { title } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}