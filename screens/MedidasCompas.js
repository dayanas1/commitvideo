import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MedidasCompas = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text
                style={{
                    fontSize:30,
                    textAlign: "center",
                    marginTop:"0%"
                }}
                >Medidas de Compas
            </Text>
            <View style={{flexDirection:"row", paddingBottom:0, alignSelf:"center", marginBottom:"-0.6%", top:"1.8%"}}>
                <View 
                    style={{
                        backgroundColor: "#00d9dd",
                        width:40,
                        position:"absolute",
                        //top:1,
                        height:40,
                        borderRadius:50,
                        alignSelf:"center",
                        justifyContent:"center",
                        margin:0,

                    }}
                >
                </View>
                <Image
                    source={require('../image/calibrador.png')}
                    style={{
                        width:20,
                        padding:"1",
                        height:22,
                        alignSelf:"center",
                        margin:10,
                    }}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("Medi")}
                    style={{
                        backgroundColor: "#2596be",
                        marginTop: "1%",
                        width: "30%",
                        padding: 10,
                        alignSelf: "center",
                        borderRadius: 10,
                        marginLeft:10,
                        //bottom:1  
                    }}
                >
                    <Text
                        style={{
                            fontSize: 15,
                            textAlign: "center",
                            color: "#1b1464",
                        }}
                    >1/4</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", paddingBottom:0, alignSelf:"center", marginBottom:"-0.6%", top:"1.8%"}}>
                <View 
                    style={{
                        backgroundColor: "#00d9dd",
                        width:40,
                        position:"absolute",
                        //top:1,
                        height:40,
                        borderRadius:50,
                        alignSelf:"center",
                        justifyContent:"center",
                        margin:0,

                    }}
                >
                </View>
                <Image
                    source={require('../image/calibrador.png')}
                    style={{
                        width:20,
                        padding:"1",
                        height:22,
                        alignSelf:"center",
                        margin:10,
                    }}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("Medi")}
                    style={{
                        backgroundColor: "#2596be",
                        marginTop: "1%",
                        width: "30%",
                        padding: 10,
                        alignSelf: "center",
                        borderRadius: 10,
                        marginLeft:10,
                        //bottom:1  
                    }}
                >
                    <Text
                        style={{
                            fontSize: 15,
                            textAlign: "center",
                            color: "#1b1464",
                        }}
                    >2/4</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", paddingBottom:0, alignSelf:"center", marginBottom:"-0.6%", top:"1.8%"}}>
                <View 
                    style={{
                        backgroundColor: "#00d9dd",
                        width:40,
                        position:"absolute",
                        //top:1,
                        height:40,
                        borderRadius:50,
                        alignSelf:"center",
                        justifyContent:"center",
                        margin:0,

                    }}
                >
                </View>
                <Image
                    source={require('../image/calibrador.png')}
                    style={{
                        width:20,
                        padding:"1",
                        height:22,
                        alignSelf:"center",
                        margin:10,
                    }}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("Medi")}
                    style={{
                        backgroundColor: "#2596be",
                        marginTop: "1%",
                        width: "30%",
                        padding: 10,
                        alignSelf: "center",
                        borderRadius: 10,
                        marginLeft:10,
                        //bottom:1  
                    }}
                >
                    <Text
                        style={{
                            fontSize: 15,
                            textAlign: "center",
                            color: "#1b1464",
                        }}
                    >3/4</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", paddingBottom:0, alignSelf:"center", marginBottom:"-0.6%", top:"1.8%"}}>
                <View 
                    style={{
                        backgroundColor: "#00d9dd",
                        width:40,
                        position:"absolute",
                        //top:1,
                        height:40,
                        borderRadius:50,
                        alignSelf:"center",
                        justifyContent:"center",
                        margin:0,

                    }}
                >
                </View>
                <Image
                    source={require('../image/calibrador.png')}
                    style={{
                        width:20,
                        padding:"1",
                        height:22,
                        alignSelf:"center",
                        margin:10,
                    }}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("Medi")}
                    style={{
                        backgroundColor: "#2596be",
                        marginTop: "1%",
                        width: "30%",
                        padding: 10,
                        alignSelf: "center",
                        borderRadius: 10,
                        marginLeft:10,
                        //bottom:1  
                    }}
                >
                    <Text
                        style={{
                            fontSize: 15,
                            textAlign: "center",
                            color: "#1b1464",
                        }}
                    >4/4</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    }
export default MedidasCompas;