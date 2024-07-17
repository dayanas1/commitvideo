import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

//import Orientation from 'react-native-orientation-locker';

const Afinador = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView
            style={{
                width: "auto",
                height: "auto",
            }}
        >
            <View
                style={{
                    top:"5%",
                }}
            >
                {/* <Text
                style={{
                    fontSize:30,
                    textAlign: "center",
                    marginTop:"0%"
                }}
                >Afinador
            </Text> */}

                <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", top: "5%" }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={styles.BotonBemol}
                    >
                        <Image
                            source={require('../image/bemol.png')}
                            style={styles.ImagenBemol}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonPua}
                    >
                        <Image
                            source={require('../image/pua.png')}
                            style={styles.ImagenPua}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonCalibrador}
                    >
                        <Image
                            source={require('../image/calibrador.png')}
                            style={styles.ImagenCalibrador}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.BotonSotenido}
                    >
                        <Image
                            source={require('../image/sostenido.png')}
                            style={styles.ImagenSostenido}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: "row", paddingBottom: 2, alignSelf: "center",
                    top: "17%", width: "90%"


                }}>
                    <View style={{
                        flexDirection: "column", paddingBottom: 2, alignSelf: "flex-start",
                        top: 1
                    }}>
                        <TouchableOpacity
                            style={styles.BotonRe}
                        >
                            <Text
                                style={styles.TextoRe}
                            >D</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.BotonLa}
                        >
                            <Text
                                style={styles.TextoLa}
                            >A</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.BotonMiE}
                        >
                            <Text
                                style={styles.TextoMiE}
                            >E</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", marginLeft: 200 }}>
                        <TouchableOpacity
                            style={{
                                //backgroundColor: "#00d9dd",
                                marginTop: -5,
                                width: 200,
                                padding: 10,
                                alignSelf: "center",
                                borderRadius: 10,
                                height: 170,
                                margin: 1
                            }}
                        >
                            <Image
                                source={require('../image/GuitarraElec.png')}
                                style={{
                                    width: 200,
                                    height: 210,
                                    //padding:"1",
                                    alignSelf: "center",
                                    margin: 10,
                                    top: -35
                                }}
                            />
                        </TouchableOpacity>
                        <View style={{
                            flexDirection: "column", paddingBottom: 2, alignSelf: "flex-start",
                            top: 1
                        }}>
                            <TouchableOpacity
                                style={styles.BotonSol}
                            >
                                <Text
                                    style={styles.TextoSol}
                                >G</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.BotonSi}
                            >
                                <Text
                                    style={styles.TextoSi}
                                >B</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.BotonMie}
                            >
                                <Text
                                    style={styles.TextoMie}
                                >e</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", top: 90, left:45 }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Settings")}
                                style={{
                                    //backgroundColor:"green",
                                    marginTop: 1,
                                    width: 40,
                                    height: 40,
                                    padding: 1,
                                    alignSelf: "flex-end",
                                    borderRadius: 50,
                                    top: 1,
                                    right: -140,
                                    margin: 1,
                                    marginBottom: 5
                                }}
                            >
                                <Image
                                    source={require('../image/Settings.png')}
                                    style={{
                                        width: 30,
                                        height: 30,
                                        alignSelf: "center",
                                        top: 1,
                                    }}
                                >
                                </Image>
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
                                    top: 1,
                                    right: -140,
                                    margin: 1,
                                    marginBottom: 5
                                }}
                            >
                                <Image
                                    source={require('../image/Refresh.png')}
                                    style={{
                                        width: 26,
                                        height: 29.4,
                                        alignSelf: "center",
                                        top: 1,
                                    }}
                                >
                                </Image>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    BotonBemol: {
        //backgroundColor:"green",
        width: "3%",
        padding: 2,
        height: 50,
        borderRadius: 50,
    },
    ImagenBemol: {
        width: 15,
        height: 35,
        padding: "30",
        alignSelf: "center",
        margin: 10,
        tintColor: "black",
        top: -4
    },
    BotonCalibrador: {
        //backgroundColor:"#443e7e",
        width: "3%",
        padding: 2,
        height: 50,
        borderRadius: 50,
    },
    ImagenCalibrador: {
        width: 30,
        height: 30,
        padding: "30",
        alignSelf: "center",
        margin: 10,
        tintColor: "black",
        top: 1
    },
    BotonPua: {
        //backgroundColor:"#a9a7bf",
        width: "4%",
        padding: 2,
        height: 50,
        borderRadius: 50,
    },
    ImagenPua: {
        width: 30,
        height: 35,
        padding: "30",
        alignSelf: "center",
        margin: 10,
        tintColor: "#00ffff",
        top: 1
    },
    BotonSotenido: {
        //backgroundColor:"#a9a7bf",
        width: "3%",
        padding: 2,
        height: 50,
        borderRadius: 50,
    },
    ImagenSostenido: {
        width: 13,
        height: 30,
        padding: "30",
        alignSelf: "center",
        margin: 10,
        tintColor: "black",
        top: 1
    },
    BotonRe: {
        backgroundColor: "#1b1464",
        marginTop: 10,
        width: 40,
        height: 40,
        padding: 1,
        alignSelf: "flex-end",
        borderRadius: 50,
        top: 1,
        right: -100,
        margin: 1,
        marginBottom: 5
    },
    TextoRe: {
        fontSize: 20,
        textAlign: "center",
        color: "white",
        top: 2,
    },
    BotonLa: {
        backgroundColor: "#1b1464",
        marginTop: 10,
        width: 40,
        height: 40,
        padding: 1,
        alignSelf: "flex-end",
        borderRadius: 50,
        top: 1,
        right: -100,
        margin: 1,
        marginBottom: 5
    },
    TextoLa: {
        fontSize: 20,
        textAlign: "center",
        color: "white",
        top: 2,
    },
    BotonMiE: {
        backgroundColor: "#1b1464",
        marginTop: 10,
        width: 40,
        height: 40,
        padding: 1,
        alignSelf: "flex-end",
        borderRadius: 50,
        top: 1,
        right: -100,
        margin: 1,
        marginBottom: 5
    },
    TextoMiE: {
        fontSize: 20,
        textAlign: "center",
        color: "white",
        top: 2,
    },
    BotonSol: {
        backgroundColor: "#1b1464",
        marginTop: 10,
        width: 40,
        height: 40,
        padding: 1,
        alignSelf: "flex-end",
        borderRadius: 50,
        top: 1,
        right: -100,
        margin: 1,
        marginBottom: 5
    },
    TextoSol: {
        fontSize: 20,
        textAlign: "center",
        color: "white",
        top: 2,
    },
    BotonSi: {
        backgroundColor: "#1b1464",
        marginTop: 10,
        width: 40,
        height: 40,
        padding: 1,
        alignSelf: "flex-end",
        borderRadius: 50,
        top: 1,
        right: -100,
        margin: 1,
        marginBottom: 5
    },
    TextoSi: {
        fontSize: 20,
        textAlign: "center",
        color: "white",
        top: 2,
    },
    BotonMie: {
        backgroundColor: "#1b1464",
        marginTop: 10,
        width: 40,
        height: 40,
        padding: 1,
        alignSelf: "flex-end",
        borderRadius: 50,
        top: 1,
        right: -100,
        margin: 1,
        marginBottom: 5
    },
    TextoMie: {
        fontSize: 20,
        textAlign: "center",
        color: "white",
        top: 2,
    },

})
export default Afinador;