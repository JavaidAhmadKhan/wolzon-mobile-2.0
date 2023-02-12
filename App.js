import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Navigation from "./src/Navigation";
import { store } from "./src/store/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Navigation />
        <StatusBar style="auto" />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
