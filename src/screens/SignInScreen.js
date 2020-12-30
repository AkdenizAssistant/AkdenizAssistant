import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Sign In Screen</Text>
      <Button title="Click here" onPress={() => alert('Button Clicked')} />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
