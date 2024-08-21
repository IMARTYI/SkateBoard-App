import { Image, StyleSheet, Platform } from 'react-native';
import { Text, View } from 'react-native';//import { Text} from 'react-native-reanimated/lib/typescript/Animated';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import '../global.css'
import Navbar from '@/components/navbar';
import Form from '@/components/form';

const HomeScreen = () => {
  return (
    <View className=' flex bg-black   h-screen w-fit'>
        <Navbar></Navbar>
        <View className='flex flex-col text-center w-full '>
          <Text className='text-green-400 text-3xl font-body justify-center w-full text-center'> WELCOME TO SKEPTIC ! </Text>
          <View className='mt-20'>
            <Form>
            </Form>
          </View>
          
        </View>
    </View>


  );
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000000'
  },

  green: {
    color: '#338B4C',
    fontFamily: 'Irish Grover'
  },
  logo: {
    width: 200,
    height: 200,
    top: 0,

  }


 
  
})

export default HomeScreen;