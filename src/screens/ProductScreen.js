import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import products from "../data/products";

const ProductScreen = ({ navigation }) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate("Product Details")}
          style={styles.itemContainer}
        >
          <Image
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductScreen;
