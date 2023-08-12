import { View, Text , Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
    {
      name: "Let Loose",
      image_url:
        "https://media.licdn.com/dms/image/D4D03AQG7w-ow8sR9Bg/profile-displayphoto-shrink_800_800/0/1680614084473?e=2147483647&v=beta&t=3pUBIjQwEteuQ6PGaOzk5_YgOWO0fnSL6L5DVNLXnFU",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 400,
    },
    {
      name: "Tech Fashion",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 300,
    },
    {
      name: "Summer Special ",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];
  

export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={1}
    style={{
        marginBottom:30,
    }}>
    {props.restaurantData.map((restaurant, index)=>(
     <View style={{
        margin:10,
        padding:15, 
        backgroundColor:"white",    
    }}>
        <RestaurantImage image={restaurant.image_url}/>
        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
    </View>
    ))}
    </TouchableOpacity>
   
  )
}





const RestaurantImage= (props) =>(
    <>
    <Image source={{
     uri: props.image
        }}
    style={{
        width:"100%",
        height: 180,

   }}
    />
    <TouchableOpacity style={{ position:"absolute", right: 20 , top:20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color='#ffff'></MaterialCommunityIcons>
    </TouchableOpacity>
    </>
)

const RestaurantInfo= (props) =>(
    <View style={{
        flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:"10"
    }}>
        <View>
        <Text  style={{ fontSize: 15, fontWeight:"bold"}}>
           {props.name}
        </Text>
        <Text styel={{ fontSize: 13, color:"gray"}}> REDEFINE YOUR STYLE.</Text>
        </View>

        <View style={{ 
            backgroundColor: "#eee",
            height: 30,
            width: 30 ,
            alignItems:"center" , 
            justifyContent: "center",
            borderRadius: 15,}}>
        <Text >
           {props.rating }
        </Text>
        </View>
       
    </View>
)  