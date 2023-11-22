import React, { useState, useEffect } from "react";
import { Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryStack } from "victory-native";
import axios from 'axios';

// const Data = [

//   { date: '10.07', calorie: 300 },
//   { date: "10.08", calorie: 350 },
//   { date: "10.09", calorie: 400 },
//   { date: '10.10', calorie: 300 },
//   { date: "10.11", calorie: 350 },
//   { date: "10.12", calorie: 400 },
//   { date: "10.13", calorie: 400 }
  
// ];

const StackedBarChart = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tooltipData, setTooltipData] = useState(null);
  const [modalTextVisible, setModalTextVisible] = useState(false);
  const [data, setData] = useState([]);

  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1; 
    const day = date.getDate();
  
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;
  
    return `${year}-${formattedMonth}-${formattedDay}`;
  };

  const currentDate = getCurrentDate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const date = currentDate;
        const response = await axios.get(`http://ec2-52-79-235-252.ap-northeast-2.compute.amazonaws.com:8080/api/meals/1/bar?date=${date}`);
        const serverData = response.data.calories;
        const transformedData = Object.keys(serverData)
          .map(date => {
            const formattedDate = date.substring(5).replace('-', '.');
            return { date: formattedDate, calorie: serverData[date] };
          })
          .reverse();

        setData(transformedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

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
              <Text style={styles.modalText}>칼로리: {tooltipData?.calorie}kcal</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <VictoryChart
        style={{ background: { fill: "#8655B7" }}}
        domainPadding={20}
      >
        <VictoryAxis
          style={{
            tickLabels: { fill: "white", fontSize: 11 },
            axis: { stroke: "white" }  
          }}
        />
        <VictoryBar 
          data={data} x="date" y="calorie"
          barWidth={6}
          style={{ data: { fill: "white" } }} 
          events={[{
            target: "data",
            eventHandlers: {
              onPressIn: () => {
                return [{
                  target: "data",
                  mutation: (props) => {
                    handlePress(props.datum);
                    return null;
                  }
                }];
              }
            }
          }]}
        />
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
              <Text style={styles.graphTextDetail}>일간 칼로리 섭취량이 표시됩니다.</Text>
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
    fontSize: 12,
    color: '#8655B7',
    fontWeight: 600
  },
  graphtext: {
    textAlign: 'right',
    marginRight: 50,
    color: 'white',
    fontSize: 11
  }
})