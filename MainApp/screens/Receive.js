import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import Icon from '../common/icons';
import Theme from '../styles/Theme';
import { TextInput } from 'react-native-gesture-handler';

export default class Receive extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Theme.bgcolor }}>
              <StatusBar backgroundColor="#020cab" barStyle="light-content" />
                <View style={styles.headContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon family="MaterialIcons" name="arrow-back" size={25} color="#FFF" />
                    </TouchableOpacity>
                    <Text style={styles.headTxt}>Request</Text>
                </View>
                <ScrollView>
                    <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: 'lightgray', alignItems: 'center' }}>
                        <View style={styles.imgContainer}>
                            <Image style={styles.userimg} source={require('../assets/img/boy.png')} />
                        </View>
                        <View style={styles.userdetails}>
                            <Text style={{ fontSize: 18, color: '#000', fontFamily: 'Poppins-Light' }}>Chisto</Text>
                            <Text style={{ fontSize: 12, color: '#000', fontFamily: 'Poppins-Thin' }}>9087654319</Text>
                        </View>
                        <Text style={styles.viewhisSty} onPress={() => this.props.navigation.navigate("TransferScreen")}>View History</Text>
                    </View>
                    <View style={styles.acTxt}>
                        <Text style={{ fontFamily: 'Poppins-Medium' }}>Account Details</Text>
                    </View>
                    <View style={{ margin: 5, marginLeft: 15 }}>
                        <Text style={{ fontSize: 13, fontFamily: 'Poppins-Regular' }}>Bank Name:</Text>
                        <Text style={{ fontSize: 13, fontFamily: 'Poppins-Regular' }}>IFSC code:</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, margin: 15, paddingHorizontal: 15 }}>
                        <Icon family="FontAwesome" name="rupee" size={25} />
                        <TextInput style={{ paddingLeft: 10, fontSize: 16 }}
                            keyboardType='number-pad'
                            placeholder="Enter Amount"
                        />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, margin: 15, paddingHorizontal: 15 }}>
                        <TextInput style={{ flex: 1, paddingLeft: 10, fontSize: 16, fontFamily: 'Poppins-ExtraLightItalic' }}
                            keyboardType='email-address'
                            placeholder="Add a message (Optioncal)"
                        />
                    </View>
                    <TouchableOpacity style={styles.reqContainer}>
                        <Text style={styles.reqSty}>REQ</Text>
                    </TouchableOpacity>

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
        paddingLeft: 10,
        justifyContent: 'center',
    },
    acTxt: {
        backgroundColor: '#FFF',
        paddingVertical: 5,
        paddingLeft: 15,
        marginVertical: 10
    },
    viewhisSty: {
        fontSize: 10,
        color: '#020cab',
        paddingRight: 20,
        fontFamily: 'Poppins-MediumItalic'
    },
    reqContainer: {
        paddingVertical: 10,
        backgroundColor: '#020cab',
        marginVertical: 30,
        borderRadius: 50,
        marginHorizontal: 30
    },
    reqSty: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Poppins-Bold'
    }
});