import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import { Audio } from 'expo-av';

const AudioComponent = () => {
    const [sound, setSound] = useState();

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/hello.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }


    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);
    return (
        <Pressable onPress={playSound} style={{
            backgroundColor: "#000", display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            margin: 10,
            borderRadius: 10
        }}>
            <Text style={{ color: "#fff" }}>Play Audio</Text>
        </Pressable>
    )
}

export default AudioComponent

const styles = StyleSheet.create({})