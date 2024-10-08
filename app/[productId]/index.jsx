import { ActivityIndicator, Alert, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, useLocalSearchParams } from 'expo-router';
import { addToCart } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../../store/productSlice';


const PostDetail = () => {
    const { product } = useSelector((state) => state?.products)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    // const { addToCart } = useCartStore()
    // const { setProduct, product } = useProductStore()
    const { productId } = useLocalSearchParams()
    useEffect(() => {
        const fetchProductById = async () => {
            try {
                setLoading(true)
                const res = await fetch(`https://fakestoreapi.in/api/products/${productId}`)
                const data = await res.json()
                dispatch(setProduct(data?.product))
            } catch (error) {
                setLoading(false)
                console.log(error);
                Alert.alert(error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchProductById()
    }, [productId])

    console.log(product);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        router.push("/(screens)/cart")
        Alert.alert("Product added to cart")
    }

    return loading ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={"#e91e63"} />
    </View> : (
        <SafeAreaView>
            <ScrollView style={{ paddingHorizontal: 10, marginBottom: 10 }}>
                <Pressable onPress={() => router.replace("/(screens)/products")}>
                    <AntDesign name="back" size={24} color="black" />
                </Pressable>
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginVertical: 20 }}>
                    <Image resizeMode='cover' style={{ height: 400, width: 400, }} source={{
                        uri: product?.image
                    }} />
                </View>
                <Text style={{ fontSize: 18, fontWeight: "500", marginBottom: 10 }}>{product?.title}</Text>
                <Text style={{ fontSize: 14, fontWeight: "500", color: "gray", marginBottom: 5 }}>{product?.description}</Text>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Text>Price : ₹
                        {product?.price}</Text>
                    <Text numberOfLines={2} style={{ fontSize: 18, fontWeight: "500", marginBottom: 10 }}>{product?.brand}</Text>
                </View>
                <TouchableOpacity onPress={() => handleAddToCart({
                    id: product?.id,
                    title: product?.title,
                    price: product?.price,
                    description: product?.description,
                    image: product?.image,
                    brand: product?.brand,
                    quantity: 1
                })} style={{ backgroundColor: "#800080", padding: 10, borderRadius: 5, marginTop: 10 }}>
                    <Text style={{ color: "#fff", fontWeight: "500", textAlign: "center" }}>Add to cart</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>)

}

export default PostDetail

const styles = StyleSheet.create({})