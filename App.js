import React from "react";

import SellerProfile from "./Pages/sellerProfile";
import EditSellerProfile from "./Pages/editSellerProfile";
import AddItemScreen from "./Pages/addItemScreen";
import ProfileEditProfile from "./Pages/profileEditProfile";
import ProfileAddressBook from "./Pages/profileAddressBook";
import ProfileBookmarks from "./Pages/profileBookmarks";
import ProfileNotification from "./Pages/profileNotification";
import ProfileYourOrder from "./Pages/profileYourOrder";
import RateOrder from "./Pages/rateOrderPage";
import OrderProgress from "./Pages/orderProgress";

export default function App() {
  return <OrderProgress />;
}

/*
import React, { Component } from "react";
import { View, Text } from "react-native";

export default class App extends Component {
  
  async componentDidMount() {
    try {
      await fetch("http://3.141.22.179:8000/phonenumber", {
        method: "post",
        mode:'no-cors',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "phonenumber": "8686959595",
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    } catch (e) {
      console.log("this is the error" + e);
    }
  }
  render() {
    return (
      <View>
        <Text>ankit</Text>
      </View>
    );
  }
}*/

/*import React, {Component} from 'react';
import {Text} from 'react-native';
import {observer} from "mobx";
import {observable} from "mobx-react";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


@observer
class App extends Component {
  @observable counter=0;
  handle=()=>{
    this.counter=this.counter+1;
  }
  render() { 
    return (  
      <TouchableWithoutFeedback onPress={this.handle}>
      <Text>{this.counter}</Text>
      </TouchableWithoutFeedback>
    );
  }
}
 
export default App;

*/
/*import { Formik } from "formik";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { Button, View } from "react-native";

function App() {
  return (
    <Formik
      initialValues={{ email: " ", phonenumber: "  " }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleSubmit }) => (
        <View style={{ marginTop: 40 }}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={handleChange("email")}
            placeholder="Email"
            textContentType="emailAddress"
          ></TextInput>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numbers-and-punctuation"
            onChangeText={handleChange("phonenumber")}
            placeholder="Phone Number"
            textContentType="telephoneNumber"
          ></TextInput>
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}

export default App;
*/
/*----------------------------------------------------------------------------*/
//profilecode
/*

import React, { Component } from "react";
import {
  ImageBackground,
  SafeAreaView,
  View,
  Image,
  Dimensions,
  Text,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Tab from "./Pages/tab";
import Menu from "./Pages/menu";
import Reviews from "./Pages/review";
import Share from "./Pages/share";
import CartPopup from "./Pages/cartPopup";




const tabs = [
  { id: "menu", title: "Menu" },
  { id: "reviews", title: "Reviews" },
  { id: "share", title: "Share" },
];


class profile extends Component {

  state={
    totalAmount:0,
    list:[],
  }


  
  windowWidth = Dimensions.get("window").width;
  popupRef = React.createRef();

  showPopup = () => {
    this.popupRef.show();
  };

  onClosePopup = () => {
    this.popupRef.close();
  };
  handleCallBack = (menuData) => {
    let temp = 0;
    let list = [];
    for (let i = 0; i < menuData.length; i++) {
      temp = temp + menuData[i].quantity * menuData[i].price;
      if (menuData[i].quantity > 0) {
        list.push({
          id: menuData[i].id,
          name: menuData[i].name,
          mark: menuData[i].mark,
          price: menuData[i].price,
          quantity: menuData[i].quantity,
        });
      }
    }
    this.setState({totalAmount:temp, list:list});
  };
  render(){
  return (
    <SafeAreaView style={{ overflow: "hidden" }}>
      <ScrollView>
        <View style={{ borderColor: "#ffc408", borderWidth: 2 }}>
          <ImageBackground
            style={{
              height: 250,
              width: "100%",
              resizeMode: "contain",
            }}
            source={require("./assets/cover.png")}
          ></ImageBackground>
        </View>
        <View style={{ height: 48 }}>
          <Image
            style={{
              position: "absolute",
              bottom: 0,
              borderColor: "#ffc408",
              borderWidth: 2,
              left: this.windowWidth / 2 - 48,
              height: 96,
              width: 96,
              borderRadius: 100,
            }}
            source={require("./assets/cook2.jpg")}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 4,
            borderBottomColor: "#eaeaea",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
            paddingBottom: 20,
          }}
        >
          <View
            style={{
              marginHorizontal: 10,
              paddingBottom: 5,
              borderBottomColor: "#eaeaea",
              borderBottomWidth: 1,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Shivams Kitchen
            </Text>
            <Text>North Indian, Punjabi</Text>
            <View style={{ flexDirection: "row" }}>
              <Text>Madhapur</Text>
              <Text> |</Text>
              <Text>3.0 km</Text>
            </View>
            <Text>Open Now</Text>
          </View>

          <View style={{ justifyContent: "center", marginHorizontal: 10 }}>
            <View>
              <Text>stars</Text>
            </View>
            <View>
              <Text>time</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 10,
            marginTop: 10,
            borderBottomWidth: 4,
            borderBottomColor: "#eaeaea",
            paddingBottom: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16, paddingBottom: 5 }}>
            About
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A eni
            scelerisque id id. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. A eni celerisque id id.
          </Text>
          
        </View>
        <Tab tabs={tabs}>
          <Menu parentCallBack={this.handleCallBack} />
          <Reviews />
          <Share />
        </Tab>
      </ScrollView>
      
      {this.state.totalAmount > 0 && (
        <View style={styles.footerContainer}>
          <TouchableWithoutFeedback onPress={this.showPopup}>
            <View style={styles.cartContainer}>
              <View>
                <Text style={styles.cartItemText}>1ITEM</Text>
                <Text style={styles.cartItemPrice}>
                  Rs. {this.state.totalAmount}plustaxes
                </Text>
              </View>
              <View style={styles.cartViewContainer}>
                <Text style={styles.cartView}>View Cart {">"}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <CartPopup
            ref={(target) => (this.popupRef = target)}
            onTouchOutside={this.onClosePopup}
            list={this.state.list}
            totalAmount={this.state.totalAmount}
          ></CartPopup>
        </View>
      )}
    </SafeAreaView>
  );
}
}


export default profile;

const styles = StyleSheet.create({
  cartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FCCF08",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  cartItemText: {
    color: "#ffffff",
  },
  cartItemPrice: {
    color: "#ffffff",
  },
  cartView: {
    color: "#ffffff",
  },
  cartViewContainer: {
    justifyContent: "center",
  },
  footerContainer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
});

*/
/*----------------------------------------------------------------------------*/
//popup cart
/*
import React, { Component, createRef } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  StatusBar,
  TouchableHighlight,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

import CartPopup from "./Pages/cartPopup";

export default function App() {
  let popupRef = React.createRef();

  const showPopup = () => {
    popupRef.show();
  };

  const onClosePopup = () => {
    popupRef.close();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={showPopup}>
          <Text>hello</Text>
        </TouchableWithoutFeedback>
        <CartPopup
          title="demo popup"
          ref={(target) => (popupRef = target)}
          onTouchOutside={onClosePopup}
        ></CartPopup>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 150,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginRight: 10,
    marginLeft: 10,
  },
});*/
/*----------------------------------------------------------------------------*/
//Tab Navigation
/*
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Searchpage from "./Pages/searchpage";
import Home from "./Pages/home";
import Profilelist from "./Pages/profilelist";
import Sell from "./Pages/sell";
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Order" component={Home} />
        <Tab.Screen name="Search" component={Searchpage} />
        <Tab.Screen name="Sell" component={Sell} />
        <Tab.Screen name="Profile" component={Profilelist} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
*/
/*----------------------------------------------------------------------------*/
//StackNavigation
/*
import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import Page1 from "./Pages/page1";
import Page2 from "./Pages/page2";
import Page3 from "./Pages/page3";
import Page4 from "./Pages/page4";
import Page5 from "./Pages/page5";
import Page6 from "./Pages/page6";
import Page7 from "./Pages/page7";
import Home from "./Pages/home";

import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="page1" component={Page1} />
        <Stack.Screen name="page2" component={Page2} />
        <Stack.Screen name="page3" component={Page3} />
        <Stack.Screen name="page4" component={Page4} />
        <Stack.Screen name="page5" component={Page5} />
        <Stack.Screen name="page6" component={Page6} />
        <Stack.Screen name="page7" component={Page7} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
*/
