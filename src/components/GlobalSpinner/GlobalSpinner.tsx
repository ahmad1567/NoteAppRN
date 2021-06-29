import React from "react";
import {ActivityIndicator, View} from "react-native";
import {IconSize, Colors} from "../../Styles";
import {styles} from "./styles";

export function GlobalSpinner(props: {isVisible: boolean}): JSX.Element | null {
  const {isVisible} = props;

  if (isVisible) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={IconSize.large} color={Colors.blue} />
      </View>
    );
  }

  return null;
}
