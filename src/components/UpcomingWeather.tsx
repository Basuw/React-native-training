import {SafeAreaView, StyleSheet, Text, FlatList, View} from 'react-native';
import React from 'react';
// @ts-ignore
import Feather from 'react-native-vector-icons/Feather';

const DATA = [
  {
    dt_txt: '2022-08-30 16:00:00',
    main: {
      temp_min: 296.34,
      temp_max: 298.24,
    },
    weather: [
      {
        main: 'Rain',
      },
    ],
  },
  {
    dt_txt: '2022-08-30 18:00:00',
    main: {
      temp_min: 296.2,
      temp_max: 296.31,
    },
    weather: [
      {
        main: 'Sun',
      },
    ],
  },
];

const Item = (props) => {
  const {dt_txt, min, max, condition} = props;
  return (
    <View>
      <Feather name={'sun'} size={50} color="white" />
      <Text>{dt_txt}</Text>
      <Text>{max}</Text>
      <Text>{min}</Text>
    </View>
  );
};

const UpcomingWeather = () => {
  const renderItem = ({item}) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text> Upcoming Weather </Text>
      <FlatList data={DATA} renderItem={renderItem} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default UpcomingWeather;
