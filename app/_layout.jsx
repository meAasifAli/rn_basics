import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='(screens)' options={{ headerShown: false }} />
            <Stack.Screen name='[productId]/index' options={{ headerShown: false }} />
        </Stack>
    )
}

export default RootLayout

