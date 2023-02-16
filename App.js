import { StatusBar } from "expo-status-bar";
import { StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  Button, 
  Alert, 
  Platform } from "react-native";

export default function App() {
  console.log("app executed")

  

  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.viewOne}></View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  viewOne: {
    backgroundColor: "dogerblue",
    height: "5%",
    width: "50%",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar : 0,
  },
});
