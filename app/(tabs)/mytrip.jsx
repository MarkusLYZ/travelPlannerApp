import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MyTrip() {
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontFamily: "outfit-bold", fontSize: 35 }}>My Trip</Text>
        <Ionicons name="add-circle" size={50} color="black" />
      </View>
    </View>
  );
}
