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

const RememberPasswordScreen = () => {
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
              source={require('../assets/lockIcon.png')}
            />
          </View>
          <Text style={styles.textInfo}>Şifrenizi mi unuttunuz?</Text>
        </View>
      )}
      <KeyboardAvoidingView style={styles.keyboard}>
        <TextInput
          placeholder="Öğrenci Numarası"
          placeholderTextColor="black"
          style={styles.inputAvoiding}
          onFocus={() => setIsFocusedTextInput(true)}
        />
      </KeyboardAvoidingView>
      <Text style={[styles.textInfo, {fontSize: 15}]}>
        OBS sistemindeki öğrenci numaranıza kayıtlı olan telefon numaranıza bir
        kod göndereceğiz!
      </Text>
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

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CreatingNewPasswordScreen');
        }}>
        <Text style={styles.button}>Onayla</Text>
      </TouchableOpacity>
    </View>
  );
};
export default RememberPasswordScreen;

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
    marginTop: 5,
    fontSize: 18,
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
    fontWeight: 'bold',
    marginTop: 10,
  },
  keyboard: {
    width: 300,
    backgroundColor: '#FCF2F0',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15,
    height: 45,
  },
  inputAvoiding: {
    textAlign: 'center',
    fontSize: 17,
    height: 45,
    borderRadius: 500,
    backgroundColor: '#D1E5F8',
    textAlignVertical: 'center',
    width: 300,
    marginTop: 0,
    fontFamily: 'Quicksand',
  },
});
