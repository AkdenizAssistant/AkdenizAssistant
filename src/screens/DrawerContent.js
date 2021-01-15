import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {Drawer, Text, TouchableRipple, Switch} from 'react-native-paper';
import {AuthContext} from '../components/Context';

export function DrawerContent(props) {
  const {dispatch} = React.useContext(AuthContext);
  return (
    <View style={{flex: 1}}>
      <View style={styles.profile}>
        <Image source={require('../assets/pp.png')} />
        <Text style={styles.profileTitle}>Cemre Eryılmaz</Text>
      </View>
      <View style={styles.screens}>
        <Drawer.Section style={{marginTop: 20}}>
          <TouchableRipple onPress={() => {}} style={styles.label}>
            <View style={styles.label2edition}>
              <Image
                source={require('../assets/notification.png')}
                style={{marginLeft: 20}}
              />
              <Text style={styles.labelText}>Bildirimlerim</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}} style={styles.label}>
            <View style={styles.label2edition}>
              <Image
                source={require('../assets/help.png')}
                style={{marginLeft: 20}}
              />
              <Text style={styles.labelText}>Yardım</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}} style={styles.label}>
            <View style={styles.label2edition}>
              <Image
                source={require('../assets/contactUs.png')}
                style={{marginLeft: 20}}
              />
              <Text style={styles.labelText}>Bize Ulaşın</Text>
            </View>
          </TouchableRipple>
        </Drawer.Section>

        <TouchableRipple onPress={() => {}} style={styles.label}>
          <View style={styles.labelEdition}>
            <Image
              source={require('../assets/darkTheme.png')}
              style={{marginLeft: 20}}
            />
            <Text style={styles.labelTextOption}>Karanlık Tema</Text>
            <View pointerEvents="auto" style={styles.switch}>
              <Switch />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}} style={styles.label}>
          <View style={styles.labelEdition}>
            <Image
              source={require('../assets/english.png')}
              style={{marginLeft: 20}}
            />
            <Text style={styles.labelTextOption}>English</Text>
            <View pointerEvents="auto" style={styles.switch}>
              <Switch />
            </View>
          </View>
        </TouchableRipple>
      </View>
      <View style={styles.signout}>
        <TouchableOpacity
          style={styles.signoutButton}
          onPress={() => {
            dispatch({
              type: 'LOGOUT',
            });
          }}>
          <Text style={styles.signoutText}>Çıkış Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    flex: 220,
    backgroundColor: '#F47325',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  screens: {
    flex: 400,
    backgroundColor: '#FCF2F0',
  },
  signout: {
    flex: 150,
    backgroundColor: '#FCF2F0',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  labelText: {
    marginLeft: 17,
    flex: 4,
    fontSize: 20,
    fontFamily: 'Quicksand',
  },
  label: {
    marginTop: 10,
    flexDirection: 'row',
    height: 50,
  },
  labelTextOption: {
    fontSize: 20,
    fontFamily: 'Quicksand',
    marginLeft: 17,
  },
  switch: {
    left: 220,
    position: 'absolute',
  },
  signoutButton: {
    marginTop: 30,
    height: 70,
    width: 240,
    borderRadius: 500,
    backgroundColor: '#F47325',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 30,
  },
  signoutText: {
    fontFamily: 'Quicksand',
    fontSize: 30,
    textAlign: 'center',
  },
  profileTitle: {
    marginTop: 10,
    fontFamily: 'Quicksand',
    fontSize: 20,
    textAlign: 'center',
  },
  labelEdition: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label2edition: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
