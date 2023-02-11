import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import ProductScreen from "./src/data/screens/ProductScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProductScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
