import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const AdvertisingScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.title} />

      <View style={styles.advertisings}>
        <View style={{flex: 3}}>
          <View style={styles.advertising}>
            <View style={styles.contents}>
              <View style={styles.profilePhoto} />
              <View style={styles.advertisingBox} />
            </View>
            <View style={styles.sendInfo} />
          </View>
          <View style={styles.advertising}>
            <View style={styles.contents}>
              <View style={styles.profilePhoto} />
              <View style={styles.advertisingBox} />
            </View>
            <View style={styles.sendInfo} />
          </View>
          <View style={styles.advertising}>
            <View style={styles.contents}>
              <View style={styles.profilePhoto} />
              <View style={styles.advertisingBox} />
            </View>
            <View style={styles.sendInfo} />
          </View>
        </View>
      </View>
    </View>
  );
};
export default AdvertisingScreen;
const styles = StyleSheet.create({
  title: {
    flex: 80,
    backgroundColor: 'red',
  },
  advertisings: {
    flex: 534,
    backgroundColor: 'purple',
    marginTop: 20,
    marginBottom: 20,
  },
  advertising: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 5,
    marginTop: 5,
  },
  advertisingBox: {
    flex: 343,
    backgroundColor: 'blue',
  },
  profilePhoto: {
    flex: 60,
    backgroundColor: 'green',
  },
  sendInfo: {
    flex: 30,
    backgroundColor: '#F47325',
  },
  contents: {
    flexDirection: 'row',
    flex: 95,
    backgroundColor: 'blue',
  },
});
