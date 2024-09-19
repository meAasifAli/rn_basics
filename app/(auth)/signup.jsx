import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputField from '../../components/InputField'
import ButtonComponent from "../../components/Button"
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, router } from 'expo-router'
import { useForm, Controller } from "react-hook-form"

import AsyncStorage from '@react-native-async-storage/async-storage'




const SignupScreen = () => {

    const getUser = async () => {
        const user = await AsyncStorage.getItem("user")
        console.log(JSON.parse(user));

    }
    getUser()
    const [loading, setLoading] = useState(false)
    const {
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm()

    const password = watch('password');
    const [formVal, setFormVal] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const onSubmit = async (data) => {
        console.log(data);
        setLoading(true)
        try {

            const res = await fetch("https://raybit-tasks.onrender.com/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        firstname: data?.firstname,
                        lastname: data?.lastname,
                        password: data?.password || data?.confirmPassword,
                        email: data?.email

                    })
            })

            const result = await res?.json()

            await AsyncStorage.setItem("user", JSON.stringify(result))
            router.push("/")

        } catch (error) {
            Alert.alert(error)
            console.log(error);
            setLoading(false)

        }
        finally {
            setLoading(false)
        }


    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Image resizeMode='contain' style={{ width: "100%", height: 400 }} source={require("../../assets/signup.webp")} />
                </View>
                <View style={{ display: "flex", flexDirection: "column", gap: 5, justifyContent: "center", alignItems: "center" }}>
                    <View>
                        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>Signup Screen</Text>
                        <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "500", color: "gray" }}>please signup to get started</Text>
                    </View>
                    <View style={{ width: "100%", marginVertical: 20 }}>
                        <Controller
                            control={control}
                            name="firstname"
                            rules={{
                                required: 'firstname is required',

                            }} // Add validation rules
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputField
                                    hasLabel={true}
                                    label="First Name"
                                    placeholder="First Name"
                                    value={value}
                                    onValueChange={(text) => {
                                        setFormVal({ ...formVal, firstname: text });
                                        onChange(text); // Pass value to react-hook-form
                                    }}
                                    error={errors.firstname} // Pass error to InputField
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="lastname"
                            rules={{
                                required: 'lastname is required',

                            }} // Add validation rules
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputField
                                    hasLabel={true}
                                    label="Last Name"
                                    placeholder="last Name"
                                    value={value}
                                    onValueChange={(text) => {
                                        setFormVal({ ...formVal, lastname: text });
                                        onChange(text); // Pass value to react-hook-form
                                    }}
                                    error={errors.lastname} // Pass error to InputField
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="email"
                            rules={{
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address'
                                }
                            }} // Add validation rules
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputField
                                    hasLabel={true}
                                    label="Email"
                                    placeholder="Enter your email address"
                                    value={value}
                                    onValueChange={(text) => {
                                        setFormVal({ ...formVal, email: text });
                                        onChange(text); // Pass value to react-hook-form
                                    }}
                                    error={errors.email} // Pass error to InputField
                                />
                            )}
                        />


                        <Controller
                            control={control}
                            name="password"
                            rules={{
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be at least 6 characters long' },
                            }} // Add validation rules
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputField
                                    hasLabel={true}
                                    label="Password"
                                    placeholder="password"
                                    value={value}
                                    onValueChange={(text) => {
                                        setFormVal({ ...formVal, password: text });
                                        onChange(text); // Pass value to react-hook-form
                                    }}
                                    error={errors.password} // Pass error to InputField
                                />
                            )}
                        />


                        <Controller
                            control={control}
                            name="confirmPassword"
                            rules={{
                                required: 'Confrim Password is required',
                                validate: value => value === password || 'Passwords do not match'

                            }} // Add validation rules
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputField
                                    hasLabel={true}
                                    label="Confirm Password"
                                    placeholder="confirm password"
                                    value={value}
                                    onValueChange={(text) => {
                                        setFormVal({ ...formVal, confirmPassword: text });
                                        onChange(text); // Pass value to react-hook-form
                                    }}
                                    error={errors.confirmPassword} // Pass error to InputField
                                />
                            )}
                        />

                        <ButtonComponent
                            onPress={handleSubmit(onSubmit)}
                            title={
                                loading ? "Loading..." : "Signup Now"
                            }
                        />
                        <View style={{
                            padding: 10, display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5
                        }}>
                            <View style={{ borderColor: "#000", borderWidth: 0.5, flex: 1 }}></View>
                            <Text>OR</Text>
                            <View style={{ borderColor: "#000", borderWidth: 0.5, flex: 1 }}></View>
                        </View>
                        <TouchableOpacity style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 5, margin: 10, padding: 15, borderColor: "#e91e63", borderWidth: 0.5, borderRadius: 15 }}>
                            <AntDesign name="google" size={24} color="black" />
                            <Text style={{ color: "#000", fontWeight: "bold" }}>Continue with Google</Text>
                        </TouchableOpacity>
                        <View style={{ paddingVertical: 1 }}>
                            <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "500", color: "gray" }}>Already have an account? <Link href={'/(auth)/login'} style={{ color: "#e91e63" }}>Login</Link></Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignupScreen

const styles = StyleSheet.create({})