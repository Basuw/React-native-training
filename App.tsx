import {View, StyleSheet} from 'react-native';
import React from 'react';
import CurrentWeather from './src/components/CurrentWeather.tsx';
const app = () => {
  return (
    <View style={styles.container}>
      <CurrentWeather />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default app;
