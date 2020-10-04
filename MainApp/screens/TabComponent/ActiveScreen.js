import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from '../../common/icons';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';
import Theme from '../../styles/Theme';
import { CreditCardInput } from 'react-native-credit-card-input';

export default class ActiveScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                <ScrollView>
                    <Text style={styles.paysty}>Payment Methods</Text>

                    <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
                        <View style={{ marginHorizontal: 15, paddingVertical: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon style={{ padding: 5 }} family="Octicons" name="primitive-dot" size={15} />
                                <Text style={styles.payment}>Card Payment</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', borderBottomWidth: 1 }}>
                                <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate("CreditCard")} >
                                    <Icon style={{ paddingVertical: 5 }} family="FontAwesome" name="credit-card-alt" size={35} color='#fc0f84' />
                                    <Text style={{ fontSize: 10, fontFamily: 'Poppins-Light' }}>Credit Card</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate("CreditCard")}>
                                    <Icon style={{ paddingVertical: 5 }} family="FontAwesome" name="credit-card-alt" size={35} color='#fc0f84' />
                                    <Text style={{ fontSize: 10, fontFamily: 'Poppins-Light' }}>Debit Card</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ marginHorizontal: 15, paddingVertical: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon style={{ padding: 5 }} family="Octicons" name="primitive-dot" size={15} />
                                <Text style={styles.payment}>Other Payments</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', borderBottomWidth: 1 }}>
                                <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate("CreditCard")}>
                                    <Icon style={{ paddingVertical: 5 }} family="FontAwesome" name="bank" size={33} color='#fc0f84' />
                                    <Text style={{ fontSize: 10, fontFamily: 'Poppins-Light' }}>Net Banking</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate("CreditCard")}>
                                    <Icon style={{ paddingVertical: 5 }} family="FontAwesome" name="credit-card-alt" size={35} color='#fc0f84' />
                                    <Text style={{ fontSize: 10, fontFamily: 'Poppins-Light' }}>UPI Payment</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate("CreditCard")}>
                                    <Icon style={{ paddingVertical: 5 }} family="FontAwesome" name="cc-paypal" size={35} color='#fc0f84' />
                                    <Text style={{ fontSize: 10, fontFamily: 'Poppins-Light' }}>Paypal </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View >
        );
    }
}
const styles = StyleSheet.create({
    paysty: {
        fontFamily: 'Poppins-Bold',
        color: '#000',
        fontSize: 19,
        margin: 15,
        paddingTop: 15
    },
    card: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    payment: {
        fontSize: 17,
        color: '#000',
        paddingBottom: 5,
        fontFamily: 'Poppins-Regular'
    }
});

