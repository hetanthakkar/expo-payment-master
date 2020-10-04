import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainApp from "./MainApp/App";
import { useFonts } from "@use-expo/font";

export default function App() {
    let [fontsLoaded] = useFonts({
        "Poppins-Light":
            "https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap",
        "Poppins-Thin":
            "https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap",
        "Poppins-Regular":
            "https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap",
        "Poppins-Medium":
            "https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap",
        "Poppins-Bold":
            "https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap",
    });

    if (fontsLoaded) {
        return <MainApp />;
    } else return null;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
