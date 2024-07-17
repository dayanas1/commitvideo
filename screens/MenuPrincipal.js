import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAvatar } from '../screens/AvatarProvider'; 

const MenuPrincipal = () => {
    const navigation = useNavigation();
    const { selectedAvatar } = useAvatar();

    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "7%"
                }}
            >Menu
            </Text>
            <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", top: "3%" }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Afinador")}
                    style={{
                        backgroundColor: "#19226c",
                        width: "18%",
                        padding: 2,
                        height: 50,
                        borderRadius: 50,
                    }}
                >
                    <Image
                        source={require('../image/metro.png')}
                        style={{
                            width: 20,
                            height: 30,
                            padding: "30",
                            alignSelf: "center",
                            margin: 10,
                            tintColor: "white",
                            top: 1
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Guitarras")}
                    style={{
                        backgroundColor: "#443e7e",
                        width: "18%",
                        padding: 2,
                        height: 50,
                        borderRadius: 50,
                    }}
                >
                    <Image
                        source={require('../image/guitarrass.png')}
                        style={{
                            width: 30,
                            height: 30,
                            padding: "30",
                            alignSelf: "center",
                            margin: 10,
                            tintColor: "white",
                            top: 1
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Ejercicios")}
                    style={{
                        backgroundColor: "#6c6898",
                        width: "18%",
                        padding: 1,
                        height: 50,
                        borderRadius: 50,
                    }}
                >
                    <Image
                        source={require('../image/ejercicios.png')}
                        style={{
                            width: 20,
                            height: 30,
                            padding: "30",
                            alignSelf: "center",
                            margin: 10,
                            tintColor: "white",
                            top: 1
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Biblioteca")}
                    style={{
                        backgroundColor: "#807da5",
                        width: "18%",
                        padding: 2,
                        height: 50,
                        borderRadius: 50,
                    }}
                >
                    <Image
                        source={require('../image/biblioteca.png')}
                        style={{
                            width: 25,
                            height: 30,
                            padding: "30",
                            alignSelf: "center",
                            margin: 10,
                            tintColor: "white",
                            top: 1
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Musica")}
                    style={{
                        backgroundColor: "#a9a7bf",
                        width: "18%",
                        padding: 2,
                        height: 50,
                        borderRadius: 50,
                    }}
                >
                    <Image
                        source={require('../image/musica.png')}
                        style={{
                            width: 30,
                            height: 30,
                            padding: "30",
                            alignSelf: "center",
                            margin: 10,
                            tintColor: "white",
                            top: 1
                        }}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("Usuario")}
                style={{
                    backgroundColor: "#1b1464",
                    marginTop: 1,
                    width: 100,
                    height: 100,
                    padding: 1,
                    alignSelf: "center",
                    borderRadius: 50,
                    top: 80,
                    right: 5,
                    margin: 1,
                    marginBottom: 5
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
                            fontWeight: "800",
                            fontSize: 50,
                            alignSelf: "center",
                            color: "white",
                            top: 10,
                        }}
                    >
                        AI
                    </Text>
                )}
            </TouchableOpacity>
            <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "flex-end", top: "12%" }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Menuss")}
                    style={{
                        marginTop: 1,
                        width: 40,
                        height: 40,
                        padding: 1,
                        alignSelf: "flex-end",
                        borderRadius: 50,
                        top: 1,
                        right: 5,
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
    );
}

export default MenuPrincipal;


{/* <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center"}}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Stack3")}
                     style={{
                        backgroundColor: "purple",
                        marginTop: "1%",
                        width: "30%",
                        padding: 50,
                        alignSelf: "center",
                        borderRadius: 10,
                        height:"100%",
                        margin:1
                    }}>
                        <Image source={require('../image/calibrador.png')}
                            style={{
                                width:50,
                                padding:"1",
                                height:52,
                                alignSelf:"center",
                                margin:10
                            }}
                        
                        />
                </TouchableOpacity>
                <TouchableOpacity style={{
                        backgroundColor: "purple",
                        marginTop: "1%",
                        width: "30%",
                        padding: 50,
                        alignSelf: "center",
                        borderRadius: 10,
                        height:"100%",
                    }}>
                        <Image source={require('../image/calibrador.png')}
                            style={{
                                width:50,
                                padding:"1",
                                height:52,
                                alignSelf:"center",
                                margin:10
                            }}
                        />
                </TouchableOpacity>
            </View> */}