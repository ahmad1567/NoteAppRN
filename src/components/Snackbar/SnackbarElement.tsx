import React, { useEffect, useRef } from "react";
import {
  Animated,
  Text,
  View,
  AccessibilityInfo,
  findNodeHandle,
  Platform,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
/**
 * Props interface for the Snackbar
 */
export interface SnackbarElementProps {
  // The message which the snackbar will display.
  text: string;

  // A boolean flag which determines whether the snackbar should appear or not
  isVisible: boolean;

  // Icon to display on the left side of the snackbar
  icon?: JSX.Element;

  // Text of the on press action, has to be supplied with onPress callback
  onPressActionText?: string;

  // callback in case the text is touchable, has to be supplied with onPressActionText
  onPress?: () => void;

  // Animated value for the snackbar's vertical position
  animatedValue: Animated.Value;

  // A boolean flag which determines whether the snackbar is an error snackbar
  isErrorSnackbar?: boolean;
}

/**
 * A Snackbar notification component.
 */
export function SnackbarElement(
  props: SnackbarElementProps,
): JSX.Element | null {
  const {
    text,
    isVisible,
    icon,
    onPressActionText,
    onPress,
    animatedValue,
    isErrorSnackbar,
  }: SnackbarElementProps = props;
  const snackbarRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      Platform.select<() => void>({
        android: () => AccessibilityInfo.announceForAccessibility(text),
        default: () =>
          setTimeout(() => {
            const reactTag = findNodeHandle(snackbarRef.current);
            if (reactTag) AccessibilityInfo.setAccessibilityFocus(reactTag);
          }, 0),
      })();
    }
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <Animated.View
      accessibilityViewIsModal
      style={[
        { transform: [{ translateY: animatedValue }] },
        styles.container(isErrorSnackbar),
      ]}
    >
      {icon ? renderTextAndIcon() : renderText()}
      {renderTouchableText()}
    </Animated.View>
  );

  function renderTextAndIcon(): JSX.Element {
    return (
      <View style={styles.textAndIconContainer}>
        <View style={styles.iconContainer}>{icon}</View>
        <View style={styles.textContainer}>
          <Text
            ref={snackbarRef}
            style={styles.leftText(isErrorSnackbar)}
            testID="snackbarTextWithIcon"
          >
            {text}
          </Text>
        </View>
      </View>
    );
  }

  function renderTouchableText(): JSX.Element | null {
    if (!onPressActionText || !onPress) return null;
    return (
      <View style={styles.touchableContainer}>
        <TouchableOpacity
          testID={"onSnackbarPress"}
          onPress={onPress}
        >
          <Text
            numberOfLines={1}
            style={styles.touchableText(isErrorSnackbar)}
            testID="snackbarOnPressText"
          >
            {onPressActionText}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderText(): JSX.Element {
    return (
      <View style={styles.textContainer}>
        <Text
          ref={snackbarRef}
          style={styles.text(isErrorSnackbar)}
          testID="snackbarText"
        >
          {text}
        </Text>
      </View>
    );
  }
}
