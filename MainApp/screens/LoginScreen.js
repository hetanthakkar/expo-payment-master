import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from '../common/icons';

export default class LoginScreen extends Component {
  onPressSignIn = () => {
    this.props.navigation.navigate("TabNav");
  }

  onPressSignUp = () => {
    this.props.navigation.navigate("RegisterScreen");
  }
  onPressForget = () => {
    this.props.navigation.navigate("Forget");
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient colors={['#fc0f84', '#020cab']}
          start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={{ flex: 1 }}>
          <ScrollView>

            <View style={styles.logContainer}>
              <Text style={styles.logintxt}>Login</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
              <Image style={styles.logo} source={require("./../assets/img/logo.png")} />
            </View>

            <View style={{ marginTop: 50, marginHorizontal: 20 }}>

              <View style={styles.txtbox}>
                <View style={styles.iconSty}>
                  <Icon family="AntDesign" name="user" size={22} color="white" />
                </View>
                <TextInput
                  style={styles.txtInputSty}
                  placeholderTextColor="white"
                  placeholder="Email (or) Phone number"
                />
              </View>


              <View style={styles.txtbox}>
                <View style={styles.iconSty}>
                  <Icon family="AntDesign" name="lock" size={22} color="white" />
                </View>
                <TextInput
                  style={styles.txtInputSty}
                  placeholder="Password"
                  placeholderTextColor="white"
                  secureTextEntry={true}
                />
              </View>

              <TouchableOpacity onPress={this.onPressForget}>
                <Text style={styles.forgettxt}>Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginHorizontal: 20, paddingVertical: 30, marginTop: 50 }} onPress={this.onPressSignIn}>
                <View style={styles.signContainer}>
                  <Text style={styles.signupTxt}>SIGN IN</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginHorizontal: 70, marginVertical: 10 }} onPress={this.onPressSignUp}>
                <Text style={styles.txtSignup}>I Don't have an Account? <Text style={[styles.signupTxt, { color: '#FFF' }]}>SignUp</Text></Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </LinearGradient>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  logContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20
  },
  logintxt: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    marginHorizontal: 20
  },
  logo: {
    marginTop: 50,
    width: 100,
    height: 100,
    resizeMode: "center",
    borderRadius: 50
  },
  txtbox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'white',
    overflow: 'hidden',
    marginVertical: 5
  },
  iconSty: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtInputSty: {
    flex: 3,
    color: 'white',
    fontFamily: 'Poppins-Light',
    paddingRight: 15,
  },
  txtStl: {
    flex: 0.9,
    color: 'white',
    paddingLeft: 5,
    paddingRight: 50,
    fontFamily: 'Poppins-Light'
  },
  headertxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20,
  },
  txtSignup: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular'
  },
  forgettxt: {
    color: 'white',
    textAlign: 'right',
    marginVertical: 10,
    fontFamily: 'Poppins-Medium'
  },
  signContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 50
  },
  signupTxt: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    color: '#020cab'
  }
})

