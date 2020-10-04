import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ThemeStyle from '../styles/Theme';
import { NavigationActions, StackActions } from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    componentDidMount() {
        var timer = setTimeout(() => {
            this.setState({
                visible: !this.state.visible
            });
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'SliderScreen' })],
            });
            this.props.navigation.dispatch(resetAction);
        }, 3000);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient colors={['#fc0f84', '#020cab']}
                    start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={{ flex: 1 }}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Image style={styles.logo} source={require("./../assets/img/logo.png")} />
                        <Text style={{color:'#FFF',fontSize:20,fontFamily:'Poppins-Bold'}}>Money Pay</Text>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 150,
        resizeMode: "contain",
    },
})