import { Redirect } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <Redirect href={'/(screens)/home'} />
  );
}

