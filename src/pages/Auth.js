import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import AuthImg from '../../assets/images-private/auth.png'

function Auth({ navigation }) {

 const handleLogin = ()=>{
  navigation.navigate('Login')
 }

 const handleRegister = ()=>{
  navigation.navigate('Register')
 }


  return (
    <View style={{alignItems: "center"}}>
      <Image source={AuthImg} style={{width: 228, height: 258, marginTop: 89}} />
        <Text style={{fontSize: 35, fontWeight: 800, marginTop: 19}}>Ways 
            <Text style={{color: "#B82020"}}>To</Text>
            <Text style={{color: "#FF5555"}}>Do</Text>
        </Text>
        <Text style={{marginTop: 23}}>Write your activity and finish your activity.</Text>
        <Text>Fast, Simple and Easy to Use</Text>
        
        <View style={{marginTop: 85}}>
          <TouchableOpacity onPress={handleLogin} style={{backgroundColor: '#FF5555', height: 40, width: 310, borderRadius: 5,justifyContent: 'center'}}>
            <Text style={{color:'white', fontWeight: 'bold', borderRadius: 5, textAlign: 'center', }}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleRegister} style={{backgroundColor: '#0000004F', marginTop: 11, height: 40, width: 310, borderRadius: 5, justifyContent: 'center'}}>
            <Text style={{color: 'white', fontWeight: 'bold', borderRadius: 5, textAlign: 'center', }}>Register</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Auth
