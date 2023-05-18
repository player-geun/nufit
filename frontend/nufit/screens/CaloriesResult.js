import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native'

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
 
    
  function handlePress() {
    navigation.navigate('NutResult', { result : bmr });
    }

  return (
    <View>
      <Text style={styles.resultText}>목표 섭취 열량은 {Math.round(bmr)}kcal입니다.</Text>
      <Button title="다음" onPress={handlePress} />
    </View>
  );
}


export default CaloriesResult;

const styles = StyleSheet.create({
    resultText: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
      },
})
