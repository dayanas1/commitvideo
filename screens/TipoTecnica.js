import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAvatar } from '../screens/AvatarProvider';

const TipoTecnica = () => {
    const navigation = useNavigation();
    const { selectedAvatar } = useAvatar();

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
                >Tipo de Tecnica
                </Text>
                <View
                    style={{
                        flexDirection: "row", paddingBottom: 1, top: "10%", marginLeft: 1
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "#1b1464",
                            width: 100,
                            height: 100,
                            position: "absolute",
                            top: "10%",
                            borderRadius: 50,
                            alignSelf: "flex-start",
                            left: 40,
                            marginHorizontal: 10,
                        }}
                    >
                        {selectedAvatar ? (
                            <Image
                                source={selectedAvatar}
                                style={{
                                    width: 90,
                                    height: 90,
                                    borderRadius: 45,
                                    alignSelf: "center",
                                    top: 5,
                                }}
                            />
                        ) : (
                            <Text
                                style={{
                                    fontSize: 40,
                                    alignSelf: "center",
                                    top: 18,
                                    color: "white"
                                }}
                            >AI</Text>
                        )}
                    </View>
                    <View style={{ flexDirection: "column", paddingBottom: 2, alignSelf: "center", top: "3%", marginLeft: 300 }}>
                        <View
                            style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "flex-start", marginBottom: 30 }}
                        >

                            <View
                                style={{
                                    backgroundColor: "#00d9dd",
                                    width: 40,
                                    position: "absolute",
                                    top: 10,
                                    height: 40,
                                    borderRadius: 50,
                                    alignSelf: "center",
                                    justifyContent: "center",
                                    margin: 0,

                                }}
                            >
                            </View>
                            <Image
                                source={require('../image/calibrador.png')}
                                style={{
                                    width: 20,
                                    height: 22,
                                    alignSelf: "center",
                                    margin: 10,
                                    top: 3
                                }}
                            />
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Punteo")}
                                style={{
                                    backgroundColor: "#2596be",
                                    width: "70%",
                                    padding: 1,
                                    alignSelf: "center",
                                    borderRadius: 10,
                                    marginLeft: 10,
                                    height: 50,
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 30,
                                        textAlign: "center",
                                        color: "#1b1464",
                                    }}
                                >Punteo</Text>
                            </TouchableOpacity>

                        </View>
                        <View
                            style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "flex-start", marginBottom: 30 }}
                        >

                            <View
                                style={{
                                    backgroundColor: "#00d9dd",
                                    width: 40,
                                    position: "absolute",
                                    top: 10,
                                    height: 40,
                                    borderRadius: 50,
                                    alignSelf: "center",
                                    justifyContent: "center",
                                    margin: 0,

                                }}
                            >
                            </View>
                            <Image
                                source={require('../image/calibrador.png')}
                                style={{
                                    width: 20,
                                    height: 22,
                                    alignSelf: "center",
                                    margin: 10,
                                    top: 3
                                }}
                            />
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Rasgueo")}
                                style={{
                                    backgroundColor: "#2596be",
                                    width: "70%",
                                    padding: 1,
                                    alignSelf: "center",
                                    borderRadius: 10,
                                    marginLeft: 10,
                                    height: 50,
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 30,
                                        textAlign: "center",
                                        color: "#1b1464",
                                    }}
                                >Rasgueo</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{
                            flexDirection: "row", paddingBottom: 2, alignSelf: "flex-end",
                            top: "9%"
                        }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Menuss")}
                                style={{
                                    marginTop: 1,
                                    width: 40,
                                    height: 40,
                                    padding: 1,
                                    alignSelf: "flex-end",
                                    borderRadius: 50,
                                    right: 1,
                                    margin: 1,
                                    left: 100
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
            </View >
        </SafeAreaView>
    )
}
export default TipoTecnica;
