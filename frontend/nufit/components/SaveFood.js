import React, { useState, useEffect } from 'react';
import { ScrollView, Animated, View, TouchableOpacity, StyleSheet, StatusBar, Text, Image, KeyboardAvoidingView } from 'react-native';
import char from '../assets/blank_data_ico.png'
import { TabView, SceneMap } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const FirstRoute = ({ res }) => {
  if (res === 0) {
    return (
      <KeyboardAvoidingView style={[styles.container, { backgroundColor: '#ffffff' }]}>
        <ScrollView style={{width: '100%', marginTop: 250}}>
        <View style={styles.foodContainer}>
          <Image style={styles.img} source={char} />
          <Text style={styles.text}>자주 먹는 음식을 저장해보세요</Text>
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  } else {
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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.container2, { backgroundColor: '#ffffff' }]}>
          {data.map((item, index) => (
            <View style={styles.context} key={index}>
              <View>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.minitext}>{item.size}</Text>
              </View>
              <View style={styles.righttext}>
                <Text style={styles.text}>{item.kcal}</Text>
                <Text style={styles.minitext}>삭제</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
};


const SecondRoute = ({navigation}) => {

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://43.202.91.101:8080/api/foods/member/1'); 
        setFoods(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return(
  
  <KeyboardAvoidingView style={[styles.container, { backgroundColor: '#ffffff' }]}>
    <ScrollView style={{width: '100%'}}>
      <View style={styles.regContainer}>
        <Text style={styles.regText}>찾는 음식이 없나요?</Text>
        <TouchableOpacity
              style={styles.button}
              onPress={()=>{navigation.navigate('RegisterFoodName');}}
          >
              <Text style={styles.buttonText}>음식 등록</Text>
          </TouchableOpacity>
      </View>
      
        {/* <Image style={styles.img} source={char} />
        <Text style={styles.text}>음식을 등록해보세요</Text> */}
        {foods.map((food) => (
          <View key={food.id} style={styles.context}>
            <View>
              <Text style={styles.text}>{food.name}</Text>
            </View>
            <View style={styles.righttext}>
              <Text style={styles.text}>{food.calorie}kcal</Text>
            </View>
          </View>
        ))}
      
    </ScrollView>
  
  </KeyboardAvoidingView>
  );
 };

const SaveFood = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: '저장한 음식' },
    { key: 'second', title: '등록한 음식' },
  ]);
  const [res] = useState(0); // api 연결 후 json 데이터에 따라

  const handleIndexChange = (index) => setIndex(index);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
  
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) => (inputIndex === i ? 1 : 0.5)),
          });

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => setIndex(i)}
              key={i} 
            >
              <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderScene = SceneMap({
    first: () => <FirstRoute res={res} />,
    second: () => <SecondRoute navigation={navigation}/>
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={handleIndexChange}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    marginTop: 6,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: StatusBar.currentHeight,
    borderBottomWidth: 2,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
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
    paddingHorizontal: 40,
    paddingVertical: 30,
    justifyContent: 'space-between',
  },
  righttext: {
    alignItems: 'center',
  },
  img: {
    marginBottom: 10,
  },
  regContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10
  },
  foodContainer: {
    flex:0.9,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100 //임시
  },
  button: {
    backgroundColor:'#00D7BD',
    width: '23%',
    padding: 8,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 8
  },
  regText: {
    fontSize: 15,
  },
  buttonText: {
    color: 'white'
  }
});

export default SaveFood;
