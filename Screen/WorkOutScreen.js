import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { FitnessItems } from '../Context';


const WorkOutScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    console.log(route.params);
    const { completed, setCompleted } = useContext(FitnessItems)
    return (
        <View style={{ flex: 1 }}>
            <Image style={{ height: 180, width: "100%" }} source={{ uri: route.params.image }} />
            <AntDesign
                onPress={() => navigation.goBack()}
                style={{ position: "absolute", top: 30, left: 20 }}
                name="back"
                size={24} color="white" />
            <ScrollView showsVerticalScrollIndicator={false}>
                {route.params.exercises.map((item, index) => (
                    <Pressable key={index} style={{ flexDirection: "row", margin: 10 , }}>
                        <Image style={{ height: 90, width: 100 }} source={{ uri: item.image }} />
                        <View style={{ marginLeft: 10, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold", width:170 }}>{item.name}</Text>
                            <Text style={{ fontSize: 16 }}>x{item.sets}</Text>
                        </View>
                        {completed.includes(item.name) ? (
                            <AntDesign style={{ marginLeft: 40 , justifyContent:"center",alignSelf:"center"}}  name="checkcircle" size={24} color="green" />
                        ) : (
                            null
                        )}
                    </Pressable>

                ))}
            </ScrollView>

            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20, backgroundColor: "white" }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Fit", {
                        exercises: route.params.exercises
                    })} style={{ backgroundColor: "black", padding: 12, width: 150, borderRadius: 8, marginTop:10, marginBottom:10 }}>
                    <Text style={{ color: "white", textAlign: "center" }}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WorkOutScreen

const styles = StyleSheet.create({})