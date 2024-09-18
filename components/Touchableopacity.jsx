import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TouchableOpacityComponent = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>Press me see opacity effect</Text>
        </TouchableOpacity>
    )
}

export default TouchableOpacityComponent

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        borderRadius: 10
    },
    text: {
        color: "#fff"
    }
})