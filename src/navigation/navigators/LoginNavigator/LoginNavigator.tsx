import React from "react";
import { RouteNames } from "../../routes";
import { createStackNavigator } from "@react-navigation/stack"
import { ModalNavigator } from "../modalNavigator";
import { Login } from "../../../views/Login";
import { SignUp } from "../../../views/SignUpView";

const LoginNavigatorStack = createStackNavigator();

export function LoginNavigator(): JSX.Element {

    return (

        <LoginNavigatorStack.Navigator
            initialRouteName={RouteNames.LoginView}
            screenOptions={{
                headerShown: false,
            }}
        >
            <LoginNavigatorStack.Screen name={RouteNames.LoginView} component={Login} />
            <LoginNavigatorStack.Screen options={{ headerShown: true }} name={RouteNames.SignUpView} component={SignUp} />
        </LoginNavigatorStack.Navigator>

    )
}
