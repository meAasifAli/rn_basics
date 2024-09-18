import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

const ScreensLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name='home' options={{
                title: 'Home', headerShown: false,
                tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />
            }} />
            <Tabs.Screen name='posts' options={{

                title: 'posts', headerShown: false,
                tabBarIcon: ({ color }) => <SimpleLineIcons name="docs" size={24} color={color} />
            }} />
        </Tabs>
    )
}

export default ScreensLayout

const styles = StyleSheet.create({})