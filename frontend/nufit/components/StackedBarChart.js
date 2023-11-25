import React, { useState, useEffect } from "react";
import { Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryStack } from "victory-native";
import axios from 'axios';
import { getTokenFromLocal } from "../utils/tokenUtils";
import { useDate } from '../context/DateContext';


const StackedBarChart = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tooltipData, setTooltipData] = useState(null);
  const [modalTextVisible, setModalTextVisible] = useState(false);
  const [data, setData] = useState([]);

  

  const { date } = useDate();
  const Date = date.toISOString().split('T')[0];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getTokenFromLocal(); 
        const date = Date;
        const response = await axios.get(`http://43.202.91.101:8080/api/meals/bar?date=${date}`,{headers: {Authorization : `Bearer ${token.accessToken}`}});
        console.log(response)
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
  }, [date]);

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
              <Text style={styles.modalText}>{tooltipData?.calorie}kcal</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <VictoryChart
        style={{ background: { fill: "#8655B7" }}}
        domainPadding={25}
        padding={{ top: 5, bottom: 50, left: 70, right: 40 }}
      >
        <VictoryAxis
          style={{
            tickLabels: { fill: "white", fontSize: 11 },
            axis: { stroke: "white" }
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            tickLabels: { fill: "white", fontSize: 11, padding: 3 },
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
          <Text style={{fontSize: 18, position: 'absolute', top: 0, right: 8}}>×</Text>
            <View>
              <Text style={styles.graphTextDetail}>해당 기간 동안의 일간{'\n'}칼로리 섭취량이 표시됩니다.</Text>
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
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 640,
    paddingTop: 8,
    paddingRight: 10,
    paddingBottom:5,
    width: 160,
    marginLeft: 200,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.62,
        elevation: 6,

  },
  graphTextDetail: {
    fontSize: 12,
    color: '#8655B7',
    fontWeight: 600,
  },
  graphtext: {
    textAlign: 'right',
    marginRight: 50,
    color: 'white',
    fontSize: 11
  }
})