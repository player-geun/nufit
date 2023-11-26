import React from 'react'
import { Text, StyleSheet, View, Alert, TouchableOpacity, Image} from 'react-native'
import {Camera} from "expo-camera";
import search from '../assets/search.png'
import arrow from '../assets/right_arrow_ico.png'
import camera from '../assets/take_photo_ico.png'

const ChooseSearch = ({ route, navigation }) => {

    const {mealId} = route.params;
    const openCameraHandler = async () => { 
        // 카메라에 대한 접근 권한 물어보는 함수
          const { status } = await Camera.requestCameraPermissionsAsync();
       
       // 권한을 획득하면 status가 granted 상태가 됨
          if (status === 'granted') {
            navigation.navigate('CameraScreen',{mealId});
          } else {
            Alert.alert('카메라 접근 허용은 필수입니다.');
          }
      };


    function openSearch() {
        navigation.navigate('Search', {mealId});
    }

    function close() {
        navigation.goBack();
    }
  
  return (
    <View style={styles.container}>
        <Text style={styles.text}>어떻게 기록할까요?</Text>
        <View style={styles.chooseContainer}>
            <TouchableOpacity style={styles.choose1} onPress={openCameraHandler}>
                <Image source={camera}/>
                <Text style={{fontSize: 17}}>사진으로{'\n'}기록하기</Text>
                <Image source={arrow}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.choose2} onPress={openSearch}>
                <Image source={search}/>
                <Text style={{fontSize: 17}}>검색으로{'\n'}기록하기</Text>
                <Image source={arrow}/>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.nextBtn} onPress={close}>
          <Text style={{color: '#fff', fontSize: 16}}>닫기</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent : 'center',
        alignItems : 'center',
        padding: 30,
        backgroundColor: '#fff',
        paddingVertical: 200
        
    },
    text: {
        marginTop: 0,
        fontSize: 20,
        fontWeight: 'bold',
    },
    chooseContainer: {
        width: '85%',
        flex:1,
        justifyContent: 'space-between',
        alignItems : 'center',
        flexDirection : 'row',
        
        
    },
    choose1: {
        width: 130,
        height: 160,
        borderColor: '#00D7BD',
        borderRadius: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 15
    },
    choose2: {
        width: 130,
        height: 160,
        borderColor: '#00D7BD',
        borderRadius: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 15
    },
    nextBtn: {
        borderWidth: 1,
        backgroundColor: '#000',
        borderRadius: 30,
        padding: 14,
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
        marginTop: 0
      },
   
})

export default ChooseSearch;
