import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Ejercicios = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View
                Style={{
                    top: "1%"
                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                        textAlign: "center",
                        top: "15%"
                    }}
                >Ejercicios
                </Text>
                <View
                    style={{
                        flexDirection: "column", top: "25%"
                    }}
                >
                    <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center" }}>
                        <View
                            style={{
                                backgroundColor: "#00d9dd",
                                width: 40,
                                height: 40,
                                position: "absolute",
                                //top:1,
                                borderRadius: 50,
                                alignSelf: "center",
                                justifyContent: "center",
                                margin: 0,

                            }}
                        >
                        </View>
                        <Image
                            source={require('../image/calentamiento.png')}
                            style={{
                                width: 20,
                                //padding:0,
                                height: 32,
                                alignSelf: "center",
                                margin: 10,
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => navigation.navigate("TipoTecnica")}
                            style={{
                                backgroundColor: "#2596be",
                                marginTop: "1%",
                                width: "30%",
                                padding: 10,
                                alignSelf: "center",
                                borderRadius: 10,
                                marginLeft: 10

                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 15,
                                    textAlign: "center",
                                    color: "#1b1464",
                                }}
                            >Calentamiento</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center" }}>
                        <View
                            style={{
                                backgroundColor: "#00d9dd",
                                width: 40,
                                position: "absolute",
                                //top:1,
                                height: 40,
                                borderRadius: 50,
                                alignSelf: "center",
                                justifyContent: "center",
                                margin: 0,

                            }}
                        >
                        </View>
                        <Image
                            source={require('../image/memoria.png')}
                            style={{
                                width: 27,
                                //padding:"1",
                                height: 25,
                                alignSelf: "center",
                                margin: 10,
                                right: 3,
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => navigation.navigate("TipoTecnica")}
                            style={{
                                backgroundColor: "#2596be",
                                marginTop: "1%",
                                width: "30%",
                                padding: 10,
                                alignSelf: "center",
                                borderRadius: 10,
                                marginLeft: 10
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 15,
                                    textAlign: "center",
                                    color: "#1b1464",
                                }}
                            >Memoria</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center" }}>
                        <View
                            style={{
                                backgroundColor: "#00d9dd",
                                width: 40,
                                position: "absolute",
                                //top:1,
                                height: 40,
                                borderRadius: 50,
                                alignSelf: "center",
                                justifyContent: "center",
                                margin: 0,

                            }}
                        >
                        </View>
                        <Image
                            source={require('../image/vista.png')}
                            style={{
                                width: 28,
                                //padding:"1",
                                height: 26,
                                alignSelf: "center",
                                margin: 10,
                                right: 3,
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => navigation.navigate("TipoTecnica")}
                            style={{
                                backgroundColor: "#2596be",
                                marginTop: "1%",
                                width: "30%",
                                padding: 10,
                                alignSelf: "center",
                                borderRadius: 10,
                                marginLeft: 10,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 15,
                                    textAlign: "center",
                                    color: "#1b1464",
                                }}
                            >Vista</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center" }}>
                        <View
                            style={{
                                backgroundColor: "#00d9dd",
                                width: 40,
                                position: "absolute",
                                //top:1,
                                height: 40,
                                borderRadius: 50,
                                alignSelf: "center",
                                justifyContent: "center",
                                margin: 0,

                            }}
                        >
                        </View>
                        <Image
                            source={require('../image/oido.png')}
                            style={{
                                width: 22,
                                //padding:"30",
                                height: 23,
                                alignSelf: "center",
                                margin: 10,
                                right: 3,
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => navigation.navigate("TipoTecnica")}
                            style={{
                                backgroundColor: "#2596be",
                                marginTop: "1%",
                                width: "30%",
                                padding: 10,
                                alignSelf: "center",
                                borderRadius: 10,
                                marginLeft: 10,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 15,
                                    textAlign: "center",
                                    color: "#1b1464",
                                }}
                            >Oido</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                    flexDirection: "row", paddingBottom: 2, alignSelf: "flex-end",
                    top: "4%"
                    }}>
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
                            //top: 1,
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
export default Ejercicios;    