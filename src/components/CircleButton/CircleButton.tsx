import React from "react";
import { TouchableOpacity, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors, IconSize } from "../../Styles";
import { styles } from "./styles";


interface CircleButtonProps {
    iconName: string
    onPress: () => void;
}

export function CircleButton(props: CircleButtonProps): JSX.Element {
    const { iconName, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <MaterialIcons color={Colors.blue} size={IconSize.large} name={iconName} style={styles.icon} />
        </TouchableOpacity>
    );
}