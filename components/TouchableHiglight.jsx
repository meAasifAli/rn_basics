import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

const TouchableHiglightComponent = () => {
    return (
        <TouchableHighlight
            style={{ backgroundColor: 'black', padding: 15, margin: 10, borderRadius: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => alert('Pressed!')}>
            <Text style={{ color: "white", textAlign: "center" }}>Press me to see highlighting effect</Text>
        </TouchableHighlight>
    )
}

export default TouchableHiglightComponent

const styles = StyleSheet.create({})