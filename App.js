import { Alert, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, } from 'react-native';
import TextComponent from './components/Text';
import ImageComponent from './components/Image';
import { SafeAreaView } from 'react-native-safe-area-context'
import InputField from './components/InputField';
import ButtonComponent from './components/Button';
import TouchableOpacityComponent from './components/Touchableopacity';
import List from './components/List';
import ModalComponent from './components/ModalComponent';
import { useCallback, useState } from 'react';
import SwitchComponent from './components/SwitchComponent';
import TouchableHiglightComponent from './components/TouchableHiglight';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [refreshing, setRefreshing] = useState(false);
  const handlePress = () => {
    console.log('button pressed');
    Alert.alert("button has been pressed")

  }


  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ height: 500 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }

      >
        <TextComponent />
        <ImageComponent />
        <InputField />
        <ButtonComponent onPress={handlePress} title="press me" />
        <TouchableOpacityComponent />
        <TouchableHiglightComponent />

        <TouchableOpacity style={{
          backgroundColor: "#800080", margin: 10, paddingVertical: 10, borderRadius: 10, display: "flex",
          justifyContent: "center", alignItems: "center"
        }} onPress={() => setIsModalVisible(true)}>
          <Text style={{ textAlign: "center", color: "#fff", fontSize: 15 }}>Open Modal</Text>
        </TouchableOpacity>
        <ModalComponent isVisible={isModalVisible} setIsVisible={setIsModalVisible} />
        {/* <List /> because Flatlist component can't be in scrollView */}
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>

        <SwitchComponent />
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    textAlign: 'start',
    padding: 10
  }
});
