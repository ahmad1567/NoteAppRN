import React, {MutableRefObject, useEffect} from 'react';

import {Text, View, TouchableOpacity} from "react-native";
import {ActionSheetCustom} from "react-native-actionsheet";
import styles, {actionSheetStyles} from "./styles";

export interface Option {
  icon?: JSX.Element;
  text: string;
  onPress: () => void;
}

export interface ActionSheetElement extends ActionSheetCustom {
  hide: () => void;
  show: () => void;
  _calculateHeight: () => number;
  _cancel: () => void;
  translateY: number;
}

export interface ActionSheetProps {
  actionSheetElement?: MutableRefObject<null | ActionSheetElement>;
  options: Option[];
}

export function ActionSheet(props: ActionSheetProps): JSX.Element {
  const {actionSheetElement, options} = props;

  useEffect(() => {
    if (actionSheetElement?.current && options) {
      actionSheetElement.current._calculateHeight = () =>
        calculateActionSheetHeight(options.length);

      actionSheetElement.current._cancel = () =>
        actionSheetElement.current?.hide();

      actionSheetElement.current.translateY =
        actionSheetElement.current._calculateHeight();
    }
  }, [actionSheetElement, options]);

  const getActionSheetOptions = (
    option: Option,
    index: number,
  ): JSX.Element => (
    <TouchableOpacity
      key={index}
      style={styles.buttonOptionContainer}
      onPress={() => {
        actionSheetElement?.current?.hide();
        option.onPress();
      }}>
      <>
        <View style={actionSheetStyles.buttonBox}>
          {!!option.icon && <View style={styles.icon}>{option.icon}</View>}
          <Text style={styles.buttonOptionText}>{option.text}</Text>
        </View>
        {options[index + 1] && (
          <View style={styles.seperatorLine(!!option.icon)} />
        )}
      </>
    </TouchableOpacity>
  );

  const optionsArray = [...options.map(getActionSheetOptions)];

  return (
    <ActionSheetCustom
      ref={actionSheetElement}
      title={<View style={styles.titleView} />}
      options={optionsArray}
      onPress={() => {
        return;
      }}
      styles={actionSheetStyles}
    />
  );
}

function calculateActionSheetHeight(optionCount: number): number {
  return optionCount * 50 + 20;
}
