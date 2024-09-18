import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImageComponent = () => {
    return (
        <View>
            <Image resizeMode='contain' style={styles.img} source={require("../assets/img.jpg")} />
        </View>
    )
}

export default ImageComponent

const styles = StyleSheet.create({

    img: {
        width: "100%",
        height: 300
    }
})