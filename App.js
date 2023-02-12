import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import ShoppingCart from "./src/screens/ShoppingCart";
// import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
// import ProductScreen from "./src/screens/ProductScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ProductScreen />
      <ProductDetailsScreen /> */}
      <ShoppingCart />
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
