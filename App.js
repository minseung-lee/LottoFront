/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';


class app extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MSLee</Text>
      </View>
    );
  }
} 

export default app;

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#fff',
    alignItems : 'center',
    justifyContent : 'center'
  },

  textStyle : {
    fontSize : 18,
    marginTop : 17
  }
});