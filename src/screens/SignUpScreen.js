import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const windowWidth = useWindowDimensions().width;
  const [isFocusedTextInput, setIsFocusedTextInput] = React.useState(false);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsFocusedTextInput(false);
    }, 50000);
  }, [isFocusedTextInput]);
  return (
    <View style={styles.container}>
      {isFocusedTextInput ? null : (
        <View style={styles.logoView}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
        </View>
      )}
      <TouchableOpacity style={styles.textInfo}>
        <Text>Kayıtlı Hesabın varsa </Text>
        <Text style={{fontWeight: 'bold'}}>giriş yap</Text>
      </TouchableOpacity>
      <KeyboardAvoidingView style={styles.keyboard}>
        <TextInput
          placeholder="Okul Numarası"
          placeholderTextColor="black"
          style={styles.inputAvoiding}
          onFocus={() => setIsFocusedTextInput(true)}
        />
      </KeyboardAvoidingView>
      <KeyboardAvoidingView style={styles.keyboard}>
        <TextInput
          placeholder="Şifre"
          placeholderTextColor="black"
          secureTextEntry
          style={styles.inputAvoiding}
          onFocus={() => setIsFocusedTextInput(true)}
        />
      </KeyboardAvoidingView>
      <KeyboardAvoidingView style={styles.keyboard}>
        <TextInput
          placeholder="Şifreyi Tekrarla"
          placeholderTextColor="black"
          secureTextEntry
          style={styles.inputAvoiding}
          onFocus={() => setIsFocusedTextInput(true)}
        />
      </KeyboardAvoidingView>

      <TouchableOpacity>
        <Text
          onPress={() => {
            navigation.navigate('SignUpActivationScreen');
          }}
          style={styles.button}>
          Kayıt Ol
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF2F0',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 30,
    marginBottom: 20,
    fontSize: 30,
    alignItems: 'center',
    textAlign: 'center',
  },
  logoView: {
    backgroundColor: '#FCF2F0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize: 30,
    textAlign: 'center',
  },
  logo: {
    width: 200,
    height: 200.1,
    marginTop: 40,
  },
  textInfo: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 25,
  },
  button: {
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 50,
    borderRadius: 500,
    backgroundColor: '#F47325',
    width: 300,
    alignItems: 'center',
    marginTop: 20,
  },
  keyboard: {
    width: 300,
    backgroundColor: '#FCF2F0',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    height: 40,
  },
  inputAvoiding: {
    textAlign: 'center',
    fontSize: 20,
    height: 45,
    borderRadius: 500,
    backgroundColor: '#D1E5F8',
    textAlignVertical: 'center',
    width: 300,
  },
});
