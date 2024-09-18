import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Feather from '@expo/vector-icons/Feather';
const ScreensLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#e91e63', tabBarInactiveTintColor: 'gray',
        }}>
            <Tabs.Screen name='home' options={{
                title: 'Home', headerShown: false,
                tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />
            }} />
            <Tabs.Screen name='products' options={{

                title: 'products', headerShown: false,
                tabBarIcon: ({ color }) => <SimpleLineIcons name="docs" size={24} color={color} />
            }} />
            <Tabs.Screen name='cart' options={{

                title: 'cart', headerShown: false,
                tabBarIcon: ({ color }) => <Feather name="shopping-cart" size={24} color={color} />
            }} />
        </Tabs>
    )
}

export default ScreensLayout

const styles = StyleSheet.create({})