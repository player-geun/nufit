import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const NutDetail = ({kcal, carb, sugar, protein, totalf, transf, satf, chol, na}) => {
  return (
    <View style={{width: '100%', paddingHorizontal: 30, paddingBottom: 88}}>
      <View style={styles.box}>
        <Text style={styles.text1}>총 칼로리</Text>
        <Text style={styles.text1}>{kcal} kcal</Text>
      </View>
      <View>
        <View style={styles.box2}>
            <Text style={styles.text1}>탄수화물</Text>
            <Text style={styles.text1}>{carb} g</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.text2}>당</Text>
            <Text style={styles.text2}>{sugar} g</Text>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.text1}>단백질</Text>
        <Text style={styles.text1}>{protein} g</Text>
      </View>
      <View>
        <View style={styles.box2}>
            <Text style={styles.text1}>지방</Text>
            <Text style={styles.text1}>{totalf} g</Text>
        </View>
        <View style={styles.box2}>
            <Text style={styles.text2}>트랜스지방</Text>
            <Text style={styles.text2}>{transf} g</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.text2}>포화지방</Text>
            <Text style={styles.text2}>{satf} g</Text>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.text1}>콜레스테롤</Text>
        <Text style={styles.text1}>{chol} mg</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text1}>나트륨</Text>
        <Text style={styles.text1}>{na} mg</Text>
      </View>
      
    </View>
  )
}

export default NutDetail

const styles = StyleSheet.create({
    box: {
      flexDirection: "row",
      justifyContent: "space-between",
      borderBottomWidth: 1,
      borderBottomColor: "#ECEBEB",
      alignItems: 'center',
      paddingVertical: 20
    },
    box2: {
        flexDirection: "row",
        justifyContent: "space-between",
        //paddingVertical: 20
        paddingTop: 20
    },
    text1: {
        color: '#000',
        fontFamily: 'Pretendard-SemiBold',
        fontSize: 15,
    },
    text2: {
        color: '#ADADAD',
        fontFamily: 'Pretendard-Regular',
        fontSize: 12,
    },
    
})
