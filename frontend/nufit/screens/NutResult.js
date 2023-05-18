import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const NutResult = ({ route }) => {
  const { result } = route.params;

  return (
    <View>
      <Text style={styles.resultText}>목표 탄수화물량은 {Math.round(result * 0.4)}kcal입니다.</Text>
      <Text style={styles.resultText}>목표 단백질량은 {Math.round(result * 0.4)}kcal입니다.</Text>
      <Text style={styles.resultText}>목표 지방량은 {Math.round(result * 0.2)}kcal입니다.</Text>
    </View>
  );
}



const styles = StyleSheet.create({
    resultText: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
      },
})

export default NutResult;
