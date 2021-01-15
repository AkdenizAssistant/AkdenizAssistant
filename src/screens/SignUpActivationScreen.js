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
import {AuthContext} from '../components/Context';

const SignUpActivationScreen = () => {
  const {dispatch} = React.useContext(AuthContext);
  const navigation = useNavigation();
  const windowWidth = useWindowDimensions().width;
  const [isFocusedTextInput, setIsFocusedTextInput] = React.useState(false);

  return (
    <View style={styles.container}>
      {isFocusedTextInput ? null : (
        <View>
          <View style={styles.logoView}>
            <Image
              style={styles.logo}
              source={require('../assets/activationLogo.png')}
            />
          </View>
          <Text style={styles.textInfo}>
            OBS sistemindeki öğrenci numaranıza kayıtlı olan telefon numaranıza
            bir kod göndereceğiz!
          </Text>
        </View>
      )}

      <TouchableOpacity>
        <Text style={styles.button}>Gönder</Text>
      </TouchableOpacity>
      <KeyboardAvoidingView style={styles.keyboard}>
        <TextInput
          placeholder="Kodu Giriniz"
          placeholderTextColor="black"
          secureTextEntry
          style={styles.inputAvoiding}
          onFocus={() => setIsFocusedTextInput(true)}
        />
      </KeyboardAvoidingView>

      <TouchableOpacity>
        <Text
          onPress={() => {
            dispatch({
              type: 'LOGIN',
            });
          }}
          style={styles.button}>
          Onayla
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default SignUpActivationScreen;

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
    marginBottom: 0,
    fontSize: 20,
  },
  button: {
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 50,
    borderRadius: 500,
    backgroundColor: '#F47325',
    width: 184,
    alignItems: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  keyboard: {
    width: 300,
    backgroundColor: '#FCF2F0',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
    height: 40,
  },
  inputAvoiding: {
    textAlign: 'center',
    fontSize: 20,
    height: 55,
    borderRadius: 500,
    backgroundColor: '#D1E5F8',
    textAlignVertical: 'center',
    width: 300,
    marginTop: 30,
    fontFamily: 'Quicksand',
  },
});
