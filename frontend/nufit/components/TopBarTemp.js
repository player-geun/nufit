import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import poster from '../assets/character.png'
import left from '../assets/prev_arrow_ico.png'
import right from '../assets/next_arrow_ico.png'
import { useDate } from '../context/DateContext';

const TopBarTemp = () => {
  const {date} = useDate();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = date.toLocaleDateString('ko-KR', options);


  return (
    
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={poster}/>
      </View>
      <View style={styles.headerbox}>
        <Text style={styles.text}>오늘은 이렇게 먹었어요</Text>
        <View style={styles.datebox}>
          
          <Text style={styles.date}>{currentDate}</Text>

        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: 0,
    backgroundColor: '#FAFAFA',
    paddingTop: 70,
    
  },
 
  headerbox: {
    marginTop: 10,
    flexDirection: 'row',
    
    
  },
  datebox: {
    flexDirection: 'row',
    paddingHorizontal: 0,
    alignItems: 'center',
  },
  date: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 4,
  },
  text: {
    // fontFamily: 'Pretendard-Bold',
    fontSize: 19,
    fontWeight: 'bold',
    paddingRight: 25,
  },
  img: {
    width: 42,
    height: 35,
  }
});

export default TopBarTemp;
