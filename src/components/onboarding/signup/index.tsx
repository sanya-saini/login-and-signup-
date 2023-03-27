import React, {useState, useRef} from "react";
import {View, Text, TextInput, Image, ImageBackground, TouchableOpacity, Alert} from "react-native";
import { styles } from "./style";


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [zip, setZip] = useState('');
  const [opacity, setOpacity] = useState(0.5);


  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmpasswordRef = useRef()

  const newopacity =()=>{
    const passregrex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const emailregrex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    (passregrex&&emailregrex)? setOpacity(1):setOpacity(0.5);
  };

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
    else
    Alert.alert("Register Successful.")
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
        onChangeText={setName}
        onSubmitEditing={()=>nameRef.current.focus()} 
        blurOnSubmit={false} />

        <TextInput style={styles.input} 
        placeholder= 'Email'
        value={email}
        onChangeText={setEmail}
        ref={nameRef}
        onSubmitEditing={()=>emailRef.current.focus()}
        blurOnSubmit={false} />

        <TextInput style={styles.input} 
        placeholder= 'Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true} 
        ref={emailRef}
        onSubmitEditing={()=>passwordRef.current.focus()}
        blurOnSubmit={false} />

        <TextInput style={styles.input} 
        onChangeText={setConfirmpassword}
        secureTextEntry={true}
        placeholder= 'Confirm Password'
        ref={passwordRef}
        onSubmitEditing={()=>confirmpasswordRef.current.focus()}
        blurOnSubmit={false} />

        <TextInput style={styles.input} 
        placeholder= 'Zip Code'
        onChangeText={setZip} 
        ref={confirmpasswordRef}
        onEndEditing={newopacity} />
       
      </View>
      <TouchableOpacity style={[styles.btn1,{opacity:opacity}]} onPress={validation} >
        <Text style={styles.txt1}>Sign Up</Text>
      </TouchableOpacity>
    
      
      </ImageBackground>
      
      </View>

  );
};

export default Signup;


