import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import React, {useEffect, useState} from 'react'
import char from '../assets/active3.png'
import blank from '../assets/blank_data_ico.png'
import axios from 'axios'
import { getTokenFromLocal } from '../utils/tokenUtils'

const MyPage = ({navigation}) => {
  const [data, setData] = useState(null);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const token = await getTokenFromLocal();
      try {
        const response = await axios.get(`http://43.202.91.101:8080/api/members/me/goals`,{headers: {Authorization : `Bearer ${token.accessToken}`}}); 
        //console.log(response.data)
        setData(response.data)
        
      } catch (error) {
        console.error(error);
      }
    };

    const getUser = async () => {
      try {
        const token = await getTokenFromLocal();
        const response = await axios.get(`http://43.202.91.101:8080/api/members/me/details`,{headers: {Authorization : `Bearer ${token.accessToken}`}}); 
        console.log(response.data)
        setName(response.data.name)
      }catch (error) {
        console.error(error);
      }
    };

    
    fetchData();
    getUser();

    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });

    return unsubscribe;
    
  }, [navigation]);

  const startWeight = data ? data.startWeight : 0;
  const goalWeight = data ? data.goalWeight : 0;
  const goalCalorie = data ? data.goalCalorie : 0;
  //const name = data ? data.name : '이름';
  

  function goSetGoal() {
    navigation.navigate('SetGoal')
}

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <View style={{flexDirection: 'row'}}>
          {/* <Text style={{fontSize: 22, fontWeight: 600}}>{name}</Text> */}
          <Text style={{fontSize: 18, marginLeft: 5, marginTop: 5}}>환영합니다</Text>
        </View>
        <Image source={char}/>
      </View>
      <View style={{marginBottom: 40}}>
        <Text style={{fontSize: 16}}>나의 목표 ⟩</Text>
        <View style={styles.info}>
          <View style={{alignItems: 'center', flex:1}}>
            <Text style={styles.title}>시작 체중</Text>
            <Text style={styles.sub}>{startWeight} kg</Text>
          </View>
          <View style={{alignItems: 'center', flex:1}}>
            <Text style={styles.title}>목표 체중</Text>
            <Text style={styles.sub}>{goalWeight} kg</Text>
          </View>
          <View style={{alignItems: 'center', flex:1}}>
            <Text style={styles.title}>칼로리</Text>
            <Text style={styles.sub}>{goalCalorie} kcal</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomBox}>
        <Image source={blank}/>
        <TouchableOpacity style={styles.nextBtn} onPress={goSetGoal}>
          <Text style={{color: '#fff'}}>목표 변경하기</Text>
        </TouchableOpacity>
      </View>
      
      
    </View>
  )
}

export default MyPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    padding: 40,
    paddingVertical: 30,
    paddingTop: 100,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 95,
    borderRadius: 10,
    backgroundColor: '#1D1D1D',
    marginTop: 20
  },
  title: {
    color: '#FFF',
    fontFamily: 'Pretendard-Regular',
    fontSize: 11.5,
  },
  sub: {
    color: '#FFF',
    fontFamily: 'Pretendard-Regular',
    fontSize: 18,
    marginVertical: 5
  },
  user:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  nextBtn: {
    borderWidth: 1,
    backgroundColor: '#000',
    borderRadius: 30,
    padding: 14,
    marginVertical: 10,
    alignItems: 'center',
    marginTop: 20,
    width: 140
  },
  bottomBox: {
    alignSelf: 'center',
    alignItems: 'center'
  }

})