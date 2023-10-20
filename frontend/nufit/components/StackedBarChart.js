import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTooltip } from "victory-native";

const Data = [
  {
    date: '10.07',
    carbohydrate: 18,
    protein: 12,
    fat: 6
  },
  {
    date: "10.08",
    carbohydrate: 20,
    protein: 19,
    fat: 3
  },
  {
    date: "10.09",
    carbohydrate: 42,
    protein: 15,
    fat: 20
  },
  {
    date: "10.10",
    carbohydrate: 23,
    protein: 26,
    fat: 12
  },
  {
    date: "10.11",
    carbohydrate: 31,
    protein: 32,
    fat: 14
  },
  {
    date: "10.12",
    carbohydrate: 45,
    protein: 35,
    fat: 15
  },
  {
    date: "10.13",
    carbohydrate: 33,
    protein: 24,
    fat: 10
  }
];

const StackedBarChart = () => {
  return (
    <View style={styles.container}>
      <VictoryChart style={{axis:{stroke:'white'}, background: { fill: "#8655B7" }}} domainPadding={20}>
      <VictoryAxis
          style={{
          }}/>
        <VictoryStack>
        <VictoryBar 
            barWidth={5}
            style={{ data: { fill: "navy" } }}
            labels={({ datum }) => [`지방 ${datum.fat}g`,`단백질 ${datum.protein}g`,`순탄수 ${datum.carbohydrate}g`]}

            labelComponent={
              <VictoryTooltip
              center={{ x: 225, y: 30 }}
              flyoutWidth={150}
              flyoutHeight={150}
              pointerLength={0}
              cornerRadius={0}
                flyoutStyle={{
                  stroke: "#868C97",
                  strokeWidth: 2,
                  fill: "#FFFFFF"
                }}
                style={{
                  fill: "black",
                  fontSize: 15,
                  fontWeight: 500,
                  textAnchor: "middle",
                }}/>
              }
              data={Data} x="date" y="fat" />
          <VictoryBar 
            barWidth={5}
            style={{ data: { fill: "yellow" } }}
            labels={({ datum }) => [`지방 ${datum.fat}g`,`단백질 ${datum.protein}g`,`순탄수 ${datum.carbohydrate}g`]}
            labelComponent={
              <VictoryTooltip
              center={{ x: 225, y: 30 }}
              flyoutWidth={150}
              flyoutHeight={150}
              pointerLength={0}
              cornerRadius={0}
                flyoutStyle={{
                  stroke: "#868C97",
                  strokeWidth: 2,
                  fill: "#FFFFFF"
                }}
                style={{
                  fill: "black",
                  fontSize: 15,
                  fontWeight: 500,
                  textAnchor: "middle",
                }}/>
              }
              data={Data} x="date" y="protein" />
          <VictoryBar 
          
            barWidth={5}
            style={{ data: { fill: "#FFFFFF" } }}
            labels={({ datum }) => [`지방 ${datum.fat}g`,`단백질 ${datum.protein}g`,`순탄수 ${datum.carbohydrate}g`]}

            labelComponent={
              <VictoryTooltip
              center={{ x: 225, y: 30 }}
              flyoutWidth={150}
              flyoutHeight={150}
              pointerLength={0}
              cornerRadius={0}
                flyoutStyle={{
                  stroke: "#868C97",
                  strokeWidth: 2,
                  fill: "#FFFFFF"
                }}
                style={{
                  fill: "black",
                  fontSize: 15,
                  fontWeight: 500,
                  textAnchor: "middle",
                }}/>
              }
              data={Data} x="date" y="carbohydrate" />
        </VictoryStack>
      </VictoryChart>
    </View>
  );
};

export default StackedBarChart

const styles = StyleSheet.create({})