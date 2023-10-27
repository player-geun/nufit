import { StyleSheet, Text, View} from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import YoutubePlayer from "react-native-youtube-iframe";

const Temp = () => {

  const [playlist, setPlaylist] = useState('xaTu2eZ9lqw');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get( "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCbsHYIZwk9pZIMp53ciDjOw&maxResults=5&eventType=live&type=video&key="); 
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
      <Text style={styles.title}>에이라이프 라이브 마켓✨</Text>
      <Text style={styles.subTitle}>에이라이프는 맛과 건강은 물론,{'\n'}간편하고 즐거운 식생활 제공을 위해 노력합니다</Text>
      <View style={styles.videoInfo}>
        <Text style={styles.videoTitle}>[강마켓] 수제 5종 베이커리</Text>
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
    fontSize: 22,
    fontFamily: 'Pretendard-Bold',
    color: '#000',
    marginTop: 70
  },
  subTitle: {
    fontSize: 14,
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