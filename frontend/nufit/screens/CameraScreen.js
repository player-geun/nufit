import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, {useRef, useState} from 'react'
import { AutoFocus, Camera } from 'expo-camera';
import { Alert } from 'react-native';

const CameraScreen = ({navigation}) => {
  const cameraRef = useRef(null);

  const goResult = (item) => {
    navigation.navigate('SearchDetail', { title: item});
  };

  const takePictureHandler = async () => { 
    if (!cameraRef.current) return;
    
    // takePictureAsync를 통해 사진을 찍고 base64 형식으로 저장\
    await cameraRef.current
      .takePictureAsync({
        base64: true,
      })
      .then((data) => {
        //setPreviewVisible(true);
        //setCapturedImage(data); 얘네들은 사진을 기기에 저장하거나 편집할때 쓰임. 우리거엔 필요없지만 일단 보류
        Alert.alert(data+'촬영 완료');
        goResult("음식"); //지금은 이렇게 처리했지만 이부분에서 서버로 사진 전달하고 ai 돌린 결과 받아서 param 전달해야함
      });
  };

  return (
    <View style={styles.container}>
      <Camera
        style={{ width: 400, height: 400}}
        ref={cameraRef}
        autoFocus={AutoFocus.on}
        ratio={"1:1"}
      />
       <TouchableOpacity style={styles.btn} onPress={takePictureHandler}>
        </TouchableOpacity>
    </View>
  )
}

export default CameraScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor: '#fff'
  },
  btn: {
    backgroundColor: '#17AE9C',
    padding: 38,
    marginTop: 30,
    borderRadius: 50,

  }
})
