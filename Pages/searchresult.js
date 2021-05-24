import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  Platform,
  StatusBar,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";

import Card from "./pages/card";

const listing = [
  {
    id: 1,
    title: "Sukhi da Dhaba",
    subtitle: "Kadhi Bowl",
    image: require("./assets/kadhi.png"),
    profile: require("./assets/cook1.jpg"),
    mark: require("./assets/veg.png"),
    price: "50",
    rating: "3.5",
  },
  {
    id: 2,
    title: "Sukhi da Dhaba",
    subtitle: "Kadhi Bowl",
    image: require("./assets/kadhi.png"),
    profile: require("./assets/cook1.jpg"),
    mark: require("./assets/veg.png"),
    price: "50",
    rating: "3.5",
  },
  {
    id: 3,
    title: "Sukhi da Dhaba",
    subtitle: "Kadhi Bowl",
    image: require("./assets/kadhi.png"),
    profile: require("./assets/cook1.jpg"),
    mark: require("./assets/veg.png"),
    price: "50",
    rating: "3.5",
  },
];

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.topcontainer}>
            <Image
              source={require("./assets/arrow.png")}
              style={styles.topcontainerimg}
            />
            <Text>kalyan nagar ph-3</Text>
            <Image
              source={require("./assets/search2.png")}
              style={styles.topcontainerimg2}
            />
          </View>

          <View style={styles.topcontainer2}>
            <Image
              source={require("./assets/fooddome.png")}
              style={styles.topcontainer2img}
            />
            <Text>Search results for: Kadhi </Text>
            <Image
              source={require("./assets/filter.png")}
              style={styles.topcontainer2img2}
            />
            <Text>Filter</Text>
          </View>

          <FlatList
            data={listing}
            keyExtractor={(listing) => listing.id.toString()}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
                profile={item.profile}
                mark={item.mark}
                price={item.price}
                rating={item.rating}
              >
                {" "}
              </Card>
            )}
          ></FlatList>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight,
    overflow: "hidden",
    alignContent: "center",
    //alignItems:"center",
    marginHorizontal: 10,
  },
  topcontainer: {
    flexDirection: "row",
    flex: 1,
    padding: 20,
    paddingLeft: 0,
    alignItems: "center",
    margin: 10,
    marginLeft: 5,
  },
  topcontainerimg: {
    height: 15,
    width: 17,
    marginRight: 20,
  },
  topcontainerimg2: {
    height: 17,
    width: 17,
    marginLeft: "60%",
  },

  topcontainer2: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
  },

  topcontainer2img: {
    marginRight: 10,
  },

  topcontainer2img2: {
    marginLeft: "30%",
    marginRight: 5,
  },
});
