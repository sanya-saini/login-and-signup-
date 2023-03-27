import React, {useRef, useState} from "react";
import {View, Text, TextInput, Image, ImageBackground, TouchableOpacity, SafeAreaView, Alert} from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { bg, ceye, oeye } from "../../../assests/image/images";



const App = () => {

    const navigation = useNavigation(); // variable for hook
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);
    const [closeeye, setCloseeye] = useState('https://cdn1.iconfinder.com/data/icons/gradak-interface/32/interface-46-512.png'); //close eye
    const [opacity, setOpacity] = useState(0.5);
     

    const nameRef = useRef()

   
    const onClick = () => {
        navigation.navigate('signup');
    };
  
    const eyeIcon =()=> {
      if(isPasswordSecure){
        setIsPasswordSecure(false)
        setCloseeye('https://cdn1.iconfinder.com/data/icons/gradak-interface/32/interface-44-512.png') //open eye
      }
      else{
        setIsPasswordSecure(true)
        setCloseeye('https://cdn1.iconfinder.com/data/icons/gradak-interface/32/interface-46-512.png') // close eye
      }
    }

    const newopacity =()=>{
      const passregrex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      const emailregrex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      (passregrex&&emailregrex)? setOpacity(1):setOpacity(0.5);
    };

    const validation = () => {

      // email
      const emailregrex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if(email.length===0) {
        Alert.alert("Email cannot be empty.");
        return null
      }
      else if(!emailregrex.test(email)){
        Alert.alert("Invalid email.");
        return null
      }
  
      // password 
      const passregrex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
      if(password.length===0){
        Alert.alert("Password cannot be empty.");
        return null
       }
      else if(!passregrex.test(password)){
        Alert.alert("Invalid password.");
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
      else 
      Alert.alert("Signin Successful.")
    }

  return(
      <View>

      <ImageBackground style={styles.img}
        source={bg}>
      
      <View>
        <Text style={styles.text1}> Welcome back! </Text>
        <Text style={styles.text2}> Login to your account </Text>

        <TextInput style={styles.input1} 
        autoFocus={true} // autoFocus
        value={email}
        onChangeText={setEmail}
        placeholder= 'Email'
        onSubmitEditing={()=>nameRef.current.focus()}
        blurOnSubmit={false} />

        <View style= {[styles.input2, {flexDirection:'row', alignItems:'center'}]}>
        <TextInput 
        
        onEndEditing={newopacity}
        value={password}
        onChangeText={(value)=> {setPassword(value)}}
        secureTextEntry={isPasswordSecure}
        placeholder= 'Password'
        ref={nameRef} />

      <TouchableOpacity onPress={eyeIcon}>
        <Image
          style={{width: 20 , height: 20, margin: 240}} source={isPasswordSecure?ceye:oeye}/>
      </TouchableOpacity>
      </View>

      </View>

      <TouchableOpacity style={[styles.btn1,{opacity:opacity}]} onPress={validation}>
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


