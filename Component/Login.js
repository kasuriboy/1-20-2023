import react from "react";
import { View, styleSheet } from "react-native";
const Login= props =>{
  return(
    <ScrollView style={{backgroundColor:'#fff'}}>
     <view style={style.container}>
     <image
     source={require('../assets/logo.png')}
resizeMode="center"
style={style.image}/>

   <text style={style.textTitle}>Username</text>
   <text style={style.textTitle}>Password</text>
    </view>
    </ScrollView>


  );
};
const style =StyleSheet.create({

});
export default Login