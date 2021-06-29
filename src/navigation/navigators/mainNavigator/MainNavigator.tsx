import React from "react";
import { SafeAreaView, View } from "react-native";
import { RouteNames } from "../../routes";
import { createStackNavigator, StackCardStyleInterpolator } from "@react-navigation/stack"
import { TabNavigator } from "../tabNavigator"
import { ModalNavigator } from "../modalNavigator";
import { LoginNavigator } from "../LoginNavigator";
import { styles, overlayStyle, cardStyle } from "./styles";;
import { useInitialization } from "../../../Initialization/useInitialization";
import { GlobalSpinner } from "../../../components/GlobalSpinner";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/reducers";
import { LoadingView } from "../../../views/LoadingView";


export function MainNavigator(): JSX.Element {
    const MainNavigator = createStackNavigator();
    const { user, initializing } = useInitialization();
    const isGlobalSpinnerVisible = useSelector((state: AppState) => state.NotesState.isNoteUpdating);

    if (initializing) {
        return (
            <LoadingView />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                {user ?
                    <MainNavigator.Navigator
                        mode="modal"
                        initialRouteName={RouteNames.TabNavigator}
                        screenOptions={{
                            headerShown: false,
                            gestureEnabled: true,
                            cardOverlayEnabled: true,
                            cardStyleInterpolator: modalVerticalTransition,
                            gestureDirection: "vertical",
                            cardStyle: {
                                backgroundColor: "transparent",
                                opacity: 1
                            }
                        }}
                    >
                        <MainNavigator.Screen name={RouteNames.TabNavigator} component={TabNavigator} />
                        <MainNavigator.Screen name={RouteNames.ModalStack} component={ModalNavigator} />
                    </MainNavigator.Navigator> :
                    <LoginNavigator />
                }

                <GlobalSpinner isVisible={isGlobalSpinnerVisible} />
            </View>
        </SafeAreaView>
    )
}

const modalVerticalTransition: StackCardStyleInterpolator = ({
    current,
    layouts: { screen },
}) => {
    const translateY = current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [screen.height, 0],
        extrapolate: "clamp",
    });
    const overlayOpacity = current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: "clamp",
    });
    return {
        overlayStyle: overlayStyle(overlayOpacity),
        cardStyle: cardStyle(translateY),
    };
};