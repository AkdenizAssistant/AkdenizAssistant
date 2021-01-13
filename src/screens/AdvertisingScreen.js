import * as React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
const AdvertisingScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.title}>
        <Text style={styles.titleText}>İlanlar</Text>
      </View>

      <View style={styles.advertisings}>
        <View style={{flex: 3}}>
          <View style={styles.advertising}>
            <View style={styles.contents}>
              <View style={styles.profilePhoto}>
                <Image
                  source={require('../assets/pp.png')}
                  style={styles.profilePhotoIcon}
                />
              </View>
              <View style={styles.advertisingBox}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}>
                  <Text
                    style={{
                      justifyContent: 'center',
                      textAlign: 'center',
                      paddingRight: 50,
                      marginTop: 10,
                    }}>
                    Konu Başlığı
                  </Text>
                  <Text
                    style={{
                      borderLeftWidth: 1,
                      justifyContent: 'center',
                      textAlign: 'center',
                      paddingLeft: 50,
                      marginTop: 10,
                    }}>
                    11.01.2021
                  </Text>
                </View>
                <View
                  style={{
                    flex: 8,
                    marginLeft: 5,
                    marginRight: 5,
                    marginTop: 10,
                    paddingLeft: 10,
                  }}>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque molestie sit amet quam vel interdum.
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.sendInfo}>
              <TouchableOpacity style={styles.sendInfoButton}>
                <Text style={{textAlign: 'center'}}>
                  İletişim Bilgilerini gönder
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.advertising}>
            <View style={styles.contents}>
              <View style={styles.profilePhoto}>
                <Image
                  source={require('../assets/pp.png')}
                  style={styles.profilePhotoIcon}
                />
              </View>
              <View style={styles.advertisingBox}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}>
                  <Text
                    style={{
                      justifyContent: 'center',
                      textAlign: 'center',
                      paddingRight: 50,
                      marginTop: 10,
                    }}>
                    Konu Başlığı
                  </Text>
                  <Text
                    style={{
                      borderLeftWidth: 1,
                      justifyContent: 'center',
                      textAlign: 'center',
                      paddingLeft: 50,
                      marginTop: 10,
                    }}>
                    11.01.2021
                  </Text>
                </View>
                <View
                  style={{
                    flex: 8,
                    marginLeft: 5,
                    marginRight: 5,
                    marginTop: 10,
                    paddingLeft: 10,
                  }}>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque molestie sit amet quam vel interdum.
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.sendInfo}>
              <TouchableOpacity style={styles.sendInfoButton}>
                <Text style={{textAlign: 'center'}}>
                  İletişim Bilgilerini gönder
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.advertising}>
            <View style={styles.contents}>
              <View style={styles.profilePhoto}>
                <Image
                  source={require('../assets/pp.png')}
                  style={styles.profilePhotoIcon}
                />
              </View>
              <View style={styles.advertisingBox}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}>
                  <Text
                    style={{
                      justifyContent: 'center',
                      textAlign: 'center',
                      paddingRight: 50,
                      marginTop: 10,
                    }}>
                    Konu Başlığı
                  </Text>
                  <Text
                    style={{
                      borderLeftWidth: 1,
                      justifyContent: 'center',
                      textAlign: 'center',
                      paddingLeft: 50,
                      marginTop: 10,
                    }}>
                    11.01.2021
                  </Text>
                </View>
                <View
                  style={{
                    flex: 8,
                    marginLeft: 5,
                    marginRight: 5,
                    marginTop: 10,
                    paddingLeft: 10,
                  }}>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque molestie sit amet quam vel interdum.
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.sendInfo}>
              <TouchableOpacity style={styles.sendInfoButton}>
                <Text style={{textAlign: 'center'}}>
                  İletişim Bilgilerini gönder
                </Text>
              </TouchableOpacity>
            </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  advertisings: {
    flex: 534,
    marginTop: 20,
    marginBottom: 20,
  },
  advertising: {
    flex: 1,
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 300,
  },
  advertisingBox: {
    flex: 343,
    backgroundColor: '#D1E5F8',
    borderRadius: 500,
    width: 100,
    height: 85,
    marginTop: 10,
    marginBottom: 15,
    marginRight:5
  },
  profilePhoto: {
    flex: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendInfo: {
    flex: 30,
  },
  contents: {
    flexDirection: 'row',
    flex: 95,
  },
  sendInfoButton: {
    borderRadius: 100,
    backgroundColor: '#D1E5F8',
    justifyContent: 'center',
    width: 300,
    left: 90,
    height: 25,
  },
  profilePhotoIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  titleText: {
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'Quicksand',
    marginTop:30
  },
});
