import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Video } from "expo-av";

function Inicio() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <View style={styles.ContenedorPrincipal}>
                <Text style={styles.TextoTitulo}>Inicio</Text>
                <View style={styles.Contenido}>
                    <View style={styles.Conte}>
                        <View style={styles.ImagenBurbujaContainer}>
                           
                            <Video
                                source={require('../video/video.mp4.mp4')}
                                style={styles.Video}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                onError={(e) => console.log('Error:', e)}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Niveles")}
                            style={styles.BotonGo}
                        >
                            <Text style={styles.TextoGo}>Go</Text>
                        </TouchableOpacity>
                        <View style={styles.FilaTab}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Inicio")}
                                style={styles.BotonTab}
                            >
                                <Image
                                    source={require('../image/Refresh.png')}
                                    style={styles.ImagenTab}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    SafeAreaView: {
        width: "100%",
        height: "100%",
        top: "1%",
    },
    ContenedorPrincipal: {
        top: "7%",
        width: "100%",
        height: "100%",
    },
    TextoTitulo: {
        fontSize: 30,
        textAlign: "center",
        marginTop: "0%",
    },
    Contenido: {
        flexDirection: "row",
        alignSelf: "center",
        top: "1%",
        width: "89%",
        height: "75%",
    },
    Conte: {
        flexDirection: "row",
        alignSelf: "center",
        top: "1%",
        marginRight: "10%",
    },
    ImagenBurbujaContainer: {
        width: 400,
        height: 271, 
        alignSelf: "center",
        marginLeft: "15%", 
        position: "relative", 
    },
    ImagenBurbuja: {
        width: 400, 
        height: 271, 
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
    },
    Video: {
        width: 400, 
        height: 271, 
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 2,
        borderRadius: 20,
    },
    BotonGo: {
        width: 50,
        height: 50,
        color: "black",
        top: "25%",
        backgroundColor: "#00d9dd",
        borderRadius: 50,
        marginLeft: 30,
    },
    TextoGo: {
        fontWeight: "bold",
        fontSize: 25,
        alignSelf: "center",
        top: 5,
    },
    FilaTab: {
        flexDirection: "row",
        paddingBottom: 2,
        alignSelf: "flex-end",
        top: "6%",
    },
    BotonTab: {
        width: 50,
        height: 50,
        alignSelf: "flex-end",
        borderRadius: 50,
        top: 38,
        right: -89,
    },
    ImagenTab: {
        width: 27,
        height: 30.5,
        alignSelf: "center",
    },
});

export default Inicio;
