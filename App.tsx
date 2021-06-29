import 'react-native-gesture-handler';
import React from 'react';
import {MainNavigator} from "./src/navigation/navigators/mainNavigator";
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from "react-redux";
import {configureStore} from "./src/redux/store/Store";

function App() {
  return (
    <Provider store={configureStore()}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
