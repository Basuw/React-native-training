import {View, StyleSheet} from 'react-native';
import React from 'react';
import CurrentWeather from './src/screens/CurrentWeather.tsx';
import UpcomingWeather from './src/screens/UpcomingWeather.js';
import OurChild from './src/screens/OurChild.tsx';
import City from "./src/screens/City";
import { NavigationContainer } from "@react-navigation/native";

const app = () => {
  return (

    <NavigationContainer>
      <View style={styles.container}>
  {/*
        <CurrentWeather />
  */}

  {/*
        <UpcomingWeather />
  */}

  {/*      <OurChild message="Hello from parent" />
        <OurChild message="Hello again from parent" />
        <OurChild message="Hello again again from parent" />*/}

        <City />
      </View>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default app;
