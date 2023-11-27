import { StyleSheet, Text, View, Image, SafeAreaView, Pressable, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { FitnessItems} from "../Context";

const FitScreen = () => {
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const route = useRoute();
    const exercises = route.params.exercises;
    const current = exercises[index];
    //console.log(current);

    const {
        completed,
        setCompleted,
        minutes,
        setMinutes,
        calories,
        setCalories,
        setWorkout,
        workout,
      } = useContext(FitnessItems);
      console.log(completed, "completed excersise");
   console.log(completed)
    return (
        <View style={{ marginTop: 20, backgroundColor: "white" }}>
            <Image style={{ height: 300, width: "100%" }} source={{ uri: current.image }} />
            <View style={{ margin: 10, marginTop: 40 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>{current.name}</Text>
                <Text style={{ fontSize: 15, fontWeight: "200", textAlign: "center", color: "grey", marginTop: 10 }}>x{current.sets}</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                {index+1>=exercises.length ? (
                    <TouchableOpacity
                    onPress={
                        () => {
                            navigation.navigate("Home");
                            
                        }} style={{ backgroundColor: "black", padding: 12, width: 150, borderRadius: 15 }} activeOpacity={0.5}>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>Done</Text>
                </TouchableOpacity>

                ):(
                <TouchableOpacity
                    onPress={
                        () => {
                            navigation.navigate("Break");
                            setCompleted([...completed, current.name]);
            setWorkout(workout + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + 6.3);
                            setTimeout(() => {
                                setIndex(index + 1)
                            }, 2000); 
                        }} style={{ backgroundColor: "black", padding: 12, width: 150, borderRadius: 15 }} activeOpacity={0.5}>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>Done</Text>
                </TouchableOpacity>
)}
              

            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between", margin:10}}>
            <View style={{ justifyContent: "center", marginTop: 10 }}>
                {index+1>= exercises.length ?(
                     <TouchableOpacity
                    onPress={()=>navigation.navigate("Home")}
                     style={{ backgroundColor: "red", padding: 12, width: 150, borderRadius: 15 }} activeOpacity={0.5}>
                     <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>Prev</Text>
                 </TouchableOpacity>
                ):(
                    <TouchableOpacity
                   onPress={()=>{
                    navigation.navigate("Break");
                    setTimeout(() => {
                        setIndex(index + 1)
                    }, 2000); 
                   }}
                    style={{ backgroundColor: "red", padding: 12, width: 150, borderRadius: 15 }} activeOpacity={0.5}>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>Skip</Text>
                </TouchableOpacity>
                )}
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                <TouchableOpacity
                disabled={index===0}
                 onPress={
                    ()=>{
                        setTimeout(() => {
                            setIndex(index-1);
                        }, 1000);
                    }
                 }
                    style={{ backgroundColor: "yellow", padding: 12, width: 150, borderRadius: 15 }} activeOpacity={0.5}>
                    <Text style={{ color: "black", textAlign: "center", fontSize: 16 }}>Prev</Text>
                </TouchableOpacity>
            </View>
            
            </View>
        </View>
    )
}

export default FitScreen

const styles = StyleSheet.create({})