import { StyleSheet, Text, View} from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import YoutubePlayer from "react-native-youtube-iframe";
import Constants from 'expo-constants';



const Temp = () => {

  const apiKey = Constants.manifest.extra.apiKey;

  const [playlist, setPlaylist] = useState('xaTu2eZ9lqw');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get( `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCbsHYIZwk9pZIMp53ciDjOw&maxResults=5&eventType=live&type=video&key=${apiKey}`); 
        console.log(response.data.items[2].id.videoId); 
        setPlaylist(response.data.items[2].id.videoId)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

  }, [])


  return (
    <View style={styles.container}>
      <Text style={styles.title}>뉴핏 라이브 마켓✨</Text>
      <Text style={styles.subTitle}>건강한 식습관을 위한 완벽한 선택{'\n'}라이브 방송 동안만 제공되는 특별 할인도 놓치지 마세요</Text>
      <View style={styles.videoInfo}>
        <Text style={styles.videoTitle}>[NUFIT] 수제 5종 베이커리</Text>
        <Text style={styles.live}>LIVE</Text>
      </View>
      <YoutubePlayer
        height={300}
        videoId={playlist}
      />
      
    </View>
  )
}

export default Temp

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex:1,
    padding: 30
  },
  title: {
    fontSize: 23,
    fontFamily: 'Pretendard-Bold',
    color: '#000',
    marginTop: 70
  },
  subTitle: {
    fontSize: 15,
    fontFamily: 'Pretendard-Regular',
    color: '#9c9c9c',
    marginTop: 10,
    paddingBottom: 30,
    borderBottomColor: '#ecebeb',
    borderBottomWidth: 1,
  },
  videoInfo : {
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  videoTitle: {
    fontSize: 18,
    fontFamily: 'Pretendard-Bold',
    color: '#000',
  },
  live: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#FF0606',
    color: '#fff',
    borderRadius: 15,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Pretendard-Bold',
  }
})