import { Alert, FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import useCartStore from '../../store/useCartStore'
import { SafeAreaView } from 'react-native-safe-area-context'
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';

const CartScreen = () => {
    const dispatch = useDispatch()
    const { cartItems } = useSelector((state) => state?.cart)


    // const handleRemove = (id) => {
    //     removeFromCart(id)
    //     Alert.alert("item has been removed")
    // }





    const totalAmt = cartItems.reduce((acc, item) => acc + item.price, 0)

    return (
        <SafeAreaView style={{ padding: 10, }}>
            <FlatList
                data={cartItems}
                ListHeaderComponent={() => (
                    <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 10 }}>Total : ₹{totalAmt}</Text>
                )}
                renderItem={({ item }) => (
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: 10,
                        backgroundColor: "white",
                        borderRadius: 15,
                        marginVertical: 10
                    }}>
                        <Image resizeMode='cover' style={{ height: 100, width: 100, }} source={{
                            uri: item?.image
                        }} />
                        <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 5 }}>
                            <View>
                                <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center", }}>Price : ₹{item?.price}</Text>
                            </View>
                            <View style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 10
                            }}>
                                <Pressable onPress={() => dispatch(increaseQuantity(item?.id))} style={{ height: 30, width: 30, borderRadius: 25, backgroundColor: "green", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Entypo name="plus" size={24} color="white" />
                                </Pressable>
                                <Text>{item?.quantity}</Text>
                                <Pressable onPress={() => dispatch(decreaseQuantity(item?.id))} style={{ height: 30, width: 30, borderRadius: 25, backgroundColor: "red", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <AntDesign name="minus" size={24} color="white" />
                                </Pressable>
                            </View>
                        </View>
                        <View >
                            <TouchableOpacity style={{ backgroundColor: "red", padding: 10, borderRadius: 5, marginTop: 10, }}>
                                <Text style={{ color: "#fff", fontWeight: "500", textAlign: "center" }}>remove</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <View style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>No items in cart</Text>
                    </View>
                )}

            />
        </SafeAreaView>
    )
}

export default CartScreen

