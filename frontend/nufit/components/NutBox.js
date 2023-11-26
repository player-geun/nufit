import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NutBox = ({nutName, grams, percents}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.nutName}>{nutName}</Text>
      <Text style={styles.grams}>{grams} g</Text>
      <Text style={styles.percents}>{percents}%</Text>
    </View>
  )
}

export default NutBox

const styles = StyleSheet.create({
    nutName: {
        color: '#FFF',
        fontFamily: 'Pretendard-Regular',
        fontSize: 12,
    },
    grams: {
        color: '#FFF',
        fontFamily: 'Pretendard-Regular',
        fontSize: 18,
        marginVertical: 5
    },
    percents: {
        color: 'rgba(255, 255, 255, 0.60)',
        fontFamily: 'Pretendard-Light',
        fontSize: 11.5,

    }
})
