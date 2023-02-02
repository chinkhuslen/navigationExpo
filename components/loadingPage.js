import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import Lottie from "lottie-react-native";

const LoadingPage = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Lottie
        source={require("../99109-loading.json")}
        autoPlay
        loop
        style={{ width: 80 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    backgroundColor: "rgba(255, 255, 255,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
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

export default LoadingPage;
