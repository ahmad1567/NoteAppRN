import {Animated, ViewStyle} from "react-native";

interface MainNavigatorStyles {
  container: ViewStyle;
}
export const styles: MainNavigatorStyles = {
  container: {
    flex: 1,
  },
};

export const overlayStyle = (
  overlayOpacity: Animated.AnimatedInterpolation,
) => ({
  opacity: 0.5,
  // backgroundColor: "rgba(0,0,0,0,4)",
  // opacity: overlayOpacity,
});

export const cardStyle = (translateY: Animated.AnimatedInterpolation) => ({
  transform: [
    {
      translateY,
    },
  ],
});
