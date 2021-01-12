import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LoginButton, AccessToken} from 'react-native-fbsdk';

const FaceBook_button = () => {
  return (
    <>
      <View style={{flex: 0, backgroundColor: 'green'}}>
        <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.log('login has error: ' + result.error);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then((data) => {
                console.log(data.accessToken.toString());
              });
            }
          }}
          onLogoutFinished={() => console.log('logout.')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default FaceBook_button;
