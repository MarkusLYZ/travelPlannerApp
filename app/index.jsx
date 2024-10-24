import { Image, Text, View } from "react-native";
import Login from "./../components/Login";

export default function Index() {
  return (
    <View>
      <Image
        style={{ width: "100%", height: 500 }}
        source={require("./../assets/login.jpg")}
      />
      <View>
        <Text style={{fontSize:28, fontFamily:'outfit-bold'}}>AI Travel Planner</Text>
      </View>
    </View>
  );
}
