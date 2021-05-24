import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
  ImageBackground,
  StatusBar,
  TextInput,
  Dimensions,
  ScrollView,
} from "react-native";
import { Component } from "react";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
const windowHeight = Dimensions.get("window").height;
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      pin1: "",
      pin2: "",
      pin3: "",
      pin4: "",
    };
  }
  render() {
    const { pin1, pin2, pin3, pin4 } = this.state;

    return (
      <SafeAreaView style={styles.page5container}>
        <ImageBackground
          style={styles.profileimgcontainer}
          source={require("../assets/bgotp.png")}
        >
          <ScrollView>
            <View style={styles.page5heading}>
              <Text style={styles.page5headingotp}>VERIFY OTP</Text>
              <Text style={styles.page5headingotp2}>
                Please type the verification code sent to yout registered number
              </Text>
            </View>
            <View style={styles.page5otpcontainer}>
              <TextInput
                ref={"pin1ref"}
                keyboardType="numeric"
                style={styles.textInput}
                maxLength={1}
                value={pin1}
                onChangeText={(pin1) => {
                  this.setState({ pin1: pin1 });
                  if (pin1 != "") {
                    this.refs.pin2ref.focus();
                  }
                }}
              ></TextInput>
              <TextInput
                ref={"pin2ref"}
                keyboardType="numeric"
                style={styles.textInput}
                maxLength={1}
                value={pin2}
                onChangeText={(pin2) => {
                  this.setState({ pin2: pin2 });
                  if (pin2 != "") {
                    this.refs.pin3ref.focus();
                  }
                }}
              ></TextInput>
              <TextInput
                ref={"pin3ref"}
                keyboardType="numeric"
                style={styles.textInput}
                maxLength={1}
                value={pin3}
                onChangeText={(pin3) => {
                  this.setState({ pin3: pin3 });
                  if (pin3 != "") {
                    this.refs.pin4ref.focus();
                  }
                }}
              ></TextInput>
              <TextInput
                ref={"pin4ref"}
                keyboardType="numeric"
                style={styles.textInput}
                maxLength={1}
                value={pin4}
                onChangeText={(pin4) => this.setState({ pin4: pin4 })}
              ></TextInput>
            </View>

            <View style={styles.page5buttoncontainer}>
              <TouchableNativeFeedback
                onPress={() => this.props.navigation.navigate("page6")}
              >
                <View style={styles.page5Verifynowcontainer}>
                  <Text style={styles.page5Verifynowbutton}>Verify Now</Text>
                </View>
              </TouchableNativeFeedback>
              <Text style={styles.page5Resendcodebutton}>Resend code</Text>
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  page5container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#FCCF08",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    overflow: "hidden",
  },

  profileimgcontainer: {
    width: "100%",
    height: windowHeight,
    resizeMode: "cover",
  },
  page5heading: {
    alignItems: "center",
    marginTop: 60,
  },
  page5headingotp: {
    fontSize: 28,
    color: "#fff",
  },
  page5headingotp2: {
    fontSize: 14,
    textAlign: "center",
    color: "#FFFFFF",
    width: 250,
    marginTop: 20,
  },
  page5otpcontainer: {
    height: 200,
    justifyContent: "center",
    flexDirection: "row",
  },
  page5buttoncontainer: {
    marginTop: 100,
    alignItems: "center",
  },
  page5Verifynowcontainer: {
    width: 233,
    height: 66,
    backgroundColor: "#3C2022",
    borderRadius: 50,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  page5Verifynowbutton: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  page5Resendcodebutton: {
    color: "#000000",
    marginTop: 10,
    fontSize: 14,
    opacity: 0.66,
  },
  textInput: {
    backgroundColor: "#FCCF08",
    fontWeight: "600",
    alignSelf: "center",
    padding: 10,
    fontSize: 20,
    height: 55,
    width: "14.5%",
    margin: 12,
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: "#3C2022",
    alignItems: "center",
    textAlign: "center",
  },
});
