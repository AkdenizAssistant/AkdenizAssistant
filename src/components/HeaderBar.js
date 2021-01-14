import * as React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function HeaderBar() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity style={styles.menu} onPress={() => navigation.openDrawer()}>
        <Image source={require('../assets/MenuIcon.png')} />
      </TouchableOpacity>
      <Text style={styles.title}>  Akdeniz Asistan</Text>
      <TouchableOpacity style={styles.notification}>
        <Image source={require('../assets/notification.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.profile}>
        <Image source={require('../assets/user1.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Quicksand',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '900',
    lineHeight: 53,
    letterSpacing: 0,
    textAlign: 'center',
    flex: 256,
  },
  notification: {
    flex: 42,
    alignItems: 'center',
  },
  menu: {
    flex: 45,
    alignItems: 'center',
  },
  profile: {
    flex: 42,
    alignItems: 'center',
  },
});
