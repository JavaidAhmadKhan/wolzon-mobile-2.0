import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
// import ProductScreen from "./src/data/screens/ProductScreen";
import ProductDetailsScreen from "./src/data/screens/ProductDetailsScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ProductScreen /> */}
      <ProductDetailsScreen />
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
