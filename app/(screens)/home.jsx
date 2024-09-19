
import { useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import InputField from '../../components/InputField'
import ButtonComponent from '../../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';


const HomeScreen = () => {


    const [serachVal, setSearchVal] = useState("")
    const handleLogout = async () => {
        await AsyncStorage.removeItem("user")
        router.navigate("/")
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ padding: 10 }}>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 25, padding: 10 }}>Hello Aasif</Text>
                </View>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5
                }}>
                    <InputField
                        placeholder="Search for products and Much more.."
                        value={serachVal}
                        onValueChange={(text) => setSearchVal(text)}
                        hasLabel={false}
                    />
                    <ButtonComponent
                        title={"Search"}
                        onPress={() => { }}
                    />
                </View>
                <ButtonComponent onPress={handleLogout} title={"Logout"} />

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 10,
    },
    text: {
        fontSize: 20,
        textAlign: 'start',
        padding: 10
    }
});
