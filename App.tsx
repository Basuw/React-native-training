import {View, StyleSheet} from 'react-native';
import React from 'react';
import CurrentWeather from './src/screens/CurrentWeather.tsx';
import UpcomingWeather from './src/screens/UpcomingWeather.js';
import OurChild from './src/screens/OurChild.tsx';
import City from "./src/screens/City";

const app = () => {
  return (
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
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default app;
