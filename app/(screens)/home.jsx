
import { StyleSheet, Text, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'


const HomeScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Home Screen</Text>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        textAlign: 'start',
        padding: 10
    }
});
