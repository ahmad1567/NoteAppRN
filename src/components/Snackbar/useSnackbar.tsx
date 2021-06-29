import React, {useState, useRef} from "react";
import {Animated, AccessibilityInfo} from "react-native";
// import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import {AnimationsUtils, LocaleUtils} from "../../utilities";
import {SnackbarElement, SnackbarElementProps} from "./SnackbarElement";
import {SnackbarContext, SnackbarContextArgs} from ".";

export enum Duration {
  Short = 3000,
  Medium = 4000,
  Long = 5000,
  Infinite = -1,
}

/**
 * Creates an initialized snackbar provider value to pass for a snackbar context instance
 * Creates props for the SnackBar component
 *
 * @returns SnackbarContext - an initialized value for the snackbar context instance
 * @returns SnackbarProps - initialized snackbar props
 *
 */
export function useSnackbar(): SnackbarContext {
  const idMapRef = useRef<{[key: string]: boolean}>({});
  const [isVisible, setIsVisible] = useState(false);
  const [isErrorSnackbar, setIsErrorSnackbar] = useState(false);
  const [text, setText] = useState("");
  const [onPressActionText, setOnPressActionText] = useState("");
  const [icon, setIcon] = useState<JSX.Element | undefined>(undefined);
  const [onPress, setOnPress] = useState({
    CB: () => {
      return;
    },
  });
  const activeAnimation = useRef<Animated.CompositeAnimation>();
  const {
    snackbarDisplayAnimation,
    snackbarHideAnimation,
    snackbarAnimationParams: {translateYInitial, travelDuration},
  } = AnimationsUtils;
  const animatedValue = useRef(new Animated.Value(translateYInitial)).current;

  const clearContext = (): void => {
    setText("");
    setOnPressActionText("");
    setIcon(undefined);
    setOnPress({
      CB: () => {
        return;
      },
    });
    setIsErrorSnackbar(false);
  };

  const abort = (id: string): void => {
    idMapRef.current[id] = false;
  };

  const hide = (id: string): void => {
    if (idMapRef.current[id]) {
      activeAnimation.current?.stop();
      const hideAnimation = snackbarHideAnimation(animatedValue);
      hideAnimation.start(({finished}) => {
        if (finished) setIsVisible(false);
      });
      activeAnimation.current = hideAnimation;
      idMapRef.current[id] = false;
    }
  };

  const hideAsync = async (id: string): Promise<void> => {
    if (idMapRef.current[id]) {
      await new Promise<void>(resolve => {
        activeAnimation.current?.stop();
        const hideAnimation = snackbarHideAnimation(animatedValue);
        hideAnimation.start(({finished}) => {
          if (finished) {
            setIsVisible(false);
            resolve();
          }
        });
        activeAnimation.current = hideAnimation;
        idMapRef.current[id] = false;
      });
    }
  };

  const display = (Args: SnackbarContextArgs = {}): string => {
    const currentId = ((Math.random() * 1000) % 5) + "h";
    idMapRef.current[currentId] = true;
    const {
      textArg,
      durationArg,
      iconArg,
      onStartCBArg,
      onFinishCBArg,
      onPressCBArg,
      onPressActionTextArg,
      isErrorSnackbarArg,
    } = Args;

    // We need to clear the context of previous usage before showing the snackbar again
    clearContext();

    // Assign arguments
    if (textArg) setText(textArg);
    if (iconArg) setIcon(iconArg);
    if (isErrorSnackbarArg) setIsErrorSnackbar(isErrorSnackbarArg);
    if (onPressActionTextArg) setOnPressActionText(onPressActionTextArg);
    setIsVisible(true);

    // Initiate display sequence
    onStartCBArg?.();
    const isPersistent = durationArg === Duration.Infinite;
    activeAnimation.current?.stop();
    const displayAnimation = snackbarDisplayAnimation(
      animatedValue,
      isPersistent ? undefined : durationArg ?? Duration.Short,
    );

    if (onPressCBArg)
      setOnPress({
        CB: _.debounce(
          () => {
            onPressCBArg();
            displayAnimation.stop();
            const hideAnimation = snackbarHideAnimation(animatedValue);
            hideAnimation.start(({finished}) => {
              if (finished) setIsVisible(false);
            });
            activeAnimation.current = hideAnimation;
          },
          travelDuration,
          {leading: true, trailing: false},
        ),
      });

    displayAnimation.start(({finished}) => {
      if (!isPersistent) {
        if (finished) {
          setIsVisible(false);
        }

        if (onFinishCBArg && idMapRef.current[currentId]) {
          onFinishCBArg();
        }

        idMapRef.current[currentId] = false;
      }
    });
    activeAnimation.current = displayAnimation;

    return currentId;
  };

  const snackbarProps: SnackbarElementProps = {
    text,
    isVisible,
    onPressActionText,
    icon,
    onPress: onPress.CB,
    animatedValue,
    isErrorSnackbar,
  };
  const Snackbar = (): JSX.Element | null => (
    <SnackbarElement {...snackbarProps} />
  );

  return {
    Snackbar,
    display,
    abort,
    isVisible,
    hide,
    hideAsync,
  } as SnackbarContext;
}
