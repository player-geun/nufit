import React from 'react'
import { useState, useEffect } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import morningimg from '../assets/morning_ico_white.png'
import lunchimg from '../assets/afternoon_ico_white.png'
import dinnerimg from '../assets/night_ico_white.png'
import markimg from '../assets/mark.png'
import ProgressCircle from '../components/ProgressCircle';
import ProgressBar from '../components/ProgressBar';
import TopBar from '../components/TopBar';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import { getTokenFromLocal } from '../utils/tokenUtils'
import { useDate } from '../context/DateContext';

const StaticPie = ({}) => {

  const [data, setData] = useState(null);
  const [chart, setChart]= useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [one, setOne] = useState('');
  const [two, setTwo] = useState('');
  const [three, setThree] = useState('');
  const [four, setFour] = useState('');
  const { date } = useDate();
  const formattedDate = date.toISOString().split('T')[0];

  useFocusEffect(React.useCallback(() => {
    const fetchData = async () => {
      try {
        const token = await getTokenFromLocal(); 
        const response = await axios.get(`http://43.202.91.101:8080/api/meals/circle?date=${formattedDate}`,
        {headers: {Authorization : `Bearer ${token.accessToken}`}}); 
        console.log(response.data)
        
        const mealData = response.data.mealTypeCalories;

      let breakfastCal = 0, lunchCal = 0, dinnerCal = 0;

      mealData.forEach(meal => {
        switch (meal.type) {
          case 'BREAKFAST':
            breakfastCal = meal.calorie;
            break;
          case 'LUNCH':
            lunchCal = meal.calorie;
            break;
          case 'DINNER':
            dinnerCal = meal.calorie;
            break;
          default:
            break; 
        }
      });

      setData({ breakfast: breakfastCal, lunch: lunchCal, dinner: dinnerCal });

        setChart(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [formattedDate]));


  //추천 랜덤식단
  const RandomFood = async () => {
    try {
      const token = await getTokenFromLocal(); 
      const response = await axios.get(`http://43.202.91.101:8080/api/foods/random`,
      {headers: {Authorization : `Bearer ${token.accessToken}`}}); 
      setOne(response.data[0].name)
      setTwo(response.data[1].name)
      setThree(response.data[2].name)
      setFour(response.data[3].name)


    } catch (error) {
      console.error(error);
    }
  };

  const ModalOpen = () => {
    RandomFood();
    setModalVisible(!modalVisible)
    
  }
  

  const morning = data ? data.breakfast : 0;
  const lunch = data ? data.lunch : 0;
  const dinner = data ? data.dinner : 0;

    

    const carbgoal = chart ? chart.goalCarbAmount : 0; 
    let carbprogress = chart ? chart.carbAmount : 0;
    const proteingoal = chart ? chart.goalProteinAmount : 0; 
    let proteinprogress = chart ? chart.proteinAmount : 0;
    const fatgoal = chart ? chart.goalFatAmount : 0; 
    let fatprogress = chart ? chart.fatAmount : 0;

    const progressValue = chart ? chart.calorieTotal : 0;
    const carbsValue = chart ? chart.carbPercent : 0;
    const proteinValue = chart ? chart.proteinPercent : 0;
    const fatValue = chart ? chart.fatPercent : 0;



  return (
    
    <View style={styles.container}>
   
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.black}>
            <View style={styles.modal}>
                <Text style={styles.modalTitle}>추천 식단을 섭취해보세요</Text>
                <Text style={styles.modalSub}>부족한 영양소를 채워줄 거예요</Text>
                <View style={{flexDirection: 'row', gap: 10, marginBottom: 10, marginTop: 20}}>
                    <Text style={styles.foodBox}>{one}</Text>
                    <Text style={styles.foodBox}>{two}</Text>
                </View>
                <View style={{flexDirection: 'row', gap: 10, marginBottom: 30}}>
                    <Text style={styles.foodBox}>{three}</Text>
                    <Text style={styles.foodBox}>{four}</Text>
                </View>
                <TouchableOpacity style={styles.closebtn} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={{color: '#fff', fontSize: 16}}>닫기</Text>
                </TouchableOpacity>
            </View>
        </View>
      </Modal>
        
        <View style={styles.shadowbox}>
            <Text style={styles.todaytext}>오늘 하루</Text>
            <View style={styles.container4}>
                <View style={styles.container2}>
                <ProgressCircle
                    progress={progressValue}
                    carbspercent={carbsValue}
                    proteinpercent={proteinValue}
                    fatpercent={fatValue}
                />
                </View>
                <View style={styles.container3}>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}]}>
                        <View style={styles.circle1} />
                        <Text style={styles.infotext}>순탄수화물</Text>
                    </View>
                    <Text style={styles.percentfont}>{carbsValue}% {"\n"}</Text>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}]}>
                        <View style={styles.circle2} />
                        <Text style={styles.infotext}>단백질</Text>
                    </View>
                    <Text style={styles.percentfont}>{proteinValue}% {"\n"}</Text>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}]}>
                        <View style={styles.circle3} />
                        <Text style={styles.infotext}>지방</Text>
                    </View>
                    <Text style={styles.percentfont}>{fatValue}%</Text>
                </View>
            </View>
            <View style={styles.container5}>
                <ProgressBar label="단백질" goal={proteingoal} progress={proteinprogress} />
                <ProgressBar label="탄수화물" goal={carbgoal} progress={carbprogress} />
                <ProgressBar label="지방" goal={fatgoal} progress={fatprogress} />
            </View>
            <View style={styles.container6}>
                {/* <Text style={[{color: '#fff'}, {fontSize: 14}]}>{remainCalories}kcal 더 먹을 수 있어요</Text> */}
                <View style={styles.container7}>
                    <Image source={morningimg}/>
                    <Text style={styles.timefont}> 아침</Text>
                    <Text style={styles.percentfont}>{morning}kcal</Text>
                </View>
                <View style={styles.container7}>
                    <Image source={lunchimg}/>
                    <Text style={styles.timefont}> 점심</Text>
                    <Text style={styles.percentfont}>{lunch}kcal</Text>
                </View>
                <View style={styles.container7}>
                    <Image source={dinnerimg}/>
                    <Text style={styles.timefont}> 저녁</Text>
                    <Text style={styles.percentfont}>{dinner}kcal</Text>
                </View>

            </View>
            <TouchableOpacity style={styles.last} onPress={ModalOpen}>
                <Image source={markimg}/>
                <Text style={styles.recommend}>식단을 추천해드릴게요</Text>
            </TouchableOpacity>

        </View>
        
        
    </View>
    
    

  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1, 
        
       
    },
    container2: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2, 
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    container3: {
        alignItems: 'flex-start',
        marginLeft: 12,
        flex: 1, 
        marginTop: 20,
    },
    container4: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1, 
        flexDirection: 'row',
       
    },
    container5: {
        width: 300,
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
      
       
    },
    container6: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flex: 0.7, 
        backgroundColor: '#17AE9C',
        marginBottom: 10,
        width: 300,
        borderRadius: 10,
        paddingLeft: 30,
        

    },
    shadowbox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#00D7BD',
        paddingHorizontal: 20,
        paddingBottom: 0,
        borderRadius: 15,
        marginHorizontal: 30,
        // marginVertical: 50,
        marginBottom: 30,
        shadowColor: '#19C1AD',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.62,
        elevation: 6,
    },
    todaytext: {
        marginRight: 230,
        color: '#fff',
        fontSize: 16,
        marginTop: 14,
        marginBottom: 10,
        fontFamily: 'Pretendard-SemiBold'
    },
    infotext: {
        color: '#fff',
        fontSize: 13,
        marginLeft: 5,
    },
    percentfont: {
        color: '#fff',
        fontSize: 17,
        width: 100
    },
    circle1: {
        width: 8,
        height: 8,
        borderRadius: 100/2,
        backgroundColor: '#FFF',
    },
    circle2: {
        width: 8,
        height: 8,
        borderRadius: 100/2,
        backgroundColor: '#D5F12B',
    },
    circle3: {
        width: 8,
        height: 8,
        borderRadius: 100/2,
        backgroundColor: '#000000',
    },
    container7: {
        width: 240,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 35,
        marginTop: 3,

    },
    timefont: {
        color: '#A2DFD7',
        fontSize: 16,
        marginRight: 120,
    },
    last: {
        alignSelf: 'flex-start',
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    recommend: {
        color: '#FFF',
        fontFamily: 'Pretendard-Bold',
        fontSize: 13,
        fontWeight: 600,
        marginLeft: 7,
        marginTop: 2

    },
    closebtn: {
        borderWidth: 1,
        backgroundColor: '#000',
        borderRadius: 30,
        padding: 14,
        marginVertical: 10,
        width: '90%',
        alignItems: 'center',
        marginTop: 0
    },
    black: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        width: 300,
        height: 360,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    foodBox: {
        borderRadius: 5,
        backgroundColor: '#00E9CD',
        width: 125,
        paddingVertical: 15,
        paddingHorizontal: 4,
        color: '#fff',
        fontFamily: 'Pretendard-Bold',
        fontSize: 16,
        fontWeight: 600,
        textAlign: 'center'
    },
    modalTitle: {
        color: '#000',
        fontFamily: 'Pretendard-Bold',
        fontSize: 20,
        fontWeight: 700,
    },
    modalSub: {
        color: '#ADADAD',
        fontFamily: 'Pretendard-Regular',
        fontSize: 12,
        fontWeight: 400,
        marginTop: 4
    }
})

export default StaticPie;
