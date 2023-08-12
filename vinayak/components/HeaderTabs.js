import React, { useState } from "react";
import {View, Text, SafeAreaView, TouchableOpacity} from "react-native";

export default function HeaderTab(){
    const [activeTab , setActiveTab]= useState("Order");
    return(
        <View style={{ flexDirection:"row", alignSelf: "center", paddingTop: 20,}}>
            <HeaderButton 
            text="Order" 
            btnColor="black"
             textColor="white" 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
           
            />

            <HeaderButton 
            text="Sell" 
            btnColor="white"
             textColor="black"
            activeTab={activeTab} 
            setActiveTab={setActiveTab}/>
        </View>
    )
}


const HeaderButton= (props) => (
    
        <TouchableOpacity style={ {
            backgroundColor: props.activeTab === props.text? 'black': 'white',
            paddingVertical: 6, 
            paddingHorizontal: 16,
            borderRadius: 30,
            
            }}
            onPress={()=> props.setActiveTab(props.text)}

        >
            <Text style={{ 
                color: props.activeTab === props.text? 'white': 'black',
                fontSize: 15, 
                fontWeight: "900"}}>{props.text}</Text>
        </TouchableOpacity>
    
);

const Headertry = () => <Text></Text>;