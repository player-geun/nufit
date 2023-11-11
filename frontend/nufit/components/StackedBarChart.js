import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryStack } from "victory-native";

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
  const [modalVisible, setModalVisible] = useState(false);
  const [tooltipData, setTooltipData] = useState(null);
  const [modalTextVisible, setModalTextVisible] = useState(false);
  // modalTextVisible
  const handlePress = (datum) => {
    setTooltipData(datum);
    setModalVisible(false);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Modal
        
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.modal}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>지방: {tooltipData?.fat}g</Text>
              <Text style={styles.modalText}>단백질: {tooltipData?.protein}g</Text>
              <Text style={styles.modalText}>순탄수: {tooltipData?.carbohydrate}g</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <VictoryChart
        style={{axis:{stroke:'white'}, background: { fill: "#8655B7" }}}
        domainPadding={20}
      >
        <VictoryAxis
          style={{
            tickLabels: { fill: "white", fontSize: '11' },
            axis: { stroke: "white" }  
          }}
        />
        <VictoryStack>
          <VictoryBar 
            data={Data} x="date" y="fat"
            barWidth={5}
            style={{ data: { fill: "navy" } }}
            events={[{
              target: "data",
              eventHandlers: {
                onPressIn: () => {
                  return [
                    {
                      target: "data",
                      mutation: (props) => {
                        handlePress(props.datum);
                        return null;
                      }
                    }
                  ];
                }
              }
            }]}
          />
        <VictoryBar 
            data={Data} x="date" y="protein" 
            barWidth={5}
            style={{ data: { fill: "#D5F12B" } }}
            events={[{
              target: "data",
              eventHandlers: {
                onPressIn: () => {
                  return [
                    {
                      target: "data",
                      mutation: (props) => {
                        handlePress(props.datum);
                        return null;
                      }
                    }
                  ];
                }
              }
            }]}
          />
        <VictoryBar 
            data={Data} x="date" y="carbohydrate"
            barWidth={5}
            style={{ data: { fill: "#FFFFFF" } }}
            events={[{
              target: "data",
              eventHandlers: {
                onPressIn: () => {
                  return [
                    {
                      target: "data",
                      mutation: (props) => {
                        handlePress(props.datum);
                        return null;
                      }
                    }
                  ];
                }
              }
            }]}
          />

          
        </VictoryStack>
      </VictoryChart>
      <Modal
        
        animationType="fade"
        transparent={true}
        visible={modalTextVisible}
        onRequestClose={() => {
          setModalTextVisible(!modalTextVisible);
        }}
      >
        <TouchableWithoutFeedback  style={styles.graphtext} onPress={() => setModalTextVisible(!modalTextVisible)}>
          <View style={styles.modalTextContainer}>
            <View >
              <Text style={styles.graphTextDetail}>일간 탄단지 섭취량이 표시됩니다.</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <TouchableWithoutFeedback onPress={() => setModalTextVisible(!modalTextVisible)}>
        <Text style={styles.graphtext}>그래프 설명 보기</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default StackedBarChart

const styles = StyleSheet.create({
  modal: {
    flex:0.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 350,
    paddingTop: 20,
    paddingBottom: 20,
    width: 100,
    marginLeft: 180,
    backgroundColor: 'white',
    borderRadius: 10
  },
  modalTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 650,
    paddingTop: 5,
    paddingBottom:5,
    width: 180,
    marginLeft: 180,
    backgroundColor: 'white',
    borderRadius: 5

  },
  graphTextDetail: {
    fontSize: 12
  },
  graphtext: {
    textAlign: 'right',
    marginRight: 50,
    color: 'white',
    fontSize: 11
  }
})