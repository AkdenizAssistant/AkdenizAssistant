import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
const SignInScreen = () => {
  const windowWidth = useWindowDimensions().width;
  const onPress = () => {};
  return (
    //First Part includes logo
    //Second View Part includes input and forgotten password
    //Third View part includes Signup

    <View style={{flex: 1, backgroundColor: '#FCF2F0'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FCF2F0',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: '#FCF2F0',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <KeyboardAvoidingView
          style={{
            flex: 1,
            width: windowWidth,
            backgroundColor: '#FCF2F0',
            textAlignVertical: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextInput
            placeholder="Öğrenci Numarası"
            placeholderTextColor="black"
            style={{
              textAlign: 'center',
              fontSize: 30,
              width: windowWidth - 100,
              height: 60,
              borderRadius: 500,
              backgroundColor: '#D1E5F8',
              textAlignVertical: 'center',
            }}
          />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView
          style={{
            flex: 1,
            width: windowWidth,
            backgroundColor: '#FCF2F0',
            textAlignVertical: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextInput
            placeholder="Şifre"
            placeholderTextColor="black"
            secureTextEntry
            style={{
              textAlign: 'center',
              fontSize: 30,
              width: windowWidth - 100,
              height: 60,
              borderRadius: 500,
              backgroundColor: '#D1E5F8',
              textAlignVertical: 'center',
            }}
          />
        </KeyboardAvoidingView>

        <TouchableOpacity
          onPress={onPress()}
          style={{
            alignItems: 'center',
            width: windowWidth / 2,
            right: 100,
            backgroundColor: '#FCF2F0',
          }}>
          <Text
            style={{fontSize: 20, fontWeight: 'bold', fontFamily: 'Quicksand'}}>
            Şifremi Unuttum
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, backgroundColor: 'steelblue'}}>
        <View
          style={{
            alignItems: 'center',
            width: windowWidth,
            flex: 5,
            backgroundColor: '#FCF2F0',
            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <Text
              onPress={onPress()}
              style={{
                fontSize: 30,
                textAlign: 'center',
                textAlignVertical: 'center',
                height: 60,
                borderRadius: 500,
                backgroundColor: '#F47325',
                width: windowWidth - 100,
                alignItems: 'center',
              }}>
              Giriş Yap
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', fontSize: 25, right: 60}}>
            <CheckBox disabled={false} />
            <Text
              style={{
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: 22,
              }}>
              Oturumumu Açık Tut
            </Text>
          </View>
        </View>
        <View
          onPress={onPress()}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: windowWidth,
            flex: 2,
            backgroundColor: '#FCF2F0',
            flexDirection: 'row',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              textAlignVertical: 'center',
              fontSize: 25,
            }}>
            Kaydınız Yok Mu?
          </Text>
          <TouchableOpacity>
            <Text style={styles.signUp}> Kaydol </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200.1,
  },
  signUp: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
