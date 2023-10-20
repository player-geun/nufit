import React, { useState } from 'react';
import { Button, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import NutrientBarChart from './NutrientBarChart';
import StaticPie from './StaticPie';
import TopBar from '../components/TopBar';

const StatisticsRecord = () => {
    const [showStats, setShowStats] = useState(false); 
  return (
    <View style={styles.container}>
        <TopBar/>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => setShowStats(false)}
                >
                    <Text style={styles.buttonText}>기록</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setShowStats(true)}
                >
                    <Text style={styles.buttonText}>통계</Text>
                </TouchableOpacity>
            
        </View>
        <View style={styles.chart}>
            {showStats ? <NutrientBarChart /> : <StaticPie />}
        </View>
    </View>
  )
}

export default StatisticsRecord

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#FAFAFA'
    },
    buttonsContainer: {
        flex:0.1,
        flexDirection:'row',
        justifyContent: 'flex-center',
        alignItems: 'center',
        // backgroundColor: 'blue',
        marginLeft: 50,
        width: '100%'
    },
    chart: {
        flex: 0.9
    },
    button: {
        backgroundColor:'#FAFAFA',
        // width: '50%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'flex-start',
        justifyContent:'flex-start',
        marginRight: 10
    },
    buttonText: {
        fontWeight: '500',
        fontSize: 16
    }
})