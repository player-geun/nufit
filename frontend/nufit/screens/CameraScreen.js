import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, {useRef, useState} from 'react'
import { AutoFocus, Camera } from 'expo-camera';
import { Alert } from 'react-native';
import axios from 'axios';

const CameraScreen = ({route, navigation}) => {
  const {mealId} = route.params;
  const cameraRef = useRef(null);

  const takePictureHandler = async () => { 
    if (!cameraRef.current) return;

    const data = await cameraRef.current.takePictureAsync();
    console.log(data)

    const formData = new FormData();
    formData.append('image', {
      uri: data.uri,
      name: 'photo.jpg',
      type: 'image/jpeg',
    });


    axios({
      method: 'post',
      url: 'http://43.202.91.101:5000/food',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      console.log(response.data);

      const itemToPass = {
        id: response.data.food[0].id,
        title: response.data.food[0].name,
        mealId: mealId
      };
      navigation.navigate('SearchDetail', { item: itemToPass });
    })
    .catch(error => {
      console.error('Error', error);
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
