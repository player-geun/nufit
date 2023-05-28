import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TopBar = () => {
  const [date, setDate] = useState(new Date()); // 현재 날짜 상태
  const currentDate = date.toLocaleDateString(); // 현재 날짜를 문자열로 변환

  // 이전 날짜로 이동하는 함수
  const goToPreviousDay = () => {
    const previousDate = new Date(date); // 현재 날짜의 복사본 생성
    previousDate.setDate(previousDate.getDate() - 1); // 이전 날짜로 설정
    setDate(previousDate); // 날짜 상태 업데이트
  };

  // 다음 날짜로 이동하는 함수
  const goToNextDay = () => {
    const nextDate = new Date(date); // 현재 날짜의 복사본 생성
    nextDate.setDate(nextDate.getDate() + 1); // 다음 날짜로 설정
    setDate(nextDate); // 날짜 상태 업데이트
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToPreviousDay}>
        <Text style={styles.button}>&lt;</Text>
      </TouchableOpacity>
      <Text style={styles.date}>{currentDate}</Text>
      <TouchableOpacity onPress={goToNextDay}>
        <Text style={styles.button}>&gt;</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#f2f2f2',
  },
  button: {
    fontSize: 20,
    paddingHorizontal: 70,
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
});

export default TopBar;
