import { StatusBar } from 'expo-status-bar'
import React, {useState} from 'react'
import { Alert, Image, StyleSheet, Text, View, } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import imageLogo from '../assets/image_logo.png'
import textLogo from '../assets/text_logo.png'
import LoginButton from '../components/LoginButton'
import { useNavigation } from '@react-navigation/native'
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking'

const LoginScreen = () => {
  
  

  // _handleRedirect = event => {
  //   // Linking 이벤트 리스너 제거
  //   _removeLinkingListener();
  
  //   // redirect URL 값 파싱
  //   let data = Linking.parse(event.url);
    
  //   console.log(data);
  // };
  
  // _addLinkingListener = () => {
  //   Linking.addEventListener('url', _handleRedirect);
  // };
  
  // _removeLinkingListener = () => {
  //   Linking.removeEventListener('url', _handleRedirect);
  // };
  
  // onSubmit = async () => {
  //   try {
  //     _addLinkingListener();
      
  //     let result = await WebBrowser.openAuthSessionAsync(
  //       'http://43.202.91.101:8080/auth/authorize/kakao','exp://192.168.0.100:19000/--/setgoal'
  //     );
  
      
  //     console.log(result);
      
  //   } catch (error) {
  //     alert(error);
  //     console.log(error);
  //   } finally {
  //     _removeLinkingListener();
  //   }
  // };

  

  // const onSubmit = async () => {

  //   const result = await WebBrowser.openAuthSessionAsync( `http://43.202.91.101:8080/auth/authorize/kakao` , `exp://172.16.211.246:19000/--/setgoal`,{  showInRecents: true} ).then(()=> console.log(result))

  // };

    return (
        <SafeAreaProvider>
          <StatusBar style="hidden" />
          <SafeAreaView  style={styles.container}>
            <View style={styles.info}>
                <Image  style={styles.textLogo} source={textLogo}/>
                <View style={styles.mainTextView}>
                    <Text style={styles.mainText}>지금 당장 당신을 위한</Text>
                    <Text style={styles.mainText}>체계적인 식단을 시작하세요!</Text>
                </View>
                <View>
                    <Text style={styles.subText}>당신을 변화시킬 기회를 놓치지 마세요!</Text>
                </View>
                <LoginButton onSubmit={onSubmit}/>
                <View style={styles.promiseTextView}>
                    <Text style={styles.promiseText}>계속하기를 누르면 만 16세 이상이며</Text>
                    <Text style={styles.promiseText}>이용약관과 개인정보처리방침에 동의한 것으로 간주합니다.</Text>
                </View>
            </View>
            <Image  style={styles.imgLogo} resizeMode="cover" source={imageLogo}/>
            
          </SafeAreaView>
        </SafeAreaProvider>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical:3
  },
  mainTextView:{
      marginVertical:10
  },
  subText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'grey',
    marginBottom: 50,
  },
  promiseTextView:{
      marginTop:15,
      
  },
  promiseText: {
    fontSize: 12,
    color: 'grey',
    paddingVertical: 2,
    textAlign: 'center',
  },
  ment:{
  },
  imgLogo:{
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 340
    },
  info:{
      marginTop:25,
      position: 'absolute',
      top:0
  },
  textLogo:{
      marginTop:60,
      marginVertical:20,
      alignSelf:'center'
  },
});
export default LoginScreen