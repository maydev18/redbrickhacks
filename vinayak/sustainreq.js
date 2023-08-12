import React, {useState} from "react"
 
import{
    View,
    Text,
    TextInput,
    FlatList,
    Button,
    Image,
    StyleSheet,
    TouchableHighlight
} from "react-native"

const App =()=>{

    const techreq=[
        {
            id:1,
            name: require("./assets/images/me_kurta.jpg"),
            mat: "a1",
            qty: 1,
            cd: "1"
        },
        {
            id:2,
            name: require("./assets/images/me_light3.jpg"),
            mat: "b1",
            qty: 1,
            cd: "1"
        },
        {
            id:3,
            name: require("./assets/images/mun_pic.jpg"),
            mat: "c1",
            qty: 1,
            cd: "1"
        },
    ]

    const img=require("./assets/images/mun_pic.jpg");

    return(
        
        <View>
            <View style={styles.heading}>
                <Text style={styles.headtext}>Tech Requests</Text>
            </View>
            <View>
            <FlatList
            data={techreq}
            renderItem={({item})=><View style={styles.box}>
                <Image style={styles.image} source={item.name}/>
                <View style={styles.mix}>
                    <Text style={styles.item}>{item.mat}</Text>
                    <View style={styles.mix2}>
                        <Text style={styles.item}>{item.qty}</Text>
                        <Text style={styles.item}>{item.cd}</Text>
                    </View> 
                </View>
                <View style={styles.mix3}>
                <TouchableHighlight onPress={()=>{
                    console.log("hello")
                }} style={styles.item}>
                    <Text>Accpet</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=>{
                    console.log("hello")
                }} style={styles.item}>
                    <Text>Reject</Text>
                </TouchableHighlight>
                </View>
                </View>} 
            />
            </View>
        </View>

            // <Image style={styles.image} source={img}/>          
        
    );
}

const styles=StyleSheet.create({
    item: {
        fontSize: 24,
        color: "orange",
        flex: 1,
        alignItems: "center",
        padding: 0.2,
        margin: 5,
        textAlign: "center",
        backgroundColor: "#e9e9e9",
        borderRadius: 2,

    },

    box:{
        flex: 1,
        flexDirection: "row",
        // borderWidth: 2,
        // borderColor: "orange",
        marginBottom: 10,
        border: 30,
        borderRadius: 3,
        margin: 30
    },

    image: {
        height: 100,
        width: 100,
        flex: 1, 
        borderRadius: 10,
        resizeMode:"contain",

    },

    heading:{
        fontSize: 60,
        color: "black",
        padding: 10,
        margin: 5,
        borderRadius: 3,
        alignItems: "center",
        marginBottom: 50,
        marginTop: 50,
        
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft:20,



    },

    headtext:{
        fontSize: 13,
        color: "black",
        fontWeight:'600',
    },

    mix:{
        flexDirection: "column",
        flex: 2,
    },

    mix2: {
        flexDirection: "row",
        flex: 2
    },
    mix3:{
        flexDirection: "column",
        flex: 1,
    },
})

export default App;