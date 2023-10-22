import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

const NutResult = ({ route, navigation }) => {
  const { result } = route.params;

  function goNext() {
    navigation.popToTop()
  }

  return (
    

    <View style={styles.container}>
      <Text style={styles.title}>목표 탄단지를 {'\n'}계산해드렸어요</Text>
      <Text>목표에 맞는 <Text style={{color: '#00E9CD'}}>탄단지 섭취량</Text>은 다음과 같습니다.{'\n'}{'\n'} </Text>

      <Text style={styles.resultText}>목표 탄수화물 섭취량</Text>
      <View style={styles.res}>
        <Text >{Math.round(result * 0.4)}                                                                        kcal</Text>
      </View>
      <Text style={styles.resultText}>목표 단백질 섭취량</Text>
      <View style={styles.res}>
        <Text >{Math.round(result * 0.4)}                                                                        kcal</Text>
      </View>
      <Text style={styles.resultText}>목표 지방 섭취량</Text>
      <View style={styles.res}>
        <Text >{Math.round(result * 0.2)}                                                                        kcal</Text>
      </View>
      <Text>{'\n'}</Text>
      <TouchableOpacity style={styles.nextBtn} onPress={goNext}>
        <Text style={{color: '#fff'}}>완료</Text>
      </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      padding: 20,
      paddingVertical: 30,
      paddingTop: 100,
      marginHorizontal: 10,
      backgroundColor: '#fff'

    },
    resultText: {
      marginTop: 20,
      fontSize: 16,
      fontWeight: 'bold',
     
    },
    title:{
      fontSize:20,
      fontWeight: 'bold',
      marginBottom: 50,
      
    },
    res:{
      justifyContent: 'center',
      marginBottom: 20,
      marginTop: 10,
      backgroundColor: '#fafafa',
      height: 50,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#ecebeb',
      paddingHorizontal: 20,
    },
    nextBtn: {
      borderWidth: 1,
      backgroundColor: '#000',
      borderRadius: 30,
      padding: 14,
      marginVertical: 10,
      width: '100%',
      alignItems: 'center',
      marginTop: 60,
    },
})

export default NutResult;