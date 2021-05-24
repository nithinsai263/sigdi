import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  StatusBar,
} from "react-native";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.details}>
          <Text style={styles.name}>Ankit Kumar</Text>
          <View style={styles.details2}>
            <Text style={styles.phonenumber}>8686959744</Text>
            <Text style={styles.mail}>janedoe@gmail.com</Text>
          </View>
        </View>
        <Text style={styles.profiletext}>YOUR PROFILE</Text>
        <View style={styles.lists}>
          <View style={styles.listitem}>
            <Image source={require("../assets/search.png")} />
            <Text style={styles.listtext}>Edit Profile</Text>
          </View>
          <View style={styles.listitem}>
            <Image source={require("../assets/search.png")} />
            <Text style={styles.listtext}>Address Book</Text>
          </View>
          <View style={styles.listitem}>
            <Image source={require("../assets/search.png")} />
            <Text style={styles.listtext}>Payments</Text>
          </View>
        </View>

        <View style={styles.lists}>
          <View style={styles.listitem}>
            <Image source={require("../assets/search.png")} />
            <Text style={styles.listtext}>Book Marks</Text>
          </View>
          <View style={styles.listitem}>
            <Image source={require("../assets/search.png")} />
            <Text style={styles.listtext}>Notifications</Text>
          </View>
          <View style={styles.listitem}>
            <Image source={require("../assets/search.png")} />
            <Text style={styles.listtext}>Your Orders</Text>
          </View>
          <View style={styles.listitem}>
            <Image source={require("../assets/search.png")} />
            <Text style={styles.listtext2}>Ordering Help</Text>
          </View>
        </View>

        <View style={styles.lists2}>
          <View style={styles.listitem}>
            <Image source={require("../assets/search.png")} />
            <Text style={styles.listtext}>About</Text>
          </View>
          <View style={styles.listitem}>
            <Image source={require("../assets/search.png")} />
            <Text style={styles.listtext}>Send Feedback</Text>
          </View>
          <View style={styles.listitem}>
            <Image source={require("../assets/search.png")} />
            <Text style={styles.listtext}>Rate us on Play Store</Text>
          </View>
          <Text style={styles.logout}>Log Out</Text>
        </View>
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
    marginRight: 15,
    marginLeft: 15,
  },
  details: {
    paddingBottom: 25,
    marginTop: 10,
    borderBottomColor: "#838383",
    borderBottomWidth: 0.5,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  details2: {
    flexDirection: "row",
    marginTop: 20,
  },
  phonenumber: {
    flex: 1,
  },
  mail: {
    flex: 2,
  },

  profiletext: {
    marginTop: 20,
    color: "#575757",
  },
  lists: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#838383",
  },
  lists2: {
    paddingTop: 15,
  },

  listitem: {
    flexDirection: "row",
    marginBottom: 15,
    marginTop: 15,
  },
  listtext: {
    marginLeft: 10,
  },

  listtext2: {
    color: "#7C1C00",
    marginLeft: 10,
  },

  logout: {
    color: "#000000",
    fontWeight: "bold",
    marginLeft: 30,
  },
});
