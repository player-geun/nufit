import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Carousel from '../components/Carousel';
import TopBarTemp from '../components/TopBarTemp';
import axios from 'axios';

const Home = () => {

  const screenWidth = Math.round(Dimensions.get('window').width);
  const [pages, setPages] = useState([
    { num: 1, time: 'BREAKFAST', kcal: '', carbohydrate: '', protein: '', fat: '' },
    { num: 2, time: 'LUNCH', kcal: '', carbohydrate: '', protein: '', fat: '' },
    { num: 3, time: 'DINNER', kcal: '', carbohydrate: '', protein: '', fat: '' }
  ]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('http://ec2-52-79-235-252.ap-northeast-2.compute.amazonaws.com:8080/api/meals/intake?memberId=1');
              const data = response.data;
              const updatedPages = pages.map(page => {
                  const mealData = data.find(meal => meal.type === page.time);
                  if (mealData) {
                      return {
                          ...page,
                          kcal: mealData.calorieTotal.toString(),
                          carbohydrate: mealData.carbAmount.toString(),
                          protein: mealData.proteinAmount.toString(),
                          fat: mealData.fatAmount.toString()
                      };
                  }
                  return page;
              });

              setPages(updatedPages);
          } catch (error) {
              console.error( error);
          }
      };

      fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <TopBarTemp/>
      </View>
      
      <Carousel gap={16} offset={36} pages={pages} pageWidth={screenWidth-(16+36)*2}/>
      {/* <Button title="+" onPress={handlePress}/> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        backgroundColor:'#FAFAFA'
    },
    topbar: {
      alignItems:'center',
      justifyContent: 'center',
      paddingBottom:70,
    }

})