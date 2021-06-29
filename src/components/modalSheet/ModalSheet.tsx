import React, { ReactNode } from "react";
import { View, TouchableOpacity, Text, Modal } from "react-native";
import { styles } from "./styles";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Icons } from "../../../resources/icons";
import { IconSize, Colors } from "../../Styles";


export interface ModalProps {
    isVisible: boolean,
    setIsVisible: (visibility: boolean) => void
    onRightButtonPress: () => void
    rightButtonTitle: string
    isRightButtonDisabled: boolean
    title: string
    children: JSX.Element | ReactNode
}

export function ModalSheet(props: ModalProps) {
    const { setIsVisible, rightButtonTitle, title, onRightButtonPress, isRightButtonDisabled } = props;

    return (
        <View style={styles.modalView}>
            <View style={styles.topSection}>
                <TouchableOpacity style={styles.leftButton} onPress={() => setIsVisible(false)}>
                    <MaterialIcons name={Icons.ArrowBack} size={IconSize.medium} />
                </TouchableOpacity>
                <Text style={styles.title}>
                    {title}
                </Text>
                <TouchableOpacity disabled={isRightButtonDisabled} onPress={() => { onRightButtonPress(); setIsVisible(false); }} style={styles.rightButton}>
                    <Text style={[styles.rightButtonTitle, { color: isRightButtonDisabled ? Colors.grey : Colors.black }]}>{rightButtonTitle}</Text>
                </TouchableOpacity>
            </View>
            {props.children}
        </View>
    )
}