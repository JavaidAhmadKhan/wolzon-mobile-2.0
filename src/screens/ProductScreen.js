import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import products from "../products";
const ProductScreen = () => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
        </View>
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
