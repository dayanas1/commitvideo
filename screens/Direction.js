import React from "react";
import {View, Text, StyleSheet, TouchableOpacity,Image} from "react-native";
import {useNavigation} from "@react-navigation/native";

//import Orientation from 'react-native-orientation-locker';

const Direction = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text
                style={{
                    fontSize:30,
                    textAlign: "center",
                    marginTop:"0%"
                }}
                >Dirección
            </Text>
            <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center"}}>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#00d9dd",
                        marginTop: "1%",
                        width: "30%",
                        //padding: 1,
                        alignSelf: "center",
                        borderRadius: 10,
                        height:180,
                        margin:1
                    }}>
                        <View style={{
                            backgroundColor: "#1b1464",
                            width:100,
                            position:"absolute",
                            top:40,
                            height:100,
                            borderRadius:50,
                            alignSelf:"center",
                            justifyContent:"center",

                        }}
                        >
                            <Text
                                style={{
                                    fontWeight:"800",
                                    fontSize:50,
                                    alignSelf:"center",
                                    color:"white",
                                }}                            
                            >On</Text>

                        </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#1b1464",
                        marginTop: "1%",
                        width: "30%",
                        //padding: 80,
                        alignSelf: "center",
                        borderRadius: 10,
                        height:180,
                        margin:1
                    }}>
                        <View style={{
                            backgroundColor: "#00d9dd",
                            width:100,
                            position:"absolute",
                            top:40,
                            height:100,
                            borderRadius:50,
                            alignSelf:"center",
                            justifyContent:"center",

                        }}
                        >
                            <Text
                                style={{
                                    fontWeight:"800",
                                    fontSize:50,
                                    alignSelf:"center",
                                    color:"white",
                                }}                            
                            >Off</Text>

                        </View>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"flex-end", top:"1%", marginVertical:"2%"}}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Settings")}
                    style={{
                        //backgroundColor:"green",
                        marginTop: 1,
                        width: 40,
                        height:40,
                        padding: 1,
                        alignSelf: "flex-end",
                        borderRadius: 50,
                        top:1,
                        right:5,
                        margin:1,
                        marginBottom:5
                    }}
                >
                    <Image
                        source={require('../image/Refresh.png')}
                        style={{
                            width:26,
                            height:29,
                            alignSelf:"center",
                            top:1,
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
    }
export default Direction;    