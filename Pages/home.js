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

import Card from "../component/card";
import Chefcard from "../component/chefcard";
import Circlecard from "../component/circlecard";

const circlecardlist = [
  {
    id: "northindian",
    profile: require("../assets/bhature.png"),
    text: "North Indian",
  },
  {
    id: "southindian",
    profile: require("../assets/idli.png"),
    text: "South Indian",
  },
  {
    id: "chinese",
    profile: require("../assets/chinese.png"),
    text: "Chinese",
  },
  {
    id: "northindian2",
    profile: require("../assets/bhature.png"),
    text: "North Indian",
  },
  {
    id: "southindian2",
    profile: require("../assets/idli.png"),
    text: "South Indian",
  },
  {
    id: "chinese2",
    profile: require("../assets/chinese.png"),
    text: "Chinese",
  },
  {
    id: "gujrati",
    profile: require("../assets/gujrati.png"),
    text: "Gujrati",
  },
  {
    id: "snacks",
    profile: require("../assets/snacks.png"),
    text: "Snacks",
  },
  {
    id: "dessert",
    profile: require("../assets/dessert.png"),
    text: "Dessert",
  },
  {
    id: "gujrati2",
    profile: require("../assets/gujrati.png"),
    text: "Gujrati",
  },
  {
    id: "snacks2",
    profile: require("../assets/snacks.png"),
    text: "Snacks",
  },
  {
    id: "dessert2",
    profile: require("../assets/dessert.png"),
    text: "Dessert",
  },
];

const listing = [
  {
    id: 1,
    title: "Sukhi da Dhaba",
    subtitle: "Kadhi Bowl",
    image: require("../assets/kadhi.png"),
    profile: require("../assets/cook1.jpg"),
    mark: require("../assets/veg.png"),
    price: "50",
    rating: "3.5",
  },
  {
    id: 2,
    title: "Rounak singh",
    subtitle: "Rajma Bowl",
    image: require("../assets/rajma.png"),
    profile: require("../assets/cook1.jpg"),
    mark: require("../assets/veg.png"),
    price: "50",
    rating: "3.5",
  },
  {
    id: 3,
    title: "Porus ka Swad",
    subtitle: "Rajma, Kadhi, 5roti",
    image: require("../assets/thali.png"),
    profile: require("../assets/cook1.jpg"),
    mark: require("../assets/veg.png"),
    price: "50",
    rating: "3.5",
  },
];

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.homecontainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.homeheader}>
            <Image
              style={styles.homelocationimage}
              source={require("../assets/location.png")}
            />
            <View style={styles.homeheadertextcontainer}>
              <Text style={styles.homeheaderhome}>HOME</Text>
              <Text style={styles.homeheaderaddress} numberOfLines={1}>
                Flat-102, Plot-53, Rishabh Residency, Kalyan Nagar Phase-3,
                Hyderabad.
              </Text>
            </View>
          </View>
          <View style={styles.homeheading1}>
            <Text style={styles.homeheading1text}>
              What are you looking for?
            </Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FlatList
              contentContainerStyle={{ justifyContent: "center" }}
              numColumns={circlecardlist.length / 2}
              showsHorizontalScrollIndicator={false}
              legacyImplementation={false}
              data={circlecardlist}
              keyExtractor={(listing) => listing.id.toString()}
              renderItem={({ item }) => (
                <Circlecard img={item.profile} txt={item.text}></Circlecard>
              )}
            ></FlatList>
          </ScrollView>
          <View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.homeheading2}>
                <Text style={styles.homeheading2text}>Top chefs near you</Text>
              </View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                data={listing}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => (
                  <Chefcard
                    title={item.title}
                    subtitle={item.subtitle}
                    image={item.image}
                    profile={item.profile}
                    rating={item.rating}
                  ></Chefcard>
                )}
              ></FlatList>
              <View style={styles.homeheading3}>
                <Text style={styles.homeheading3text}>Quick Links</Text>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                <Image
                  style={{
                    height: 90,
                    width: 110,
                    borderRadius: 10,
                  }}
                  source={require("../assets/Pureveg.png")}
                />
                <Image
                  style={{
                    height: 90,
                    width: 110,
                    borderRadius: 10,
                  }}
                  source={require("../assets/Trending.png")}
                />
                <Image
                  style={{
                    height: 90,
                    width: 110,
                    borderRadius: 10,
                  }}
                  source={require("../assets/Newarraivals.png")}
                />
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                <Image
                  style={{
                    height: 90,
                    width: 110,
                    borderRadius: 10,
                  }}
                  source={require("../assets/Nonveg.png")}
                />
                <Image
                  style={{
                    height: 90,
                    width: 110,
                    borderRadius: 10,
                  }}
                  source={require("../assets/Offers.png")}
                />
                <Image
                  style={{
                    height: 90,
                    width: 110,
                    borderRadius: 10,
                  }}
                  source={require("../assets/Premium.png")}
                />
              </View>
              <View style={styles.homeheading4}>
                <Text style={styles.homeheading4text}>Explore Near You</Text>
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
                  ></Card>
                )}
              ></FlatList>
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  homecontainer: {
    flex: 1,
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight,
    overflow: "hidden",
    alignContent: "center",
    marginHorizontal: 10,
  },
  homeheader: {
    flexDirection: "row",
    borderBottomColor: "#A9A69E",
    borderBottomWidth: 0.5,
    paddingBottom: 5,
  },
  homelocationimage: {
    width: 22,
    marginRight: 15,
    marginTop: 10,
    resizeMode: "contain",
  },
  homeheadertextcontainer: {
    marginTop: 17,
  },
  homeheaderaddress: {
    fontSize: 16,
    fontWeight: "bold",
  },
  homeheaderaddress: {
    width: "60%",
    color: "#404040",
  },
  homeheading1: {
    marginTop: 25,
    marginBottom: 20,
    width: 170,
    borderBottomWidth: 0.5,
  },
  homeheading1text: {
    fontSize: 16,
    paddingBottom: 1,
  },
  homeheading2: {
    marginBottom: 20,
    width: 130,
    borderBottomWidth: 0.5,
  },
  homeheading2text: {
    fontSize: 16,
    paddingBottom: 1,
  },
  homeheading3: {
    marginBottom: 20,
    width: 90,
    borderBottomWidth: 0.5,
  },
  homeheading3text: {
    fontSize: 16,
    paddingBottom: 1,
  },
  homeheading4: {
    marginTop: 35,
    marginBottom: 20,
    width: 130,
    borderBottomWidth: 0.5,
  },
  homeheading4text: {
    fontSize: 16,
    paddingBottom: 1,
  },
});
