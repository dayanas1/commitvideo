import React from "react";
import {View, Text, StyleSheet, TouchableOpacity,Image} from "react-native";
import {useNavigation} from "@react-navigation/native";

//import Orientation from 'react-native-orientation-locker';

const Calibrador = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text
                style={{
                    fontSize:30,
                    textAlign: "center",
                    marginTop:"0%",
                }}
                >Calibrador</Text>
                <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center", top:"10%"}}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: "#1b1464",
                                marginTop: "1%",
                                width: 60,
                                height:60,
                                padding: 1,
                                alignSelf: "center",
                                borderRadius: 50,
                                marginLeft:10,
                                
                            }}
                        >
                            <Image source={require('../image/Menos.png')}
                                style={{
                                    width:20,
                                    height:22,
                                    alignSelf:"center",
                                    //margin:10,
                                    top:15
                                    
                                }}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() => navigation.navigate("")}
                        style={{
                            backgroundColor: "#00d9dd",
                            marginTop: "1%",
                            width: "30%",
                            padding: 1,
                            alignSelf: "center",
                            borderRadius: 10,
                            marginLeft:10,
                            height:"150%",
                            
                        }}
                        >
                        <Text
                            style={{
                                fontSize: 40,
                                textAlign: "center",
                                color: "white",
                                top:20,
                            }}
                        >440 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                backgroundColor: "#1b1464",
                                marginTop: "1%",
                                width: 60,
                                height:60,
                                padding: 1,
                                alignSelf: "center",
                                borderRadius: 50,
                                marginLeft:10,
                                
                            }}
                        >
                            <Image source={require('../image/Mas.png')}
                                style={{
                                    width:20,
                                    height:22,
                                    alignSelf:"center",
                                    //margin:10,
                                    top:19
                                }}/>
                        </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"flex-end", top:"15%"}}>
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
                            height:29.3,
                            alignSelf:"center",
                            top:30,
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Calibrador;    