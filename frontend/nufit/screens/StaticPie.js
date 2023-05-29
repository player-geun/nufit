import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ProgressCircle from '../components/ProgressCircle';
import ProgressBar from '../components/ProgressBar';
import TopBar from '../components/TopBar';

const StaticPie = () => {
    const carb = 30;
    const protein = 50;
    const fat = 5;

  return (
    
    <View style={styles.container}>
        <TopBar/>
        <View style={styles.container4}>
            <View style={styles.container2}>
                <ProgressCircle />
            </View>
            <View style={styles.container3}>
                <Text>순탄수 {carb}%</Text>
                <Text>단백질 {protein}%</Text>
                <Text>지방 {fat}%</Text>
            </View>
        </View>
        <View style={styles.container5}>
            <ProgressBar label="단백질" goal={110} progress={12} />
            <ProgressBar label="탄수화물" goal={200} progress={50} />
            <ProgressBar label="지방" goal={40} progress={20} />
        </View>
        <View style={styles.container6}>
            <Text>1000kcal 더 먹을 수 있어요</Text>
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
    },
    container3: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1.2, 
    },
    container4: {
        
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1, 
        flexDirection: 'row',
       
    },
    container5: {
        width: 400,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
       
    },
    container6: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.5, 
    },
})

export default StaticPie;
