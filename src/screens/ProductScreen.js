import { FlatList, StyleSheet, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { productSlice } from "../store/productSlice";

const ProductScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            // update selected product
            dispatch(productSlice.actions.setSelectedProduct(item.id));
            navigation.navigate("Product Details");
          }}
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
