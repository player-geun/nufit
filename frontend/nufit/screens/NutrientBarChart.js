import TopBar from '../components/TopBar'
import StackedBarChart from '../components/StackedBarChart'
import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, Modal, TouchableOpacity ,TouchableWithoutFeedback} from 'react-native';



const NutrientBarChart = () => {

  return (
    <View style={styles.container}>
      {/* <TopBar /> */}
      <View style={styles.chartContainer}>
        <View style={styles.kcalText}>
          <Text style={styles.text}>칼로리 섭취 통계(kcal)</Text>
        </View>
        <View style={styles.chart}>
          <StackedBarChart/>
        </View>
        <View style={styles.graphText}>
          <Text style={styles.graph}>그래프 설명 보기</Text>
        </View>
      </View>
    </View>

  );
}
    

export default NutrientBarChart

const styles = StyleSheet.create({})
