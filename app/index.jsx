import { Redirect, router } from "expo-router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";





export default function Page() {

  // const { authUser } = useSelector((state) => state?.user)
  // console.log(authUser);
  useEffect(() => {
    const protectRoute = async () => {
      const user = await AsyncStorage.getItem("user")
      const authuser = await JSON.parse(user)
      if (authuser !== null) {
        router.navigate("/(screens)/home")
      }
      else {
        router.navigate("/(auth)/login")
      }
    }
    protectRoute()
  }, [])


  return (
    <Redirect href={'/(auth)/signup'} />
  );
}

