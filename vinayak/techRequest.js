import React, {useState} from "react"

import{
    Text,
    View, 
    TextInput,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from "react-native"

const App =()=>{

    const material=[
        {
            id:1,
            name:"Waterproof Laminate",
            // desc: "Providing durably waterproof, windproof and breathable performance, the laminates use a 100% recycled BIONIC Polyester textile, made from 50% plastic waste collected from Bionic´s operations in coastal communities and 50% from other municipal collections.",
        },
        {
            id:2,
            name:"Polyster Yarn",
            // desc: "This has become a preferred replacement of cotton and cotton blended yarns as it has very high durability, high retention properties and low moisture content.",
        }
    ]

    const [selectRadio, setSelectRadio]=useState(1);

    return(
        <View>
            {/* <View>
                <Text>Sustainable Brand Name</Text>
            </View> */}
            <View>
                <Text>Request Form </Text>
            </View>
            <View>
                <Text>Select Material Required </Text>
            </View>
            <View>
                <View style={styles.main}>
                    {
                        material.map((item,index)=><TouchableOpacity
                        key={index}
                        onPress={()=>setSelectRadio(item.id)}>
                            <View style={styles.radioWrapper}>
                                <View style={styles.radio}>
                                    {selectRadio==item.id? <View style={styles.radioBg}></View>:null}
                                </View>
                                <Text style={styles.radioText}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                        )
                    }
                </View>
            </View>
            
        </View>
    );
}

const styles=StyleSheet.create({
    main: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },

    radioText: {
        fontSize: 30
    },

     radio: {
        height: 40,
        width: 40,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 20,
        margin: 10
     },

     radioBg: {
        backgroundColor: "black",
        height: 28,
        width: 28,
        borderRadius: 20,
        margin: 4
     },

     radioWrapper: {
        flexDirection: "row",
        alignItems: "center"
     }
})

export default App;