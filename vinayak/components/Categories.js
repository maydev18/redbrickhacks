import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const items = [
    {
      image: require("../assets/images/sweaters-men.png"),
      text: "Sweaters",
      text2:"Men",
  
    },
    {
      image: require("../assets/images/sweaters-men.png"),
      text: "Soft Drinks",
      text2:"Men",
    },
    {
      image: require("../assets/images/sweaters-men.png"),
      text: "Bakery Items",
      text2:"Men",
    },
    {
      image: require("../assets/images/sweaters-men.png"),
      text: "Fast Foods",
      text2:"Men",
    },
    {
      image: require("../assets/images/sweaters-men.png"),
      text: "Deals",
      text2:"Men",
    },
    {
      image: require("../assets/images/sweaters-men.png"),
      text: "Coffee & Tea",
      text2:"Men",
    },
    {
      image: require("../assets/images/sweaters-men.png"),
      text: "Desserts",
      text2:"Men",
    },
  ];
  
export default function Categories() {
  return (
    <View style={{
      marginTop:5,
      backgroundColor: "#fff",
      paddingVertical: 10,
      paddingLeft: 20,
    }}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item, index) =>
    <View key={index} style={{alignItems: "center", marginRight: 30}}>
      <Image 
      source={item.image}
      style={{
        width:50,
        height: 40,
        resizeMode: "contain", 
      }}
      
      />
      <Text style={{ fontSize: 13, fontWeight:'900'}} > {item.text} </Text>
      <Text style={{ fontSize: 10, fontWeight:'600'}} > {item.text2} </Text>


      
   </View>
    )}
   </ScrollView>
   </View>
  )
}