import React, {useState} from "react";
import {View, Text, TextInput, ImageBackground, TouchableOpacity, Alert} from "react-native";
import { styles } from "./style";


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [zip, setZip] = useState('');

  const validation = () => {

    //name
    const nameregex = /^[a-zA-Z ]{2,30}$/
    if(name.length===0) {
      Alert.alert("Name cannot be empty.");
      return null
    }
    else if(!nameregex.test(name)){
      Alert.alert("Invalid Name.");
      return null
    }


    // email
    const emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(email.length===0) {
      Alert.alert("Email cannot be empty.");
      return null
    }
    else if(!emailregex.test(email)){
      Alert.alert("Invalid Email.");
      return null
    }

    // password 
    const passregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    if(password.length===0){
      Alert.alert("Password cannot be empty.");
      return null
     }
    else if(!passregex.test(password)){
      Alert.alert("Invalid Password.");
      return null
    }
    else if(password.length<=8){
      Alert.alert("Password should be more than eight digits.");
      return null
    }
    else if(password.length>=20){
     Alert.alert("Password should be less than twenty digits.")
     return null
    }

    // confirm password
    if (password != confirmpassword) {
      Alert.alert("Password and Confirm Password does not match.");
      return null
    }

    // zip code
    const zipregex = /^\d{6}$/
    if(zip.length===0){
      Alert.alert("Zip Code cannot be empty.");
      return null
    }
    else if(!zipregex.test(zip)){
      Alert.alert("Invalid Zip Code.");
      return null
    }
  }

  return(
      <View>
      <ImageBackground style={styles.img}
        source={require("../../../assests/image/bg.jpg")}>
      
      <View>
        <Text style={styles.text1}> Register </Text>
        <Text style={styles.text2}> Create your new account </Text>

        <TextInput style={styles.input} 
        placeholder= 'Name'
        onChangeText={setName} />

        <TextInput style={styles.input} 
        placeholder= 'Email'
        value={email}
        onChangeText={setEmail} />

        <TextInput style={styles.input} 
        placeholder= 'Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true} />

        <TextInput style={styles.input} 
        value={password}
        onChangeText={setConfirmpassword}
        secureTextEntry={true}
        placeholder= 'Confirm Password' />

        <TextInput style={styles.input} 
        placeholder= 'Zip Code'
        onChangeText={setZip} />
       
      </View>
      <TouchableOpacity style={styles.btn1} onPress={validation} >
        <Text style={styles.txt1}> Sign Up</Text>
      </TouchableOpacity>
    
      
      </ImageBackground>
      
      </View>

  );
};

export default Signup;


