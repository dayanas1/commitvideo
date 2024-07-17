import React from "react";

import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ModuloCalificacion() {
    const navigation = useNavigation();
    return (
        <SafeAreaView
            style={{
                width: "100%",
                height: "auto",
            }}
        >
            <View
                style={{
                    top: "10%",
                    width: "auto",
                    height: "auto",
                }}
            >
                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        //top: "1%"
                    }}
                >
                    <Text
                        style={{
                            fontSize: 30,
                            textAlign: "center",
                            marginTop: "0%",
                            //marginVertical: "3%"
                        }}
                    >Califiación
                    </Text>
                    <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", top: "5%", width: "60%", height: "1%" }}>
                        <View
                            style={{
                                backgroundColor: "#1b1464",
                                width: 120,
                                height: 120,
                                position: "absolute",
                                top: 70,
                                borderRadius: 100,
                                alignSelf: "flex-start",
                                left: -120,
                                //marginHorizontal: 200,

                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 40,
                                    alignSelf: "center",
                                    top: 25,
                                    color: "white"
                                }}
                            >AI
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Teoricas")}
                            style={{
                                backgroundColor: "#1b1464",
                                //marginTop: "1%",
                                width: 125,
                                height: 125,
                                //padding: 1,
                                alignSelf: "center",
                                borderRadius: 200,
                                //margin: 100,
                                top: 60,
                                marginLeft: 140
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 23,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 39
                                }}
                            >Teoricas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Practicas")}
                            style={{
                                backgroundColor: "#1b1464",
                                //marginTop: "1%",
                                width: 125,
                                height: 125,
                                //padding: 1,
                                alignSelf: "center",
                                borderRadius: 200,
                                top: 140,
                                marginLeft: 80
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 22,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 39
                                }}
                            >Practicas</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "flex-end", top: "1%" }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Usuario")}
                                style={{
                                    //backgroundColor:"green",
                                    //marginTop: 1,
                                    width: 40,
                                    height: 40,
                                    //padding: 1,
                                    alignSelf: "flex-end",
                                    borderRadius: 50,
                                    //top: -100,
                                    //right: 5,
                                    //margin: 1,
                                    //marginBottom: 5,
                                    left: 110,
                                    top: 270
                                }}
                            >
                                <Image
                                    source={require('../image/Refresh.png')}
                                    style={{
                                        width: 26,
                                        height: 29,
                                        alignSelf: "center",
                                        top: 1,
                                        //tintColor:"green"
                                    }}
                                />
                            </TouchableOpacity>
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
                                    top: 270,
                                    //right:1,
                                    margin: 1,
                                    marginBottom: 1,
                                    left: 13
                                }}
                            >
                                <Image
                                    source={require('../image/iniciar.png')}
                                    style={{
                                        width: 24.3,
                                        height: 30,
                                        alignSelf: "center",
                                        top: 1,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

            </View>
        </SafeAreaView>

    )
}

export default ModuloCalificacion;