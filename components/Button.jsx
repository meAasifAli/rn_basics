import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

const ButtonComponent = ({ title, onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.btnContainer}>
            <Text style={styles.btnText}>{title}</Text>
        </Pressable>
    )
}

export default ButtonComponent

const styles = StyleSheet.create({
    btnContainer: {
        margin: 10,
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        borderRadius: 10
    },
    btnText: {
        color: "#fff"
    }
})