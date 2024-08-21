import { Image, StyleSheet, Platform } from 'react-native';
import {Text, View} from 'react-native';//import { Text} from 'react-native-reanimated/lib/typescript/Animated';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import '../app/global.css'
import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';



const Navbar = () => {

    return(

    <View className=' flex  flex-row w-full bg-green-400  bg-opacity-90 h-32 justify-ce'>
        <Image className='justify-center items-center'  style= {styles.logo}source={ require('../assets/images/1-removebg-preview.png')}></Image>
    </View>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:" green,",
        display: "flex",
        justifyContent: "center",
    },
    logo: {
        width: 180,
        height: 190,
       
      }
})
export default Navbar