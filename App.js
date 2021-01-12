import React from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import FaceBook_button from './Components/Social_Logins_Buttons/faceBook_button';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.HeadBox}>
          <FaceBook_button />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  HeadBox: {
    backgroundColor: 'blue',
  },
});

export default App;
