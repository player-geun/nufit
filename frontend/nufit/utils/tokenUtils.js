import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as AuthSession from 'expo-auth-session';

export const getTokens = async (navigation) => {
    const result = await AuthSession.startAsync({
        authUrl: 'http://43.202.91.101:8080/auth/authorize/kakao',
        // projectNameForProxy: '@kimdouk/nufit',
        path: 'login'
      });

      if (result.type === 'success') {
        const { params } = result;
        const token = params.token.slice(7);
        // console.log(token)
        // console.log(result.params.token.slice(8))
        AsyncStorage.setItem('Tokens', JSON.stringify({
            'accessToken': token,
            // 'refreshToken': res.data.refreshToken,
            // 'userId': res.data.userId
          }))
        seperate({token, navigation})
        // navigation.navigate('MainStack')
        // navigation.reset({routes: [{name: "MainStack"}]});
      }
      else{
        console.log(result.type)
      }
    }
  

  const seperate = async({token, navigation}) =>{
    console.log(token,'TOKEN')
    try {
      const response = await axios.get(`http://43.202.91.101:8080/api/members/me/goals`, {headers: {Authorization: `Bearer ${token}`}})
      if(response.status ==200) {
        navigation.reset({routes: [{name: "MainStack"}]});
      }
    } catch (error) {
      navigation.reset({routes: [{name: "SetGoal"}]});
      // console.log(error)
    }
  }
    


export const getTokenFromLocal = async () => {
    try {
        const value = await AsyncStorage.getItem("Tokens");
        if (value !== null ){
            return JSON.parse(value)
        }else{
            return null;
        }
    } catch (e) {
        console.log(e.message)
    }
}

export const verifyTokens = async (navigation) => {
    const Token = await getTokenFromLocal();
  
    if (Token === null){
      navigation.reset({routes: [{name: "LoginScreen"}]});
    }
    else{
        navigation.reset({routes: [{name: "LoginScreen"}]});
    }
    // // 로컬 스토리지에 Token데이터가 있으면 -> 토큰들을 헤더에 넣어 검증 
    // else{
    //   const headers_config = {
    //     "refresh": Token.refreshToken,
    //     Authorization: `Bearer ${Token.accessToken}`   
    //   };
  
    //   try {
    //     const res = await axios.get(`${URL}/refresh`, {headers: headers_config})
  
    //     // accessToken 만료, refreshToken 정상 -> 재발급된 accessToken 저장 후 자동 로그인
    //     AsyncStorage.setItem('Tokens', JSON.stringify({
    //       ...Token,
    //       'accessToken': res.data.data.accessToken,
    //     }))
    //     navigation.reset({routes: [{name: "HomeTab"}]});
  
    //   } catch(error){
    //     const code = error.response.data.code; 
  
    //     // accessToken 만료, refreshToken 만료 -> 로그인 페이지
    //     if(code === 401){
    //       navigation.reset({routes: [{name: "AuthPage"}]});
    //     }
    //     // accessToken 정상, refreshToken 정상 -> 자동 로그인
    //     else{
    //       navigation.reset({routes: [{name: "HomeTab"}]});
    //     }
    //   }
  
    // }
}