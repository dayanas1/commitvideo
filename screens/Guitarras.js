import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Guitarras = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView
            style={{
                width: "auto",
                height: "auto",
            }}
        >
            <View
                style={{
                    top:"5%"
                }}
            >
                {/* <Text
                style={{
                    fontSize:30,
                    textAlign: "center",
                    marginTop:"0%"
                }}
                >Guitarras
            </Text> */}
                <View style={{ flexDirection: "row", alignSelf: "center", top: "10%" }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Guitarras")}
                        style={{
                            backgroundColor: "#00d9dd",
                            marginTop: -5,
                            width: "40%",
                            //padding: 1,
                            alignSelf: "center",
                            borderRadius: 10,
                            height: "98%",
                            margin: 1
                        }}>
                        <Image source={require('../image/GuitarraAcus.png')}
                            style={{
                                width: 200,
                                height: 200,
                                //padding:"1",
                                alignSelf: "center",
                                margin: 10
                            }}

                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#1b1464",
                            marginTop: -5,
                            width: "40%",
                            //padding: 1,
                            alignSelf: "center",
                            borderRadius: 10,
                            height: "98%",
                            margin: 1
                        }}>
                        <Image source={require('../image/GuitarraElec.png')}
                            style={{
                                width: 200,
                                height: 200,
                                //padding:"1",
                                alignSelf: "center",
                                margin: 10
                            }}

                        />

                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "flex-end",
                 top: "15%"}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Menuss")}
                        style={{
                            //backgroundColor:"green",
                            marginTop: 1,
                            width: 40,
                            height: 40,
                            padding: 1,
                            alignSelf: "flex-end",
                            borderRadius: 50,
                            top: 1,
                            right: 1,
                            margin: 1,
                            marginBottom: 5
                        }}
                    >
                        <Image
                            source={require('../image/Refresh.png')}
                            style={{
                                width: 26,
                                height: 29,
                                alignSelf: "center",
                                top: 1,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    )
}
export default Guitarras;    