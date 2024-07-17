import React from "react";
import {View, Text, StyleSheet, TouchableOpacity,Image,SafeAreaView} from "react-native";
import {useNavigation} from "@react-navigation/native";

//import Orientation from 'react-native-orientation-locker';

const HomeScreen = () => {
    
    const navigation = useNavigation();

    return (
        <SafeAreaView
            style={{
                flex:1,
                top:2
            }}
        >
            <View
            style={{
                marginTop:"0%"
            }}
        >
            <Text
                style={{
                    fontSize:30,
                    textAlign: "center",
                    marginTop:"0%",
                    //padding:"90"
                }}
                >Configuracion</Text>
                <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center"}}>
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
                        onPress={() => navigation.navigate("StackCalibrador")}
                        style={{
                            backgroundColor: "#2596be",
                            marginTop: "1%",
                            width: "30%",
                            padding: 10,
                            alignSelf: "center",
                            borderRadius: 10,
                            marginLeft:10
                            
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                textAlign: "center",
                                color: "#1b1464",
                            }}
                        >Calibrador de Hertz</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center"}}>
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
                        source={require('../image/direccion.png')}
                        style={{
                            width:20,
                            padding:"1",
                            height:22,
                            alignSelf:"center",
                            margin:10
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Stack3")}
                        style={{
                            backgroundColor: "#2596be",
                            marginTop: "1%",
                            width: "30%",
                            padding: 10,
                            alignSelf: "center",
                            borderRadius: 10,
                            marginLeft:10
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                textAlign: "center",
                                color: "#1b1464",
                            }}
                        >Dirección</Text>
                    </TouchableOpacity> 
                </View>
                <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center"}}>
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
                        source={require('../image/idioma_notacion.png')}
                        style={{
                            width:20,
                            padding:"1",
                            height:22,
                            alignSelf:"center",
                            margin:10
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Stack4")}
                        style={{
                            backgroundColor: "#2596be",
                            marginTop: "1%",
                            width: "30%",
                            padding: 10,
                            alignSelf: "center",
                            borderRadius: 10,
                            marginLeft:10,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                textAlign: "center",
                                color: "#1b1464",
                            }}
                        >Idioma de Notación</Text>
                    </TouchableOpacity>     
                </View>
                <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center"}}>
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
                        source={require('../image/metronomo.png')}
                        style={{
                            width:20,
                            padding:"30",
                            height:19,
                            alignSelf:"center",
                            margin:10
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Stack25")}
                        style={{
                            backgroundColor: "#2596be",
                            marginTop: "1%",
                            width: "30%",
                            padding: 10,
                            alignSelf: "center",
                            borderRadius: 10,
                            marginLeft:10,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                textAlign: "center",
                                color: "#1b1464",
                            }}
                        >Metronomo</Text>
                    </TouchableOpacity>
                </View>             
        </View>

        </SafeAreaView>
        
    )
    }
export default HomeScreen;    