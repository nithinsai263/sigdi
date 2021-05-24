import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class paymentPageComponent extends Component {
  state = {
    renderedItems: this.props.content.slice(0, 2),
    counter: 1,
  };
  handleSeemore = () => {
    this.setState({
      renderedItems: this.props.content.slice(0, this.state.counter * 2 + 2),
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {this.props.heading}
          </Text>
        </View>
        <View style={styles.backgroundImageContainer}>
          <ImageBackground
            source={require("../assets/wallet.png")}
            style={styles.backgroundImage}
          >
            <Text style={styles.amount}>{this.props.amount}</Text>
          </ImageBackground>
        </View>
        <View style={styles.paymentDateContainer}>
          <View style={styles.paymentDate}>
            <Text style={{ color: "#552E30" }}>Today {" >"}</Text>
          </View>
        </View>
        {this.state.renderedItems.map((data) => (
          <View style={styles.infoContainer}>
            <Image source={require("../assets/paymentlogo.png")} />
            <View>
              <Text
                style={{
                  paddingRight: 20,
                  paddingLeft: 10,
                  marginRight: 20,
                }}
              >
                {data}
              </Text>
            </View>
          </View>
        ))}
        {this.props.content.length > this.state.counter * 2 && (
          <TouchableOpacity onPress={this.handleSeemore}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text>see more {">"}</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default paymentPageComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
  },
  backgroundImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  backgroundImage: {
    height: 290,
    width: 250,
    resizeMode: "cover",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  amount: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "bold",
  },
  paymentDateContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 10,
    marginTop: 10,
  },
  paymentDate: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FCCF08",
    borderRadius: 5,
  },
  infoContainer: {
    padding: 15,
    flexDirection: "row",
    borderWidth: 0.5,
  },
});
