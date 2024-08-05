import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React from 'react';

const City = () => {
  const {container, img, cityName, countryName} = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require('../../assets/city.jpeg')} style={img}>
        <Text style={cityName}> London </Text>
        <Text style={countryName}> UK </Text>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue',
  },
  img: {
    flex: 1,
  },
  countryName: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  cityName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
export default City;
