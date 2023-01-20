import react from "react";
import {SafeAreaView,Button, StyleSheet, Text, View, Dimensions,Image} from 'react-native';
import { Unity, useUnityContext } from "react-unity-webgl";

const SignInScreen =() =>{
  return (
   <View style={style.container}>
    <Image style={style.Image} 
     source={require("../../../assets/alert-logo.png")} />
 
  <View style={style.inputView}>
  <Text style={style.text}>Username</Text>
  <input  style={style.input}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
    
  </View>
  <View style={style.inputView}>
  <Text style={style.text}>Password</Text>
  <input  style={style.input}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
   
        <Text style={style.forgot_button}>Forgot Password?</Text> 
      
    
  </View>
  <View style={style.loginBtn}>
        <Text style={style.loginText}>LOGIN</Text> 
      </View>
   </View>
  );
};
const style=StyleSheet.create({
  container: {
    alignItems:"center",
    flex:1,
    fontSize:20,
    width:"100%",
maxWidth:"30%",
minWidth:400,
margin:"auto"
  },
  text:
  {
   marginLeft:20,
   fontSize:20,
  },
  inputView: {
    margin:"auto",
    marginleft:40

  //alignItems: "center",
},
input:{
  width:"100%",
maxWidth:"30%",
minWidth:400,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    borderRadius:10,
},
Image:{
width:150,
height:150,
},
forgot_button: {
  height: 30,

  marginLeft:20,
},
loginBtn: {
  marginLeft:20,
  width:"100%",
  maxWidth:"30%",
  minWidth:420,
  borderRadius: 10,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  margin:"auto",
  backgroundColor: "#FF1493",
},
});
export default SignInScreen