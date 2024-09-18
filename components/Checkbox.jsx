import { StyleSheet, Text, View } from 'react-native'
import Checkbox from 'expo-checkbox';
import { useState } from 'react';

const CheckboxComponent = () => {
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={styles.section}>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
            <Text style={styles.paragraph}>Normal checkbox</Text>
        </View>
    )
}

export default CheckboxComponent

const styles = StyleSheet.create({
    section: {
        display: "flex",
        justifyContent: "center",
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    paragraph: {
        fontSize: 15,
    },
})