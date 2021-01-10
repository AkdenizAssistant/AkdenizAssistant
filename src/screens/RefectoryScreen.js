import * as React from 'react';
import { StyleSheet, Text, View } from "react-native";
const RefectoryScreen = () => {
  return (
    <View style={{flex:1}}>
      <View style={styles.firstBox}></View>
      <View style={styles.yourRemainder}></View>
      <View style={styles.payMoney}></View>
      <View style={styles.foodListTitle}></View>
      <View style={styles.foodList}></View>
      <View style={styles.foodListMonthly}></View>
    </View>
  );
};
export default RefectoryScreen;
const styles = StyleSheet.create({
  firstBox:{
    flex:83,
    backgroundColor:'red',
  },
  yourRemainder:{
    flex:66,
    backgroundColor:'green',
  },
  payMoney:{
    flex:83,
    backgroundColor:'blue',
  },
  foodListTitle:{
    flex:75,
    backgroundColor:'purple',
  },
  foodList:{
    flex:200,
    backgroundColor:'black',
  },
  foodListMonthly:{
    flex:80,
    backgroundColor:'orange',
  }
})
