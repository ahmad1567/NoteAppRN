import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export interface TabProps {
  iconColor: string;
  iconSize: number;
  iconName: string;
}

export function Tab(props: TabProps): JSX.Element {
  const {iconName, iconColor, iconSize} = props;

  return (
    <MaterialCommunityIcons name={iconName} color={iconColor} size={iconSize} />
  );
}
