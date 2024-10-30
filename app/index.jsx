import { Image, Text, View } from "react-native";
import { auth } from "./../configs/FirebaseConfig";
import Login from "./../components/Login";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

export default function Index() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return <View>{user ? <Redirect href={"/mytrip"} /> : <Login />}</View>;
}