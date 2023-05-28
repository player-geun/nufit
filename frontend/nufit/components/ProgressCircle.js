import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { VictoryPie } from 'victory-native';

const ProgressCircle = () => {
  const goal = 2000; // 목표 섭취량
  const progress = 1000; // 현재까지 섭취한 칼로리

  const progressPercentage = (progress / goal) * 100;
  const data = [
    { x: 'Progress', y: progressPercentage },
    { x: 'Remaining', y: 100 - progressPercentage },
  ];

  return (
    <View style={styles.container}>
      <VictoryPie
        data={data}
        colorScale={['#ff0000', '#dddddd']}
        innerRadius={90}
        labels={() => null}
        width={300} height={300}
        style={styles.progressCircle}
      />
      <Text style={styles.progressText}>
        <Text style={styles.caloriesText}>{`${progress}kcal`}</Text>
        {'\n'}
        <Text style={styles.subtitleText}>먹었어요</Text>
      </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,  
  },
  progressCircle: {
    labels: { fontSize: 0 }, 
  },
  progressText: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 24,
  },
  caloriesText: {
    fontSize: 20,
  },
  subtitleText: {
    fontSize: 15,
  },
  
});

export default ProgressCircle;
