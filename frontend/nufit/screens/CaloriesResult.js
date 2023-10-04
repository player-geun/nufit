import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

const CaloriesResult = ({ route, navigation }) => {
  const { gen, a, he, we } = route.params;

  let bmr;
    if (gen === 'male') {
        bmr = 66.5 + (13.75 * we) + (5.003 * he) - (6.75 * a);
    } else if (gen === 'female') {
        bmr = 655.1 + (9.563 * we) + (1.850 * he) - (4.676 * a);
    } else {
        return;
    }
 
  function goNext() {
    navigation.navigate('NutResult', { result : bmr });
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>목표 칼로리를 {'\n'}계산해드렸어요</Text>
      <View style={styles.resBox}>
        <Text>일일 권장 섭취량은 <Text style={{color: '#00E9CD'}}>{Math.round(bmr)}kcal</Text> 입니다.{'\n'}{'\n'} </Text>
        <Text style={styles.resultText}>목표 섭취 칼로리</Text>
        <View style={styles.res}>
          <Text >{Math.round(bmr)}                                                                      kcal</Text>
        </View>
        <Text style={styles.adv}>권장 섭취량보다 <Text style={{color: '#00E9CD'}}>하루 500kcal 정도{'\n'}</Text>적게 먹으면 감량 효과를 기대할 수 있어요! </Text>
        <TouchableOpacity style={styles.nextBtn} onPress={goNext}>
          <Text style={{color: '#fff'}}>다음</Text>
        </TouchableOpacity> 
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: '#fff',
      padding: 20,
      paddingVertical: 30,
      paddingTop: 100,
  
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
      marginLeft: 10,
      
    },
    res:{
      justifyContent: 'center',
      marginBottom: 50,
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
      marginTop: 270
    },
    resBox: {
      marginHorizontal: 10
    }

})


export default CaloriesResult;