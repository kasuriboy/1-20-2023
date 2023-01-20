import { Text, View ,StyleSheet} from 'react-native'
import React from 'react'


const Home = ()=>{

    return (
      <View>
      
        <Text style={styles.home}>Welcome to Home Page 👍 👍   </Text>
      </View>
    )
  
};
const styles=StyleSheet.create({
  home:{
    fontSize:17,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"centert",
    marginTop:200,
    padding:7,
    color:"#7d7d7d",
    
    
  }
})


export default Home;