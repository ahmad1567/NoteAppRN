import React from "react";
import {View, TouchableOpacity, Text, TextInput} from "react-native";
import {LocaleUtils} from "../../utilities";
import {styles} from "./styles";
import {useLogin} from "./useLogin";

export function Login() {
  const {state, onEmailChange, onPasswordChange, login, onCreateUser} =
    useLogin();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.field}
        placeholder={LocaleUtils.getLocalizedString("email")}
        value={state.email}
        onChangeText={onEmailChange}
      />
      <TextInput
        style={styles.field}
        placeholder={LocaleUtils.getLocalizedString("password")}
        value={state.password}
        onChangeText={onPasswordChange}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.touchable} onPress={login}>
        <Text style={styles.label}>
          {LocaleUtils.getLocalizedString("login")}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footer} onPress={onCreateUser}>
        <Text style={styles.footerText}>
          {LocaleUtils.getLocalizedString("no_user")}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
