import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  useWindowDimensions,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import products from "../products";

const ProductDetailsScreen = () => {
  const product = products[0];
  const { width } = useWindowDimensions();

  const addToCart = () => {
    console.warn("added to cart");
  };

  return (
    <View>
      <ScrollView>
        {/* Image Carousel */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: width, aspectRatio: 1 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>
          {/* Price */}
          <Text style={styles.price}>₹{product.price}</Text>
          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      {/* Add to cart button */}
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonStyle}>Add to Cart</Text>
      </Pressable>
      {/* Navigation icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
    color: "#00CCBB",
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
    color: "#00CCBB",
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
  button: {
    position: "absolute",
    backgroundColor: "#00CCBB",
    bottom: 30,
    width: "80%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonStyle: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default ProductDetailsScreen;
