import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'


const InputField = () => {
    const [username, setUsername] = useState("")
    return (
        <View style={styles.container}>
            <Text>username</Text>
            <TextInput value={username} onChangeText={(text) => setUsername(text)} style={styles.input} placeholder='username' placeholderTextColor={"black"} />
            {username !== "" && <Text>{username}</Text>}
        </View>
    )
}

export default InputField

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    input: {
        padding: 15,
        borderColor: "#000",
        borderRadius: 15,
        color: "black",
        borderWidth: 2
    },
    inputResult: {
        fontSize: 16,
        fontWeight: "600",
        color: "#000"
    }
})