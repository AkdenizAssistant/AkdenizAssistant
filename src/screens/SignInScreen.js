import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
  Platform,
} from 'react-native';
import {Input} from '../components/Input';
const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require('../assets/logo.png')}
        />
      </View>

      <KeyboardAvoidingView style={styles.keyboard}>
        <View style={styles.window}>
          <TextInput
            style={styles.input}
            placeholder="Öğrenci Numarası"
            placeholderTextColor="black"
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.window}>
          <TextInput
            style={styles.input}
            placeholder="Şifre"
            placeholderTextColor="black"
            returnKeyType="go"
            secureTextEntry
          />
        </View>

      </KeyboardAvoidingView>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCF2F0',
    zIndex: 2,
    flexDirection: 'column',
  },
  logo: {
    top: 15,
    width: 207,
    height: 207.1,
    justifyContent: 'center',
    position: 'absolute',
  },
  keyboard: {
    //margin: 20,
    marginLeft: 20,
    padding: 20,
    alignSelf: 'stretch',
    textAlign: 'center',
    marginVertical: 150,
    paddingHorizontal:28
  },
  window: {
    marginTop: 25,
    backgroundColor: '#D1E5F8',
    width: 315,
    height: 70,
    padding: 5,
    borderRadius: 50,
    color: 'black',
    marginVertical: 8,
    top: 0,
    justifyContent: 'center',
    textAlign: 'center',

  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  input: {
    fontSize: 35,
    justifyContent: 'center',
    textAlign: 'center',
  },
});
