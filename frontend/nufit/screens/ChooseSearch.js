import React from 'react'
import { Text, StyleSheet, View, Button,Alert } from 'react-native'
import {Camera} from "expo-camera";

const ChooseSearch = ({ navigation }) => {

    const openCameraHandler = async () => { 
        // 카메라에 대한 접근 권한 물어보는 함수
          const { status } = await Camera.requestCameraPermissionsAsync();
       
       // 권한을 획득하면 status가 granted 상태가 됨
          if (status === 'granted') {
            navigation.navigate('CameraScreen');
          } else {
            Alert.alert('카메라 접근 허용은 필수입니다.');
          }
      };


    function handlePress2() {
        navigation.navigate('Search');
    }
  
  return (
    <View style={styles.container}>
        <Text style={styles.text}>어떻게 기록할까?</Text>
        <View style={styles.chooseContainer}>
            <View style={styles.choose1}>
                <Button title="사진으로 기록하기" onPress={openCameraHandler}/>
            </View>
            <View style={styles.choose2}>
                <Button title="검색으로 기록하기" onPress={handlePress2} />
            </View>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent : 'center',
        alignItems : 'center',
        
    },
    text: {
        marginTop: 200,
        fontSize: 18,
        fontWeight: 'bold',
    },
    chooseContainer: {
        flex:1,
        justifyContent: 'space-around',
        alignItems : 'center',
        flexDirection : 'row',
        marginHorizontal : 20,
        
    },
    choose1: {
        flex:1,
    },
    choose2: {
        flex:1,
    },
   
})

export default ChooseSearch;
