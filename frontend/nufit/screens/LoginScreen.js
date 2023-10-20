import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, Linking, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import imageLogo from '../assets/image_logo.png'
import textLogo from '../assets/text_logo.png'
import LoginButton from '../components/LoginButton'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
  const navigation = useNavigation();
  const onSubmit = () => {
    navigation.navigate('SetGoal')
    // try {
    //   // const response = await axios.get('http://13.125.241.115:8080/oauth2/authorization/kakao');
    //   // console.log(response)
    //   const url = 'http://13.125.241.115:8080/oauth2/authorization/kakao'
    //   const canOpen = await Linking.canOpenURL(url);
      
    //   if (canOpen) {
    //     Linking.openURL(url);
    //   } else {
    //     console.log(`Don't know how to open fthis URL: ${url}`);
    //   }
      
    // } catch (error) {
    //   console.log(error);
    // }
  };

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