import { useForm } from 'react-hook-form'
import { StyleSheet, Text, View, TextInput } from 'react-native'



const InputField = ({ hasLabel, label, placeholder, onValueChange, value, secure, props, error }) => {
    const {
        register,
        formState: { errors },
    } = useForm()
    return (
        <View style={styles.container}>
            {
                hasLabel && <Text>{label}</Text>
            }
            <TextInput
                value={value} onChangeText={onValueChange}
                style={styles.input} placeholder={placeholder} placeholderTextColor={"black"}
                secureTextEntry={secure}
                {...props}
            />
            {error && <Text style={{ color: 'red', fontSize: 13 }}>{error.message}</Text>}
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
        borderColor: "#e91e63",
        borderRadius: 15,
        color: "black",
        borderWidth: 0.5
    },
    inputResult: {
        fontSize: 16,
        fontWeight: "600",
        color: "#000"
    }
})