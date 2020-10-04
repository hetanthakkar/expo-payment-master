import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "../../common/icons";
import { LinearGradient } from "expo-linear-gradient";
import Theme from "../../styles/Theme";

const { width } = Dimensions.get("window");

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: { width, height: 150 },
    };
  }

  _renderBannerItems(rowData) {
    return (
      <TouchableOpacity
        style={{ paddingHorizontal: 5 }}
        onPress={() => this.props.navigation.navigate("Giftcard")}
      >
        <Image
          source={rowData.item.img}
          style={{ width: 350, height: 120, resizeMode: "stretch" }}
        />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Theme.bgcolor }}>
        <ScrollView>
          <LinearGradient
            colors={["#fc0f84", "#020cab"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.linerSty}
          >
            <View style={styles.headerContainer}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.userImg}>
                  <Image
                    style={styles.imgSty}
                    source={require("../../assets/img/profile.jpeg")}
                  />
                </View>
                <View style={{ padding: 10 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#FFF",
                      fontFamily: "Poppins-Light",
                    }}
                  >
                    Hetan
                  </Text>
                  <Text style={{ color: "#FFF", fontFamily: "Poppins-Light" }}>
                    hetanthakkar1@gmail.com
                  </Text>
                </View>
              </View>
              <View style={{ margin: 10 }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Notifi")}
                >
                  <Icon
                    family="FontAwesome"
                    name="bell-o"
                    size={23}
                    color="#FFF"
                  />
                  <Text style={styles.notifisty}>2</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
          <View style={[styles.transferbox, { marginTop: -75 }]}>
            <View style={styles.balance}>
              <Text style={styles.curSty}>Current Balance</Text>
              <Text style={styles.balSty}>$ 1200</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{ flex: 0.5, margin: 10 }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("SendContacts")}
                >
                  <LinearGradient
                    colors={["#fc0f84", "#020cab"]}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.gradsty}
                  >
                    <View style={{ padding: 5, alignItems: "center" }}>
                      <View style={styles.transfer}>
                        <Icon family="FontAwesome" name="codepen" size={20} />
                      </View>
                    </View>
                  </LinearGradient>
                  <Text style={styles.paytypesty}>Teach</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 0.5, margin: 10 }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("ReceiveContacts")
                  }
                >
                  <LinearGradient
                    colors={["#fc0f84", "#020cab"]}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.gradsty}
                  >
                    <View style={{ padding: 5, alignItems: "center" }}>
                      <View style={styles.transfer}>
                        <Icon family="AntDesign" name="book" size={23} />
                      </View>
                    </View>
                  </LinearGradient>
                  <Text style={styles.paytypesty}>Learn</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 0.5, margin: 10 }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("MoblieRecharge")
                  }
                >
                  <LinearGradient
                    colors={["#fc0f84", "#020cab"]}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.gradsty}
                  >
                    <View style={{ padding: 5, alignItems: "center" }}>
                      <View style={styles.transfer}>
                        <Icon family="AntDesign" name="wallet" size={22} />
                      </View>
                    </View>
                  </LinearGradient>
                  <Text style={styles.paytypesty}>Wallet</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 0.5, margin: 10 }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("ActiveScreen")}
                >
                  <LinearGradient
                    colors={["#fc0f84", "#020cab"]}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.gradsty}
                  >
                    <View style={{ padding: 5, alignItems: "center" }}>
                      <View style={styles.transfer}>
                        <Icon family="Feather" name="map" size={20} />
                      </View>
                    </View>
                  </LinearGradient>
                  <Text style={styles.paytypesty}>Around Me</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ marginVertical: 15 }}>
            <View style={styles.shoppingCotainer}>
              <TouchableOpacity style={styles.shoppingbody}>
                <View style={styles.shoppingtxt}>
                  <Icon
                    family="MaterialIcons"
                    name="code"
                    size={20}
                    color={Theme.mainColor}
                  />
                </View>
                <Text style={styles.shoptxt}>Coding</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.shoppingbody}>
                <View style={styles.shoppingtxt}>
                  <Icon
                    family="MaterialCommunityIcons"
                    name="cash-multiple"
                    size={20}
                    color={Theme.mainColor}
                  />
                </View>
                <Text style={styles.shoptxt}>Digital Marketing</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.shoppingCotainer}>
              <TouchableOpacity style={styles.shoppingbody}>
                <View style={styles.shoppingtxt}>
                  <Icon
                    family="MaterialIcons"
                    name="music-note"
                    size={20}
                    color={Theme.mainColor}
                  />
                </View>
                <Text style={styles.shoptxt}>Music</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.shoppingbody}>
                <View style={styles.shoppingtxt}>
                  <Icon
                    family="MaterialIcons"
                    name="mic"
                    size={20}
                    color={Theme.mainColor}
                  />
                </View>
                <Text style={styles.shoptxt}>Singing</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.shoppingCotainer}>
              <TouchableOpacity style={styles.shoppingbody}>
                <View style={styles.shoppingtxt}>
                  <Icon
                    family="FontAwesome"
                    name="edit"
                    size={20}
                    color={Theme.mainColor}
                  />
                </View>
                <Text style={styles.shoptxt}>Designing</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.shoppingbody}>
                <View style={styles.shoppingtxt}>
                  <Icon
                    family="MaterialCommunityIcons"
                    name="image"
                    size={20}
                    color={Theme.mainColor}
                  />
                </View>
                <Text style={styles.shoptxt}>Photography</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.shoppingCotainer}>
              <TouchableOpacity style={styles.shoppingbody}>
                <View style={styles.shoppingtxt}>
                  <Icon
                    family="FontAwesome"
                    name="list-alt"
                    size={20}
                    color={Theme.mainColor}
                  />
                </View>
                <Text style={styles.shoptxt}>Academics</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.shoppingbody}>
                <View style={styles.shoppingtxt}>
                  <Icon
                    family="MaterialCommunityIcons"
                    name="translate"
                    size={20}
                    color={Theme.mainColor}
                  />
                </View>
                <Text style={styles.shoptxt}>Language</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.shoppingCotainer}>
              <TouchableOpacity style={styles.shoppingbody}>
                <View style={styles.shoppingtxt}>
                  <Icon
                    family="MaterialCommunityIcons"
                    name="draw"
                    size={20}
                    color={Theme.mainColor}
                  />
                </View>
                <Text style={styles.shoptxt}>Painting</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.shoppingbody}>
                <View style={styles.shoppingtxt}>
                  <Icon
                    family="MaterialCommunityIcons"
                    name="chef-hat"
                    size={20}
                    color={Theme.mainColor}
                  />
                </View>
                <Text style={styles.shoptxt}>Cooking</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.shoppingCotainer}>
              <TouchableOpacity style={styles.shoppingbody}>
                <View style={styles.shoppingtxt}>
                  <Icon
                    family="MaterialCommunityIcons"
                    name="currency-inr"
                    size={20}
                    color={Theme.mainColor}
                  />
                </View>
                <Text style={styles.shoptxt}>Buisness</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.shoppingbody}>
                <View style={styles.shoppingtxt}>
                  <Icon
                    family="MaterialCommunityIcons"
                    name="dots-horizontal"
                    size={20}
                    color={Theme.mainColor}
                  />
                </View>
                <Text style={styles.shoptxt}>Other</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  notifisty: {
    borderRadius: 10,
    backgroundColor: "#FFF",
    fontSize: 8,
    textAlign: "center",
    width: 15,
    padding: 2,
    marginTop: -30,
    marginLeft: 10,
    margin: 5,
  },
  linerSty: {
    flex: 1,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    height: 180,
  },
  imgSty: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  userImg: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    borderColor: "#FFF",
    borderWidth: 3,
    overflow: "hidden",
  },
  curSty: {
    color: "gray",
    fontFamily: "Poppins-Medium",
  },
  balSty: {
    color: "#fcad50",
    fontFamily: "Poppins-Bold",
    fontSize: 17,
  },
  balance: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "lightgray",
    paddingBottom: 10,
    padding: 10,
  },
  transfer: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
  },
  gradsty: {
    borderRadius: 10,
    paddingVertical: 5,
  },
  paytypesty: {
    textAlign: "center",
    paddingTop: 10,
    fontSize: 10,
    color: "#000",
    fontFamily: "Poppins-Medium",
  },
  transferbox: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 30,
    borderRadius: 10,
    elevation: 2,
    shadowColor: "lightgrey",
    shadowOffset: { width: -0.5, height: 0.5 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  shoppingCotainer: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 40,
    marginVertical: 10,
  },
  shoppingbody: {
    flex: 0.6,
    flexDirection: "row",
    alignItems: "center",
  },
  shoppingtxt: {
    backgroundColor: "#FFF",
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
  },
  shoptxt: {
    fontFamily: "Poppins-Regular",
    paddingLeft: 15,
    fontSize: 13,
  },
  notifiheader: {
    flex: 0.2,
    backgroundColor: "#fff",
    margin: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    elevation: 10,
    shadowColor: "lightgrey",
    shadowOffset: { width: -0.5, height: 0.5 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  userimg: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});
