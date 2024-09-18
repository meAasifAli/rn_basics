
import { useEffect, useRef, useState } from 'react';
import { Alert, Image, StyleSheet, Text, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Swiper from 'react-native-swiper'


const HomeScreen = () => {
    const [index, setIndex] = useState(0)
    const swiperRef = useRef(null)
    const products = [
        {
            id: 1,
            bannerUrl: "https://picsum.photos/1600/400?random=1",
            altText: "Latest Collection - Summer 2024"
        },
        {
            id: 2,
            bannerUrl: "https://picsum.photos/1600/400?random=2",
            altText: "Exclusive Sale - Up to 50% Off"
        },
        {
            id: 3,
            bannerUrl: "https://picsum.photos/1600/400?random=3",
            altText: "New Arrivals - Trendy Fashion"
        },
        {
            id: 4,
            bannerUrl: "https://picsum.photos/1600/400?random=4",
            altText: "Shop Now - Best Deals of the Season"
        }
    ];


    return (
        <SafeAreaView style={styles.container}>
            <Swiper
                ref={swiperRef}
                onIndexChanged={(index) => setIndex(index)}
                showsButtons={false}
                showsPagination={true}
                loop={false}
                paginationStyle={{
                    position: "absolute",
                    bottom: 10,
                }}
            >
                {products?.map((product, index) => (
                    <View key={index} style={{ position: "relative" }}>
                        <Image resizeMode='cover' source={{ uri: product?.bannerUrl }} style={{ width: 500, height: 400 }} />
                    </View>
                ))}
            </Swiper>
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
