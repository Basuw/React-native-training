import {View, StyleSheet} from 'react-native';
import React from 'react';
/*import CurrentWeather from './src/components/CurrentWeather.tsx';
import UpcomingWeather from './src/components/UpcomingWeather.tsx';*/
import OurChild from './src/components/OurChild.tsx';

const app = () => {
  return (
    <View style={styles.container}>
{/*
      <CurrentWeather />
*/}
{/*
      <UpcomingWeather />
*/}
      <OurChild message="Hello from parent" />
      <OurChild message="Hello again from parent" />
      <OurChild message="Hello again again from parent" />

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default app;
