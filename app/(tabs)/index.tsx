import { Image, StyleSheet, Platform } from 'react-native';
import {Text, View} from 'react-native';//import { Text} from 'react-native-reanimated/lib/typescript/Animated';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import '../global.css'
import Navbar from '@/components/navbar';

const HomeScreen = () =>{
  return (
    
    <View className='bg-black'>
        <Image style = {styles.logo} source={ require('../../assets/images/1-removebg-preview.png')}></Image>
        
      <Text className='text-green-300 text-3xl'> WELCOME TO SKEPTIC ! </Text>
  </View>


  );
}
const styles = StyleSheet.create({
  header:{
    flex: 1,
    alignItems:'center'
  },
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:'#000000'
  },

  green:{
    color: '#338B4C',
    fontFamily: 'Irish Grover'
  },

  logo:{
    width: 200,
    height: 200,
    top: 0,

  }
})

export default HomeScreen;