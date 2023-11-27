import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext } from 'react'
import FitnessData from '../Component/FitnessData'
import { Ionicons } from '@expo/vector-icons';
import { SliderBox } from 'react-native-image-slider-box';
import { FitnessItems } from '../Context';
const HomeScreen = () => {
  const{workout, calories, minutes}= useContext(FitnessItems)
  const images = [
    "https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg",
    "https://thumbs.dreamstime.com/b/woman-fitness-medicine-ball-exercises-silhouette-one-caucasian-exercising-studio-isolated-white-background-48847537.jpg",
    "https://img.freepik.com/free-photo/self-building-young-caucasian-bodybuilder-training-studio-background-neon-light-muscular-male-model-with-ball-concept-sport-bodybuilding-healthy-lifestyle-motion-action_155003-35391.jpg?w=360",
    "https://images.pexels.com/photos/4024914/pexels-photo-4024914.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3775164/pexels-photo-3775164.jpeg?auto=compress&cs=tinysrgb&w=600"
  ]
  return (
    <View style={{flex:1, backgroundColor:"grey",}} >
      
        <View style={{backgroundColor:"red", height:130,padding:30, width:"1"}}>
          <View style={{flexDirection:"row"}}>
        <Ionicons name="body-outline" size={24} color="white" />
        <Text style={{color:"#fff", fontSize:20, fontWeight:"bold", marginLeft:4}}>Home Workout</Text>
        </View>
        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginTop:10}} >
        <View style={{padding:5}}>
            <Text style={{color:"white", fontSize:16,textAlign:"center"}}>{workout}</Text>
            <Text style={{color:"white", fontSize:15}}>Workouts</Text>
        </View>
        <View style={{padding:5}}>
            <Text style={{color:"white", fontSize:16,textAlign:"center"}}>{calories}</Text>
            <Text style={{color:"white", fontSize:15}}>KCAL</Text>
        </View>
        <View style={{padding:5}}>
            <Text style={{color:"white", fontSize:16,textAlign:"center"}}>{minutes}</Text>
            <Text style={{color:"white", fontSize:15}}>MINS</Text>
        </View>
        </View>
        </View>

        <ScrollView>
        <SliderBox
            images={images}
            autoPlay
            circleLoop
            dotColor={"red"}
            inactiveDotColor="white"
            ImageComponentStyle={{ width: "90%", height:150, borderRadius:10, marginTop:10}}
            
          />     
      
        <FitnessData/>
        
      
    </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})