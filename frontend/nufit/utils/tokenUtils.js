import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AuthSession from 'expo-auth-session';

export const getTokens = async (navigation) => {
    const result = await AuthSession.startAsync({
        authUrl: 'http://43.202.91.101:8080/auth/authorize/kakao',
        path: 'login'
      });

      if (result.type === 'success') {
        const { params } = result;
        const token = params.token;
        console.log(token)
        AsyncStorage.setItem('Tokens', JSON.stringify({
            'accessToken': token,
            // 'refreshToken': res.data.refreshToken,
            // 'userId': res.data.userId
          }))
        navigation.navigate('MainTab')
      }
      else{
        console.log(result.type)
      }

    // axios.post(`${URL}/login`,
    // {
    //   "userId":email,
    //   "userpw":password
    // })
    // .then(res =>{{
    //       //accessToken, refreshToken 로컬에 저장
    //       if (res.status === 200){
    //         AsyncStorage.setItem('Tokens', JSON.stringify({
    //           'accessToken': res.data.accessToken,
    //           'refreshToken': res.data.refreshToken,
    //           'userId': res.data.userId
    //         }))
    //         navigation.navigate('HomeTab');
    //       }

    // }})
    // .catch(error =>{
    //         if(error.response.status === 401){
    //             showToast(error.response.data)
    //         }
    //         else{
    //             showToast("알수없는 오류")
    //         } 
          
    // })
};


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