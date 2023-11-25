import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Carousel from '../components/Carousel';
import TopBarTemp from '../components/TopBarTemp';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
<<<<<<< HEAD
=======
import { getTokenFromLocal } from '../utils/tokenUtils';
>>>>>>> 794d515 ([feat] login-process-api)

const Home = () => {

  const screenWidth = Math.round(Dimensions.get('window').width);
  const [pages, setPages] = useState([
    { num: 1, time: 'BREAKFAST', kcal: '', carbohydrate: '', protein: '', fat: '' },
    { num: 2, time: 'LUNCH', kcal: '', carbohydrate: '', protein: '', fat: '' },
    { num: 3, time: 'DINNER', kcal: '', carbohydrate: '', protein: '', fat: '' }
  ]);

  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1; 
    const day = date.getDate();
  
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;
  
    return `${year}-${formattedMonth}-${formattedDay}`;
  };

  const currentDate = getCurrentDate();

  

  useFocusEffect(React.useCallback(() => {
      const fetchData = async () => {
<<<<<<< HEAD
          try {
            const serverAddress = "http://ec2-52-79-235-252.ap-northeast-2.compute.amazonaws.com:8080";
            const memberId = 1;  
            const date = currentDate; 
            const url = `${serverAddress}/api/meals/intake?memberId=${memberId}&date=${date}`;

            const response = await axios.get(url);
=======
      const token = await getTokenFromLocal();
          try {
            const serverAddress = "http://43.202.91.101:8080";
            // const memberId = 1;  
            const date = currentDate; 
            const url = `${serverAddress}/api/meals/intake?date=${date}`;
            const response = await axios.get(url, {headers: {Authorization : `Bearer ${token.accessToken}`}});
>>>>>>> 794d515 ([feat] login-process-api)
              //const response = await axios.get(`http://ec2-52-79-235-252.ap-northeast-2.compute.amazonaws.com:8080/api/meals/intake?memberId=1`);
              const data = response.data;
              console.log(data)
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
  }, [currentDate]));

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