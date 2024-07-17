import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Biblioteca = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View
                style={{
                    top: "5%"
                }}
            >
                {/* <Text
                style={{
                    fontSize:30,
                    textAlign: "center",
                    marginTop:"0%"
                }}
                >Biblioteca
            </Text> */}
                <View
                    style={{
                        flexDirection: "column", top: "15%"
                    }}
                >
                    <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", top: "3%" }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >C</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >C#</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >D</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >D#</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >E</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >F</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >F#</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >G</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >G#</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >A</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >A#</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >B</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", top: "3%" }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >Major</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >Menor</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >Maj7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >Maj12</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >9</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >Sus</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={{
                                backgroundColor: "#19226c",
                                width: "7%",
                                padding: 2,
                                height: 50,
                                borderRadius: 50,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "800",
                                    fontSize: 15,
                                    alignSelf: "center",
                                    color: "white",
                                    top: 10,
                                }}
                            >Add</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "flex-start", top: "27%" }}>
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
                                //top: 270,
                                //right:1,
                                margin: 1,
                                marginBottom: 1,
                                //left: 13
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
                                //top: 270,
                                //right:1,
                                margin: 1,
                                marginBottom: 1,
                                //left: 13
                            }}
                        >
                            <Image
                                source={require('../image/pausa.png')}
                                style={{
                                    width: 24.3,
                                    height: 30,
                                    alignSelf: "center",
                                    top: 1,
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
                                //top: 270,
                                //right:1,
                                margin: 1,
                                marginBottom: 1,
                                //left: 13
                            }}
                        >
                            <Image
                                source={require('../image/volumen.png')}
                                style={{
                                    width: 24.3,
                                    height: 30,
                                    alignSelf: "center",
                                    top: 1,
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
                                //top: 270,
                                //right:1,
                                margin: 1,
                                marginBottom: 1,
                                //left: 13
                            }}
                        >
                            <Image
                                source={require('../image/mute.png')}
                                style={{
                                    width: 35,
                                    height: 30,
                                    alignSelf: "center",
                                    top: 1,
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
                                //top: 270,
                                //right:1,
                                margin: 1,
                                marginBottom: 1,
                                //left: 13
                            }}
                        >
                            <Image
                                source={require('../image/bemol.png')}
                                style={{
                                    width: 15,
                                    height: 31,
                                    alignSelf: "center",
                                    top: 1,
                                }}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Menuss")}
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
                                left: 540,
                                //top: 270
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

                    </View>
                </View>


            </View>
        </SafeAreaView>

    )
}
export default Biblioteca;



