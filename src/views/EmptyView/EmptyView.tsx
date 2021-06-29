import React from "react";
import {View, Text} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icons} from "../../../resources/icons";
import {IconSize} from "../../Styles";
import {styles} from "./styles";

interface EmptyViewProps {
  title: string;
}

export function EmptyView(props: EmptyViewProps) {
  const {title} = props;

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={Icons.Notes}
        size={IconSize.veryLarge}
        style={styles.icon}
      />
      <Text style={styles.icon}>{title}</Text>
    </View>
  );
}
