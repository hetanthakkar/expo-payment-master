import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList ,StatusBar} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from '../common/icons';
import Theme from "../styles/Theme";

export default class ReceiveContacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transfer: [
                { userimage: require('../assets/img/girl.png'), username: 'Natasha', number: 90876543121 },
                { userimage: require('../assets/img/woman.png'), username: 'Amy Jones', number: 90876543121 },
                { userimage: require('../assets/img/man.png'), username: 'Smith', number: 90876543121 },
                { userimage: require('../assets/img/boy.png'), username: 'Chisto', number: 90876543121 },
                { userimage: require('../assets/img/boy.png'), username: 'Chisto', number: 90876543121 },
                { userimage: require('../assets/img/girl.png'), username: 'Natasha', number: 90876543121 },
                { userimage: require('../assets/img/woman.png'), username: 'Amy Jones', number: 90876543121 },
                { userimage: require('../assets/img/man.png'), username: 'Smith', number: 90876543121 },
                { userimage: require('../assets/img/boy.png'), username: 'Chisto', number: 90876543121 },
                { userimage: require('../assets/img/girl.png'), username: 'Natasha', number: 90876543121 },
                { userimage: require('../assets/img/woman.png'), username: 'Amy Jones', number: 90876543121 },
                { userimage: require('../assets/img/man.png'), username: 'Smith', number: 90876543121 },
            ]
        }
    }

    _renderTransfer(rowdata) {
        return (
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Receive")}>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row'}}>
                        <View style={styles.imgContainer}>
                            <Image style={styles.userimg} source={rowdata.item.userimage} />
                        </View>
                        <View style={styles.userdetails}>
                            <Text style={{ fontSize: 18, color: '#000',fontFamily: 'Poppins-Light'  }}>{rowdata.item.username}</Text>
                            <Text style={{ fontSize: 10, color: '#000',fontFamily: 'Poppins-Thin' }}>{rowdata.item.number}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Theme.bgcolor }}>
                 <StatusBar backgroundColor="#020cab" barStyle="light-content" />
                <View style={styles.headContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon family="MaterialIcons" name="arrow-back" size={25} color="#FFF" />
                    </TouchableOpacity>
                    <Text style={styles.headTxt}>Contacts</Text>
                </View>

                <ScrollView>
                    <FlatList
                        data={this.state.transfer}
                        renderItem={this._renderTransfer.bind(this)}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#020cab'
    },
    headTxt: {
        color: 'white',
        fontSize: 17,
        fontFamily: 'Poppins-Bold',
        marginHorizontal: 20
    },
    container: {
        paddingHorizontal: 20,
    },
    txtStl: {
        flex: 0.9,
        color: 'black',
        paddingLeft: 5,
    },
    imgContainer: {
        backgroundColor: "#fff",
        marginHorizontal: 10,
        marginVertical: 10,
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
        overflow: "hidden",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        elevation: 2,
        shadowColor: 'lightgrey',
        shadowOffset: { width: -0.5, height: 0.5 },
        shadowOpacity: 0.2,
        shadowRadius: 1
    },
    userimg: {
        width: 40,
        height: 40,
        resizeMode: "contain"
    },
    userdetails: {
        flex: 1,
        paddingLeft:10,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },
});