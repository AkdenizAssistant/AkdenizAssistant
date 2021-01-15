import * as React from 'react';
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
const HomeScreen = ({navigation}) => {
  const AlertMessage = ("           \n             Mevcut Bakiyeniz 16 TL".toString());
  const windowWidth = useWindowDimensions().width;
  return (
    /*First Part*/
    <View style={{flex: 1, width: windowWidth}}>
      <View
        style={{
          flex: 220,
          width: windowWidth,
        }}>
        <View
          style={{
            flex: 85,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: 30, fontFamily: 'Quicksand'}}>
            Hoşgeldin
          </Text>
        </View>
        <View
          style={{
            flex: 135,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 100,
              width: windowWidth - 20,
              backgroundColor: '#D1E5F8',
              borderRadius: 50,
              alignItems: 'center',
            }}>
            <Text
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}>
              <Text
                style={{
                  fontSize: 25,
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight:'500'
                }}>
                Günün Menüsü
              </Text>
              {'\n'}
              <Text style={{fontSize: 19}}>
                ~ Mercimek Çorbası ~ Tas Kebabı
              </Text>
              {'\n'}
              <Text style={{fontSize: 19}}>~ Pirinç Pilavı     ~ Meyve</Text>
            </Text>
          </View>
        </View>
      </View>

      {/*Second Part*/}
      <View style={styles.secondPart}>
        <View style={styles.row}>
          <View style={styles.normalBox}>
            <TouchableOpacity
              style={{
                height: 140,
                width: 160,
                backgroundColor: '#D1E5F8',
                borderRadius: 40,
                alignItems: 'center',
                textAlign: 'center',
                textAlignVertical: 'center',
                justifyContent: 'center',
              }}
            onPress={() => Alert.alert(
              `${AlertMessage}`,
              "",
              [],
              { cancelable: true }
            ) }
            >
              <Text
                style={{
                  fontSize: 20,
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                Bakiye Sorgu
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.normalBox}>
            <TouchableOpacity
              style={{
                height: 140,
                width: 160,
                backgroundColor: '#D1E5F8',
                borderRadius: 40,
                alignItems: 'center',
                textAlign: 'center',
                textAlignVertical: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                Ders Programı
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.normalBox}>
            <TouchableOpacity
              style={{
                height: 140,
                width: 160,
                backgroundColor: '#D1E5F8',
                borderRadius: 40,
                alignItems: 'center',
                textAlign: 'center',
                textAlignVertical: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                Gündem
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.normalBox}>
            <TouchableOpacity
              style={{
                height: 140,
                width: 160,
                backgroundColor: '#D1E5F8',
                borderRadius: 40,
                alignItems: 'center',
                textAlign: 'center',
                textAlignVertical: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                İlanlarım
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  normalBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  menuBox: {},
  secondPart: {
    flex: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
});
