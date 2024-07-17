import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Musica = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View
                style={{
                    top: "1%"
                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                        textAlign: "center",
                        top: "10%"
                    }}
                >Musica
                </Text>
                <View
                    style={{
                        flexDirection: "column", top: "10%"
                    }}
                >
                    <View style={{ flexDirection: "row", paddingBottom: 0, alignSelf: "center"}}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Rock")}
                            style={{
                                backgroundColor: "#1b1464",
                                width: 100,
                                top: 40,
                                height: 100,
                                borderRadius: 50,
                                alignSelf: "center",
                                justifyContent: "center",
                                marginRight: 40

                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 25,
                                    alignSelf: "center",
                                    color: "white",
                                }}
                            >Rock</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Rap")}
                            style={{
                                backgroundColor: "#1b1464",
                                width: 100,
                                top: 40,
                                height: 100,
                                borderRadius: 50,
                                alignSelf: "center",
                                justifyContent: "center",
                                marginRight: 40

                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 25,
                                    alignSelf: "center",
                                    color: "white",
                                }}
                            >Rap</Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Popular")}
                            style={{
                                backgroundColor: "#1b1464",
                                width: 100,
                                top: 40,
                                height: 100,
                                borderRadius: 50,
                                alignSelf: "center",
                                justifyContent: "center",
                                marginRight: 40

                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 25,
                                    alignSelf: "center",
                                    color: "white",
                                }}
                            >Popular</Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Cumbia")}
                            style={{
                                backgroundColor: "#1b1464",
                                width: 100,
                                top: 40,
                                height: 100,
                                borderRadius: 50,
                                alignSelf: "center",
                                justifyContent: "center",
                                marginRight: 40

                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 25,
                                    alignSelf: "center",
                                    color: "white",
                                }}
                            >Cumbia</Text>

                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", paddingBottom: 0, alignSelf: "center", top:"2%" }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Punk")}
                            style={{
                                backgroundColor: "#1b1464",
                                width: 100,
                                top: 40,
                                height: 100,
                                borderRadius: 50,
                                alignSelf: "center",
                                justifyContent: "center",
                                marginRight: 40

                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 25,
                                    alignSelf: "center",
                                    color: "white",
                                }}
                            >Punk</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Metal")}
                            style={{
                                backgroundColor: "#1b1464",
                                width: 100,
                                top: 40,
                                height: 100,
                                borderRadius: 50,
                                alignSelf: "center",
                                justifyContent: "center",
                                marginRight: 40

                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 25,
                                    alignSelf: "center",
                                    color: "white",
                                }}
                            >Metal</Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Ska")}
                            style={{
                                backgroundColor: "#1b1464",
                                width: 100,
                                top: 40,
                                height: 100,
                                borderRadius: 50,
                                alignSelf: "center",
                                justifyContent: "center",
                                marginRight: 40

                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 25,
                                    alignSelf: "center",
                                    color: "white",
                                }}
                            >Ska</Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Regue")}
                            style={{
                                backgroundColor: "#1b1464",
                                width: 100,
                                top: 40,
                                height: 100,
                                borderRadius: 50,
                                alignSelf: "center",
                                justifyContent: "center",
                                marginRight: 40

                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 22,
                                    alignSelf: "center",
                                    color: "white",
                                }}
                            >Reggae</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "flex-end",
                 top: "9.5%"}}>
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

            </View>
        </SafeAreaView>

    )
}
export default Musica;    