/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ResultScreen from './src/screens/ResultScreen';

const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    backgroundColor:Colors.lighter
  },
  leftSections:{
    flex:1,
    justifyContent: 'space-between',
  },
  rightSection:{
    flex:3,
    justifyContent: 'space-around',
  },
  sectionBoxes:{
    padding:38,
    backgroundColor:'gray',
    borderColor: "#20232a",
    borderRadius: 6,
  },
  buttonBoxes:{
    flex:1,
    padding:38,
    backgroundColor:'yellow',
    borderWidth: 2,
    borderColor: "#20232a",
    borderRadius: 6,
  },
  current: {
    padding:40,
    backgroundColor:'green',
    borderWidth: 4,
    borderColor: "orange",
    borderRadius: 6,
  },
  run: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default App;
