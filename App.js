import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Navigation from "./src/Navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
