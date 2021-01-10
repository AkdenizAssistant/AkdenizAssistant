import * as React from 'react';
import {StyleSheet, View} from "react-native";
const LecturesScreen = () => {
  return (
    <View style={{flex:1}}>
      <View style={styles.title}></View>
      <View style={styles.lecturesProgramTable}></View>
      <View style={styles.gradeList}></View>
      <View style={styles.viewCalender}></View>
    </View>
  );
};
export default LecturesScreen;
const styles = StyleSheet.create({
  title:{
    flex:70,
    backgroundColor:'red',
  },
  lecturesProgramTable:{
    flex:380,
    backgroundColor:'green',
  },
  gradeList:{
    flex:78,
    backgroundColor:'blue',
  },
  viewCalender:{
    flex:80,
    backgroundColor:'purple',
  },
});
