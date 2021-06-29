import { Animated, Platform, UIManager } from "react-native";

/**
 * A utility class for Animations
 */
export class AnimationsUtils {
  /**
   * The snackbar's animation parameters
   */
  public static snackbarAnimationParams = {
    translateYInitial: Platform.select({
      android: 160,
      ios: 164,
    }) as number,
    translateYFinal: 0,
    travelDuration: 960,
  };

  /**
   * Enable LayoutAnimation under Android as it's still experimental on Android and needs to be explicitly enabled
   */
  public static enableLayoutAnimations(): void {
    if (Platform.OS === "android") {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }

  /**
   * The sanckbar's display animation
   * @param animatedValue - The animated value to modify when the animation starts
   * @param duration - The time (in ms) that the snackbar should remain at its highest position,
   * if not provided the snackbar will be persistent.
   */
  public static snackbarDisplayAnimation(
    animatedValue: Animated.Value,
    duration?: number,
  ): Animated.CompositeAnimation {
    const {
      snackbarHideAnimation,
      snackbarAnimationParams: { translateYFinal, travelDuration },
    } = AnimationsUtils;
    return duration
      ? Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: translateYFinal,
            duration: travelDuration,
            useNativeDriver: true,
          }),
          Animated.delay(duration),
          snackbarHideAnimation(animatedValue),
        ])
      : Animated.timing(animatedValue, {
          toValue: translateYFinal,
          duration: travelDuration,
          useNativeDriver: true,
        });
  }

  /**
   * The sanckbar's hide animation
   * @param animatedValue - The animated value to modify when the animation starts
   */
  public static snackbarHideAnimation(
    animatedValue: Animated.Value,
  ): Animated.CompositeAnimation {
    const {
      translateYInitial,
      travelDuration,
    } = AnimationsUtils.snackbarAnimationParams;
    return Animated.timing(animatedValue, {
      toValue: translateYInitial,
      duration: travelDuration,
      useNativeDriver: true,
    });
  }
}
