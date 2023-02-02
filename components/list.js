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
      <Text style={styles.title}>{props}</Text>
    </View>
  );
};

const List = () => {
  const [dummyData, setDummyData] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      const arr = response.data.products.map((el) => el.title);
      arr.sort();
      setDummyData(arr);
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => <Item props={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  item: {
    // padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 10,
  },
});

export default List;
