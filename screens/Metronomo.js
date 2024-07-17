import React from "react";
import {View, Text, StyleSheet, TouchableOpacity,Image} from "react-native";
import {useNavigation} from "@react-navigation/native";

// import { SafeAreaProvider } from "react-native-safe-area-context";

//import Orientation from 'react-native-orientation-locker';


// function Medidas() {
//     return(
//         <NavigationContainer>
//         <navi.Navigator>
//             <navi.Screen
//                 name="Medidas"
//                 component={MedidasCompas}
//             />
//         </navi.Navigator>
//         </NavigationContainer>
//     )
    
// }
const Metronomo = () => {
    const navigation = useNavigation();
    return (
        <View>
            
            <Text
                style={{
                    fontSize:30,
                    textAlign: "center",
                    marginTop:"0%"
                }}
                >Metronomo
            </Text>
            <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"flex-start", paddingStart:20}}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Medi")}
                    style={{
                        backgroundColor: "#00d9dd",
                        marginTop: "1%",
                        width: "10%",
                        padding: 1,
                        alignSelf: "flex-start",
                        borderRadius: 10,
                        height:30,
                        margin:1
                    }}>
                        <Text
                        style={{
                            fontSize: 20,
                            textAlign: "center",
                            color: "#1b1464",
                            //top:-15,
                            marginTop:1,
                            fontWeight:"bold"
                            
                        }}
                    >4/4</Text>    
                </TouchableOpacity>  
            </View>
            <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center", paddingStart:20}}>
                <TouchableOpacity
                    style={{
                        backgroundColor:"#00d9dd",
                        marginTop: "-10%",
                        width: 110,
                        height:110,
                        padding: 0,
                        alignSelf: "flex-start",
                        borderRadius: 60,
                        alignSelf:"center",
                    }}
                >
                    <Image
                        source={require('../image/iniciar.png')}
                        style={{
                            width:37,
                            height:45,
                            alignSelf:"center",
                            top:30,
                            tintColor:"white",
                        }}
                    />
                </TouchableOpacity>
                <View style={{flexDirection:"column", paddingBottom:2, alignSelf:"center", paddingStart:20}}>
                    <TouchableOpacity
                        style={{
                            backgroundColor:"#1b1464",
                            marginTop: "0.10%",
                            width: 10,
                            height:10,
                            padding: 20,
                            alignSelf: "flex-end",
                            borderRadius: 50,
                            alignSelf:"center",
                            top:-20,
                            right:-100,
                            margin:2,
                        }}
                    >
                        <View style={{
                            backgroundColor: "white",
                            width:10,
                            height:10,
                            position:"absolute",
                            top:15,
                            borderRadius:50,
                            alignSelf:"center",
                            justifyContent:"center",
                            margin:0,

                        }}>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor:"#1b1464",
                            marginTop: "0.10%",
                            width: 10,
                            height:10,
                            padding: 20,
                            alignSelf: "flex-end",
                            borderRadius: 50,
                            alignSelf:"center",
                            top:-20,
                            right:-100,
                            margin:2,
                        }}
                    >
                        <View style={{
                            backgroundColor: "white",
                            width:10,
                            height:10,
                            position:"absolute",
                            top:15,
                            borderRadius:50,
                            alignSelf:"center",
                            justifyContent:"center",
                            margin:0,

                        }}>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor:"#1b1464",
                            marginTop: "0.10%",
                            width: 10,
                            height:10,
                            padding: 20,
                            alignSelf: "flex-end",
                            borderRadius: 50,
                            alignSelf:"center",
                            top:-20,
                            right:-100,
                            margin:2,
                        }}
                    >
                        <View style={{
                            backgroundColor: "white",
                            width:10,
                            height:10,
                            position:"absolute",
                            top:15,
                            borderRadius:50,
                            alignSelf:"center",
                            justifyContent:"center",
                            margin:0,

                        }}>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor:"#1b1464",
                            marginTop: "0.10%",
                            width: 10,
                            height:10,
                            padding: 20,
                            alignSelf: "flex-end",
                            borderRadius: 50,
                            alignSelf:"center",
                            top:-20,
                            right:-100,
                            margin:2,
                        }}
                    >
                        <View style={{
                            backgroundColor: "white",
                            width:10,
                            height:10,
                            position:"absolute",
                            top:15,
                            borderRadius:50,
                            alignSelf:"center",
                            justifyContent:"center",
                            margin:0,

                        }}>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
            <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center", paddingStart:20, top:-65, right:35}}>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#00d9dd",
                        marginTop: "1%",
                        width: 30,
                        height:30,
                        padding: 10,
                        alignSelf: "center",
                        borderRadius: 50,
                        marginLeft:10,
                                
                    }}
                >
                    <Image source={require('../image/Menos.png')}
                        style={{
                            width:8,
                            height:8,
                            padding:"1",
                            alignSelf:"center",
                            margin:10,
                            top:-8,
                                    
                    }}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Stack2")}
                    style={{
                        backgroundColor: "#1b1464",
                        marginTop: "1%",
                        width: "10%",
                        height:30,
                        padding: 1,
                        alignSelf: "center",
                        borderRadius: 10,
                        marginLeft:10,
                            
                    }}
                    >
                    <Text
                        style={{
                            fontSize: 10,
                            textAlign: "center",
                            color: "white",
                            top:6,
                            
                        }}
                    >440 Hrtz</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#00d9dd",
                        marginTop: "1%",
                        width: 30,
                        height:30,
                        padding: 10,
                        alignSelf: "center",
                        borderRadius: 50,
                        marginLeft:10,
                                
                    }}
                    >
                    <Image source={require('../image/Mas.png')}
                        style={{
                            width:8,
                            height:8,
                            padding:"1",
                            alignSelf:"center",
                            margin:10,
                            top:-8,
                    }}/>
                </TouchableOpacity>
                
            </View>
            <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"flex-end", top:-35}}>
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
export default Metronomo;  



//     const Metronomo = createBottomTabNavigator();

// // function Medidas(){
// //     return(
// //         <Metronomo.Navigator
// //         initialRouteName="Medidas"
// //         >
// //             <Metronomo.Screen
// //                 name="Medidas"
// //                 component={MedidasCompas}
// //             >

// //             </Metronomo.Screen>
// //         </Metronomo.Navigator>
// //     )
// // }


