import React, {useState} from "react";
import { TouchableOpacity, Text, Alert } from "react-native";
import { styles } from "./style";

interface Props {

    name : string,

}

const Button=({name} : Props)=>{
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
 
    const validation = () => {
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

        <TouchableOpacity style={styles.btn} onPress={validation}>
        <Text style={styles.txt}> {name} </Text>
      </TouchableOpacity>

    );
};
export default Button;
