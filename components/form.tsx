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

  const [username, setUsername] = useState('');
  const [password,setPassword] = useState('');


  //Testing the android routing with express
  const testRoute = async()=>{
    const url = 'http://192.168.2.219:3000/test1';

    try{
      fetch(url,{
        method:'GET',
      }).then(response =>{
        return response.text();
      }).then(data =>{
        Alert.alert(data);
      })

    }catch(error){
      console.log(error);
    }
  }


  const test=() =>{
    console.log("Username:", {username})
    console.log("Password:", {password})
  }
  const handleSubmit = async () => {
    const url = 'http://192.168.2.219:3000/test';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username,
                "password": password,
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
        onChangeText={setUsername}
        placeholder="example@gmail.com"
      />
      <TextInput
        className='h-10 border border-black mb-3 pl-3 rounded'
        placeholder='Password'
        onChangeText={setPassword}
      />
      <TouchableOpacity 
        className='bg-black py-3 rounded  text-white p-32'
        onPress={testRoute}
      >
        <Text className='text-center text-white text-sm'>Submit</Text>
      </TouchableOpacity>
    </View>
      );
    };
    

    

export default Form