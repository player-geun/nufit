import axios from 'axios';
import { Text, StyleSheet, View,TouchableOpacity, ScrollView } from 'react-native'
import React, {useState,useEffect} from 'react'
import NutBox from '../components/NutBox';
import { getTokenFromLocal } from '../utils/tokenUtils';

const MealDetail = ({route, navigation}) => {

  const [foods, setFoods] = useState([]);
  const [data, setData] = useState([]);
  const { mealId } = route.params;
  const { mealTime } = route.params;

  const handleDelete = async (mealDetailId) => {
    const token = await getTokenFromLocal();
    try {
      const deleteUrl = `http://43.202.91.101:8080/api/meals/details/${mealDetailId}`;
      await axios.delete(deleteUrl,{headers: {Authorization : `Bearer ${token.accessToken}`}});
      console.log('삭제')
      const updatedFoods = foods.filter(item => item.mealDetailId !== mealDetailId);
      setFoods(updatedFoods);
    } catch (error) {
      console.error(error);
    }
  };

  
    
    useEffect(() => {
        const fetchData = async () => {
            try {
              const token = await getTokenFromLocal();
                const response = await axios.get(`http://43.202.91.101:8080/api/meals/${mealId}/details`,
                {headers: {Authorization : `Bearer ${token.accessToken}`}});
                setFoods(response.data.foodSimpleResponses);
                setData(response.data);
                console.log(response.data.foodSimpleResponses)
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    const goNext = () => {
        navigation.navigate('ChooseSearch', {mealId});
    }

    const goBefore = () => {
      navigation.popToTop();
  }
  const totalcal = data ? data.calorieTotal : 0;
  const carb = data ? data.carbAmount : 0;
  const protein = data ? data.proteinAmount : 0;
  const totalf = data ? data.fatAmount : 0;

  const carbsPercentage = data ? data.carbPercent : 0;
  const proteinPercentage = data ? data.proteinPercent : 0;
  const fatPercentage = data ? data.fatPercent : 0;


  return (
    <View style={styles.container}>
      <View style={styles.blackBox}> 
        <View style={{flexDirection: 'row', alignItems: 'flex-start', marginTop: 36, justifyContent: 'space-between'}}>
          <View>
            <Text style={{textAlign: 'left', color: '#fff', fontSize: 17, fontFamily: "Pretendard-Light", marginBottom: 5}}>총 칼로리.</Text>
            <Text style={styles.resultText}>{totalcal} kcal</Text>
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
        <Text style={{marginLeft: 10, fontWeight: 700, fontSize: 16}}>{mealTime}에 먹었어요</Text>
        <View style={styles.wrapper}>
            
          {foods.map((item, index) => (
              <View style={styles.context} key={index}>
                  <View>
                      <Text style={styles.text}>{item.foodName}</Text>
                  </View>
                  <View style={styles.righttext}>
                      <Text style={styles.text}>{item.calorie} kcal</Text>
                      <TouchableOpacity onPress={() => handleDelete(item.mealDetailId)}>
                        <Text style={styles.minitext}>삭제</Text>
                      </TouchableOpacity>
                      
                  </View>
              </View>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.nextBtn} onPress={goBefore}>
        <Text style={{color: '#fff'}}>기록 완료</Text>
      </TouchableOpacity> 
    </View>
  )
}


const styles = StyleSheet.create({
    resultText: {
      fontSize: 24,
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