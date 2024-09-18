import { StyleSheet, Text, View, FlatList } from 'react-native'


const List = () => {

    const dummyUsers = [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Doe" },
    ]
    return (
        <View style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Text style={{ color: "#000", fontSize: 20, marginBottom: 20 }}>List</Text>
            <FlatList
                data={dummyUsers}
                renderItem={({ item }) => <Text style={{ color: "#fff", backgroundColor: "red", padding: 10, borderRadius: 5, margin: 5, }}>{item.name}</Text>}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default List

const styles = StyleSheet.create({})