import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
  View,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const City = () => {
  const {container, img, cityName, countryName, cityText} = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require('../../assets/city.jpeg')} style={img}>
        <Text style={[cityName, cityText]}> London </Text>
        <Text style={[countryName, cityText]}> UK </Text>
        <View style={styles.populationWrapper}>
          <Feather name={'user'} size={50} color="red" />
          <Text style={styles.populationText}> 90000 </Text>
        </View>
        <View style={styles.riseSetWrapper}>
          <Feather name={'sunrise'} size={50} color="white" />
          <Text style={styles.riseSetText}> 5:47:87am </Text>
          <Feather name={'sunset'} size={50} color="white" />
          <Text style={styles.riseSetText}> 7:37:17pm </Text>
        </View>
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
    fontSize: 30,
  },
  cityName: {
    fontSize: 40,
  },
  cityText: {
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    AlignSelf: 'center',
    textAlign: 'center',
  },
  populationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
    fontWeight: 'bold',
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default City;
