/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, SafeAreaView} from 'react-native';

const OurChild = (props) => {
  const {message} = props;
  return (
    <SafeAreaView style={{height: 200, width: 200, backgroundColor: 'red'}}>
      <Text>{message}</Text>
    </SafeAreaView>
  );
};

export default OurChild;
