import React, {useState, useEffect} from "react"

import ExStyles from "./style"

import{
    View, 
    Text,
    TextInput,
    Button,
    FlatList,
    StyleSheet,
} from "react-native"

 



const App =()=>{

    const [fullname, setFullName]= useState("");
    const [address, setAddress]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [showpassword, setShowPassword]=useState(true);
    const [phone, setPhone]=useState("");
    const [fet, setFet]=useState(0);

    const fetching =()=>{
        fetch("https://sustech.onrender.com/auth/signup" , {
      method : "post",
      headers : {
        "Content-Type" : "application/json"
      },body:JSON.stringify({
        "email" : email,
        'phone' : phone,
        "name" : fullname,
        "type" : "3",
        "password" : password
      })
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Deleting a post failed!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
      })
      .catch(err => {
        console.log(err);
      });
    }

    
    

    return(
        <View>
            <View>
                <Text style={ExStyles.text}>
                    Full Name
                </Text>
                <TextInput 
                style={ExStyles.textinput}
                placeholder="Enter Full Name"
                onChangeText={(text)=>setFullName(text)}
                value={fullname}
                >
                </TextInput>
            </View>
            <View>
                <Text>
                    Phone
                </Text>
                <TextInput
                placeholder="Enter Phone "
                onChangeText={(text)=>setPhone(text)}
                value={phone}
                >
                    
                </TextInput>
            </View>
            <View>
                <Text>
                    Address 
                </Text>
                <TextInput
                placeholder="Enter Address "
                onChangeText={()=>setAddress()}
                value={address}
                >
                    
                </TextInput>
            </View>
            <View>
                <Text>
                    Email
                </Text>
                <TextInput
                placeholder="Enter Email"
                onChangeText={(text)=>setEmail(text)}
                value={email}
                >
                    
                </TextInput>
            </View>
            <View>
                <Text>
                    Password 
                </Text>
                <TextInput 
                placeholder="Enter Password"
                onChangeText={(text)=>setPassword(text)}
                value={password}
                secureTextEntry={showpassword}
                >
                    
                </TextInput>
            </View>
            <Button title="show password" onPress={()=>setShowPassword(false)}></Button>
            <View>
                <Button title="SignUp" onPress={fetching}></Button>
            </View>
            
        </View>

    );
}

export default App;

