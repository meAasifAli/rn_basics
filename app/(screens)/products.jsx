import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../store/productSlice'

const PostsScreen = () => {
    const dipatch = useDispatch()
    const { products } = useSelector((state) => state?.products)
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('https://fakestoreapi.in/api/products')
                const data = await res?.json()
                // setPosts(data)
                dipatch(setProducts(data?.products))

            } catch (error) {
                Alert.alert(error)
                console.log(error);

            }
        }
        fetchPosts()
    }, [])


    return (
        <SafeAreaView>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 10, gap: 10, backgroundColor: "#fff", marginVertical: 10, marginHorizontal: 15, borderRadius: 15, shadowColor: "#800080", shadowRadius: 5 }}>
                        <View>
                            <Image style={{ width: 300, height: 300 }} resizeMode='cover' source={{ uri: item?.image }} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text numberOfLines={2} style={{ fontSize: 18, fontWeight: "500", marginBottom: 10 }}>{item?.title}</Text>
                            <Text numberOfLines={5} style={{ fontSize: 14, fontWeight: "500", color: "gray", marginBottom: 5 }}>{item?.description}</Text>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <Text>Price : ₹
                                    {item?.price}</Text>
                                <Text numberOfLines={2} style={{ fontSize: 18, fontWeight: "500", marginBottom: 10 }}>{item?.brand}</Text>
                            </View>
                            <TouchableOpacity onPress={() => router.push(`/${item?.id}`)} style={{ backgroundColor: "#800080", padding: 10, borderRadius: 5, marginTop: 10 }}>
                                <Text style={{ color: "#fff", fontWeight: "500", textAlign: "center" }}>Checkout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <Text style={{ textAlign: "center", marginTop: 20, fontSize: 18, fontWeight: "500" }}>No Products Found</Text>
                )}
            />
        </SafeAreaView>
    )
}

export default PostsScreen

const styles = StyleSheet.create({})