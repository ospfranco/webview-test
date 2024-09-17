/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StyleSheet, Text, useColorScheme} from 'react-native';
import WebView from 'react-native-webview';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Webview:</Text>
      <WebView
        source={{
          uri: 'https://auth.uber.com/v2?x-uber-device-location-latitude=0.0&known_user=false&x-uber-device=android&x-uber-device-udid=ec0398b3-c572-3509-bcab-62ab9a1a1bb2&x-uber-device-location-longitude=0.0&x-uber-hot-launch-id=af69b1bc-0890-43d9-9aad-b145d398c930&x-uber-app-device-id=fcdfb20b-d620-43ea-929d-799607ba7b48&sim_mnc=&countryCode=US&showDebugInfo=false&sim_mcc=&codeChallenge=bC1xyDWJlAx-sX02Mqwcum_BOvsuD8ZwKeKlkJPQi0o&socialNative=g&isChromeCustomTabSession=false&x-uber-client-id=com.ubercab&x-uber-cold-launch-id=b654393e-2f78-48ac-8df8-20b08fc49b54&app_url=uberlogin%253A%252F%252Fauth3.uber.com%252Fapplogin%252Fhelix&firstPartyClientID=zozycDbnl17oSjKXdw_x_QuNvq5wfRHq&x-uber-client-name=client&isEmbedded=true&asms=true&x-uber-client-version=4.536.10001',
        }}
        userAgent="Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36"
        style={{marginTop: 20, flex: 1, width: '100%'}}
      />
    </SafeAreaView>
  );
}

export default App;
