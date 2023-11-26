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
          <Text style={styles.text}>일간 칼로리 섭취</Text>
        </View>
        <View style={styles.chart}>
          <StackedBarChart/>
        </View>
        
      </View>
    </View>

  );
}
    

export default NutrientBarChart

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  chartContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#8655B7',
    paddingHorizontal: 20,
    paddingBottom: 5,
    borderRadius: 15,
    marginHorizontal: 20,
    // marginVertical: 50,
    marginBottom: 80,
    shadowColor: '#19C1AD',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.62,
    elevation: 6,
    width:355
  },
  kcalText: {
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    color:'white',
  },
  graphText:{
    marginBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    justifyContent: 'flex-start'
  },
  graph: {
    fontSize: 12,
    color: 'white',
    textAlign: 'right',
    width :300
  },
  button: {
    borderRadius: 100,
    borderColor: 'white',
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white'
  },
  tooltipContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tooltip: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
})