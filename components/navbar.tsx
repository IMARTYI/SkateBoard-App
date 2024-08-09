import { Image, StyleSheet, Platform } from 'react-native';
import {Text, View} from 'react-native';//import { Text} from 'react-native-reanimated/lib/typescript/Animated';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import '../global.css'



const Navbar = () => {
    <View className=' flex justify-between bg-green-300 bg-opacity-25m w-full '>
        <Image style = {styles.logo} source={ require('../../assets/images/1-removebg-preview.png')}></Image>
    </View>
}

export default Navbar