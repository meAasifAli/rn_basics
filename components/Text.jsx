import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextComponent = () => {
    return (
        <View>
            <Text style={styles.text}>Text</Text>
        </View>
    )
}

export default TextComponent

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "red",
        textAlign: "center",

    }
})


