import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ label, goal, progress }) => {
  const fillPercentage = (progress / goal) * 100;
  const progressBarWidth = 100; // 프로그레스바 전체 너비
  const fillWidth = (progressBarWidth * fillPercentage) / 100;
  const remainingWidth = progressBarWidth - fillWidth;
  const progressText = `${progress}/${goal}g`;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.progressBar}>
        <View style={[styles.fill, { width: `${fillWidth}%` }]} />
        <View style={[styles.remaining, { width: `${remainingWidth}%` }]} />
      </View>
      <Text style={styles.progressText}>{progressText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  progressBar: {
    width: 80,
    height: 8,
    flexDirection: 'row',
  },
  fill: {
    backgroundColor: '#ff0000',
    height: '100%',
  },
  remaining: {
    backgroundColor: '#dddddd',
    height: '100%',
  },
  progressText: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default ProgressBar;
