import React, {useState, useEffect} from 'react'
import { Text, StyleSheet, View,TouchableOpacity, ScrollView } from 'react-native'
import NutBox from '../components/NutBox';
import NutDetail from '../components/NutDetail';
import axios from 'axios';

const SearchDetail = ({ route, navigation }) => {

  const item = route.params.item;
  const name = item.title;
  const id = item.id;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://43.202.91.101:8080/api/foods/${id}`); 
        console.log(response.data)
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const goNext = () => {
    navigation.navigate('ChooseSearch');
  }
  //data
  const kcalData = data ? data.calorie : 0;
  const carb = data ? data.nutrientResponses[0].amount : 0;
  const sugar = data ? data.nutrientResponses[0].childNutrientResponses[0].amount: 0;
  const protein = data ? data.nutrientResponses[1].amount : 0;
  const totalf = data ? data.nutrientResponses[2].amount : 0;
  const transf = data ? data.nutrientResponses[2].childNutrientResponses[0].amount: 0;
  const satf = data ? data.nutrientResponses[2].childNutrientResponses[2].amount: 0;
  const chol = data ? data.nutrientResponses[3].amount : 0;
  const na  = data ? data.nutrientResponses[4].amount : 0;
  const kcal = data ? data.calorie : 0;

  const carbsCalories = carb * 4;
  const proteinCalories = protein * 4;
  const fatCalories = totalf * 9;

  // 탄단지 퍼센트
  const carbsPercentage = Math.floor((carbsCalories / kcalData) * 100);
  const proteinPercentage =  Math.floor((proteinCalories / kcalData) * 100);
  const fatPercentage =  Math.floor((fatCalories / kcalData) * 100);

  return (
    <View style={styles.container}>
      <View style={styles.blackBox}> 
        <TouchableOpacity style={styles.purpleBtn} onPress={goNext}>
          <Text style={{color: '#fff', fontSize: 12}}>이 음식이 아니에요 ↗</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'flex-start', marginTop: 36, justifyContent: 'space-between'}}>
          <Text style={styles.resultText}>{name}</Text>
          <View>
            <Text style={{textAlign: 'right', color: '#fff', fontSize: 15, fontFamily: "Pretendard-Light", marginBottom: 5}}>총 칼로리.</Text>
            <Text style={styles.resultText}>{kcalData} kcal</Text>
          </View>
        </View>
        <View style={styles.nutRes}>
          <NutBox nutName={'탄수화물'} grams={carb} percents={carbsPercentage}/>
          <NutBox nutName={'단백질'} grams={protein} percents={proteinPercentage}/>
          <NutBox nutName={'지방'} grams={totalf} percents={fatPercentage}/>
        </View>
      </View>
      <ScrollView style={styles.whiteBox}> 
        <NutDetail kcal={kcal} carb={carb} sugar={sugar} protein={protein} totalf={totalf} transf={transf} satf={satf} chol={chol} na={na}/>
      </ScrollView>
      <TouchableOpacity style={styles.nextBtn}>
        <Text style={{color: '#fff'}}>식단 추가</Text>
      </TouchableOpacity> 
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  resultText: {
    fontSize: 22,
    fontFamily: 'Pretendard-Bold',
    color: '#fff'
  },
  blackBox: {
    height: 375,
    backgroundColor: '#222',
    paddingHorizontal: 34,
    paddingVertical: 65
  },
  container: {
    flex:1,
  },
  whiteBox: {
    flex:1,
    backgroundColor: '#fff',
  },
  purpleBtn: {
    paddingLeft: 14,
    paddingVertical: 6,
    width: 130,
    borderRadius: 30,
    backgroundColor: '#BD31FF',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  nutRes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 95,
    borderRadius: 10,
    backgroundColor: '#1D1D1D',
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
})


export default SearchDetail;