import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import FlatCard from '../Data/FlatCard'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const FitnessData = () => {
  const navigation = useNavigation();
  return (
    <View>
      {FlatCard.map((item, key)=>(
        <Pressable
        onPress={()=> navigation.navigate("Work",{
          image: item.image,
          name: item.name,
          id: item.id,
          exercises:item.excersises

        })} key={key} style={{ alignItems: "center", justifyContent: "center", margin: 10 }}>
            <Image
            style={{ width: "95%", height: 140, borderRadius: 7 }}
            source={{ uri: item.image }}
          />
                    <Text
            style={{
              position: "absolute",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              left: 20,
              top: 20,
            }}
          >
            {item.name}
          </Text>
          <MaterialCommunityIcons
            style={{ position: "absolute", color: "white", bottom: 15,left:20 }}
            name="lightning-bolt"
            size={24}
            color="black"
          />


        </Pressable>
      )

      )}
    </View>
  )
}

export default FitnessData