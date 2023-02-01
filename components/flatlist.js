import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";

const Item = ({ props }) => {
  return (
    <View style={styles.item}>
      <Image style={styles.itemImg} source={{ uri: `${props.images[0]}` }} />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const FlatListView = () => {
  const [dummyData, setDummyData] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setDummyData(response.data.products);
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => <Item props={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        // horizontal
        // numColumns={2}
        // ItemSeparatorComponent={(props) => {
        //   console.log("props", props); // here you can access the trailingItem with props.trailingItem
        //   return (
        //     <View
        //       style={{
        //         height: 5,
        //         backgroundColor: props.highlighted ? "green" : "gray",
        //       }}
        //     />
        //   );
        // }}
      />
      <FlatList
        data={dummyData}
        renderItem={({ item }) => <Item props={item} />}
        keyExtractor={(item) => item.id}
        // horizontal
        // numColumns={2}
        // ItemSeparatorComponent={(props) => {
        //   console.log("props", props); // here you can access the trailingItem with props.trailingItem
        //   return (
        //     <View
        //       style={{
        //         height: 5,
        //         backgroundColor: props.highlighted ? "green" : "gray",
        //       }}
        //     />
        //   );
        // }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  itemImg: {
    width: 100,
    height: 100,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 10,
  },
});

export default FlatListView;

// const data = {
//   brand: "Apple",
//   category: "smartphones",
//   description: "An apple mobile which is nothing like apple",
//   discountPercentage: 12.96,
//   id: 1,
//   images: [
//     "https://i.dummyjson.com/data/products/1/1.jpg",
//     "https://i.dummyjson.com/data/products/1/2.jpg",
//     "https://i.dummyjson.com/data/products/1/3.jpg",
//     "https://i.dummyjson.com/data/products/1/4.jpg",
//     "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//   ],
//   price: 549,
//   rating: 4.69,
//   stock: 94,
//   thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//   title: "iPhone 9",
// };
