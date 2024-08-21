import React from 'react';
import { Image, StyleSheet, Platform} from 'react-native';
import {Text, View, TextInput, SafeAreaView, Button, TouchableOpacity,Alert} from 'react-native';//import { Text} from 'react-native-reanimated/lib/typescript/Animated';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import '../app/global.css'
import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import axios from 'axios';

const Form = () =>{

  const [username, handleUsername] = React.useState('Username');
  const [password, handlePassword] =React.useState('password')

  //Logic to handle the backend
  const handleSubmit = async () => {
    const url = 'http://10.0.2.2:3000/';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        });

        // Check for response status and handle success or error
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Log response data
            Alert.alert('Success', data.message);
        } else {
            const errorText = await response.text();
            console.log('Server responded with an error:', errorText);
            Alert.alert('Error', 'Failed to submit form');
        }
    } catch (error) {
        console.error('Error:', error);
        Alert.alert('Error', 'Failed to submit form');
    }
};

    return (
    <View className='flex-1 justify-center bg-green-400 flex p-20 px-10 mx-9'>
     <Text className='text-4xl text-center mb-5'> LOGIN</Text>
      <TextInput
        className='h-10 border border-black mb-3 pl-3 rounded'
        onChangeText={handleUsername}
        placeholder="example@gmail.com"
      />
      <TextInput
        className='h-10 border border-black mb-3 pl-3 rounded'
        placeholder='Password'
        onChangeText={handlePassword}
      />
      <TouchableOpacity 
        className='bg-black py-3 rounded  text-white p-32'
        onPress={handleSubmit}
      >
        <Text className='text-center text-white text-sm'>Submit</Text>
      </TouchableOpacity>
    </View>
      );
    };
    

    

export default Form