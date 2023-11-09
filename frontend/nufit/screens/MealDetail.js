
import { Text, StyleSheet, View,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import NutBox from '../components/NutBox';

const MealDetail = ({navigation}) => {

    const goNext = () => {
        navigation.navigate('ChooseSearch');
    }

    const name='사과';
    const carb = 24;
    const protein = 24;
    const totalf = 24;
    const carbsPercentage = 3;
    const proteinPercentage = 5;
    const fatPercentage = 5;

    const data = [
        { name: '사과', size: '1개 중간 크기', kcal: '57 kcal' },
        { name: '바나나', size: '2개 소 크기', kcal: '90 kcal' },
        { name: '딸기', size: '10개 작은 크기', kcal: '30 kcal' },
        { name: '사과', size: '1개 중간 크기', kcal: '57 kcal' },
        { name: '바나나', size: '2개 소 크기', kcal: '90 kcal' },
        { name: '딸기', size: '10개 작은 크기', kcal: '30 kcal' },
        { name: '사과', size: '1개 중간 크기', kcal: '57 kcal' },
        { name: '바나나', size: '2개 소 크기', kcal: '90 kcal' },
        { name: '딸기', size: '10개 작은 크기', kcal: '30 kcal' },
      ]; //데이터 예시


  return (
    <View style={styles.container}>
      <View style={styles.blackBox}> 
        <View style={{flexDirection: 'row', alignItems: 'flex-start', marginTop: 36, justifyContent: 'space-between'}}>
          <View>
            <Text style={{textAlign: 'left', color: '#fff', fontSize: 15, fontFamily: "Pretendard-Light", marginBottom: 5}}>총 칼로리.</Text>
            <Text style={styles.resultText}>127 kcal</Text>
          </View>
          <TouchableOpacity style={styles.purpleBtn} onPress={goNext}>
            <Text style={{color: '#fff', fontSize:26}}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.nutRes}>
          <NutBox nutName={'탄수화물'} grams={carb} percents={carbsPercentage}/>
          <NutBox nutName={'단백질'} grams={protein} percents={proteinPercentage}/>
          <NutBox nutName={'지방'} grams={totalf} percents={fatPercentage}/>
        </View>
      </View>
      <ScrollView style={styles.whiteBox}> 
        <Text style={{marginLeft: 10, fontWeight: 700}}>아침에 먹었어요</Text>
        <View style={styles.wrapper}>
            
        {data.map((item, index) => (
            <View style={styles.context} key={index}>
              <View>
                <Text style={styles.text}>{item.name}</Text>
              </View>
              <View style={styles.righttext}>
                <Text style={styles.text}>{item.kcal}</Text>
                <Text style={styles.minitext}>삭제</Text>
              </View>
            </View>
          ))}
          </View>
      </ScrollView>
      <TouchableOpacity style={styles.nextBtn}>
        <Text style={{color: '#fff'}}>기록 완료</Text>
      </TouchableOpacity> 
    </View>
  )
}


const styles = StyleSheet.create({
    resultText: {
      fontSize: 22,
      fontFamily: 'Pretendard-Bold',
      color: '#fff'
    },
    blackBox: {
      height: 375,
      backgroundColor: '#19C1AD',
      paddingHorizontal: 34,
      paddingVertical: 65
    },
    container: {
      flex:1,
    },
    whiteBox: {
      flex:1,
      backgroundColor: '#fff',
      padding: 20,
    },
    purpleBtn: {
      backgroundColor: 'rgba(253, 255, 255, 0.20);',
      borderRadius: 50,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height: 100
    },
    nutRes: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      height: 95,
      borderRadius: 10,
      backgroundColor: 'rgba(253, 255, 255, 0.20);',
      marginTop: 20
    },
    nextBtn: {
      borderWidth: 1,
      backgroundColor: '#000',
      borderRadius: 30,
      padding: 14,
      width: '90%',
      alignItems: 'center',
      position: 'absolute',
      bottom: 40,
      alignSelf: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 8,
    },
    text: {
        fontSize: 16,
      },
      minitext: {
        fontSize: 12,
        marginTop: 3,
        color: '#cdcdcd',
      },
      context: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#CDCDCD',
        marginVertical: 6,
        paddingHorizontal: 30,
        paddingVertical: 20,
        justifyContent: 'space-between',
      },
      righttext: {
        alignItems: 'center',
      },
      wrapper: {
        paddingBottom: 100,
      }
  })
  

export default MealDetail