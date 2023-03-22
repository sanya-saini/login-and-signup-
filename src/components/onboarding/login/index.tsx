import React, {useRef, useState} from "react";
import {View, Text, TextInput, ImageBackground, TouchableOpacity, SafeAreaView, Alert} from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";



const App = () => {

    const navigation = useNavigation(); // variable for hook
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);
    const [closeye, setCloseye] = useState('');

    const nameRef = useRef()

   
    const onClick = () => {
        navigation.navigate('signup');
    };
  
    const eyeIcon =()=> {
      if(eye){
        setEye(false)
        setCloseye('')
      }
      else{
        setEye(true)
        setCloseye('')
      }
    }

    const validation = () => {

      // email
      const emailregrex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if(email.length===0) {
        Alert.alert("email cannot be empty");
      }
      else if(!emailregrex.test(email)){
        Alert.alert("invalid email");
      }
  
      // password 
      const passregrex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
      if(password.length===0){
        Alert.alert("password cannot be empty");
       }
      else if(!passregrex.test(password)){
        Alert.alert("invalid password");
      }
      else if(password.length<=8){
        Alert.alert("password should be more than eight digits");
      }
      else if(password.length>=20){
       Alert.alert("password should be less than twenty digits")
      }
    }
    
  return(
      <View>

      <ImageBackground style={styles.img}
        source={require("../../../assests/image/bg.jpg")}>
      
      <View>
        <Text style={styles.text1}> Welcome back! </Text>
        <Text style={styles.text2}> Login to your account </Text>

        <TextInput style={styles.input} 
        value={email}
        onChangeText={setEmail}
        placeholder= 'Email'
        onSubmitEditing={()=>nameRef.current.focus()}
        blurOnSubmit={false} />

        <TextInput style={styles.input} 
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder= 'Password'
        ref={nameRef} />
      </View>

      <TouchableOpacity style={styles.btn1} onPress={validation}>
        <Text style={styles.txt1}>Sign In</Text>
      </TouchableOpacity>
      
        <Text style={styles.text3}> or </Text>

      <TouchableOpacity style={styles.btn2} onPress={onClick} >
        <Text style={styles.txt2}>Register</Text>
      </TouchableOpacity>
      
      </ImageBackground>
      
      </View>

  )
};

export default App;


