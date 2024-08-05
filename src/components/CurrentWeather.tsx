/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
// @ts-ignore
import Feather from 'react-native-vector-icons/Feather';

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text>This is my app</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highlow}>High: 8</Text>
          <Text style={styles.highlow}>High: 8</Text>
        </View>
        <View style={styles.bodyWrapper}>
          <Text style={styles.desc}>Its sunny</Text>
          <Text style={styles.mess}>Wind: 10km/h</Text>
        </View>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  wrapper: {
    backgroundColor: 'orange',
    flex: 1,
  },
  temp: {
    fontSize: 48,
    color: 'black',
  },
  feels: {
    fontSize: 30,
    color: 'black',
  },
  highlow: {
    fontSize: 20,
    color: 'black',
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  desc: {
    fontSize: 48,
  },
  mess: {
    fontSize: 30,
  },
});

export default CurrentWeather;
