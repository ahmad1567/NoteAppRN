import React from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import { LocaleUtils } from "../../utilities";
import { styles } from "./styles";
import { useSignUp } from "./useSignUp";

export function SignUp() {
    const { state, onEmailChange, onPasswordChange, signUp } = useSignUp();

    return (
        <View style={styles.container}>
            <TextInput style={styles.field} placeholder={LocaleUtils.getLocalizedString("email")} value={state.email} onChangeText={onEmailChange} />
            <TextInput style={styles.field} placeholder={LocaleUtils.getLocalizedString("password")} value={state.password} onChangeText={onPasswordChange} />
            <TouchableOpacity style={styles.touchable} onPress={signUp}>
                <Text style={styles.label}>
                    {LocaleUtils.getLocalizedString("sign_up")}
                </Text>
            </TouchableOpacity>
        </View>
    )
}