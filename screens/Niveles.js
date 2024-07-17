import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Niveles = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView
            style={styles.SafeAreaView}
        >
            <View
                style={styles.ContenedorPrincipal}
            >
                <Text
                    style={styles.TextoTitulo}
                >Niveles
                </Text>
                <View
                    style={styles.Contenido}
                >
                    <View
                        style={styles.Ai}
                    >
                        <Text
                            style={styles.TextoAi}
                        >AI</Text>
                    </View>
                    <View style={styles.Columna}
                    >
                        <View style={styles.FilaBasico}>
                            <View
                                style={styles.RellenoNivel}
                            >
                            </View>
                            <Image
                                source={require('../image/calibrador.png')}
                                style={styles.ImagenRellenoNivel}
                            />
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Cuestionario")}
                                style={styles.BotonLevel}
                            >
                                <Text
                                    style={styles.TextoLevel}
                                >Basico</Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={styles.FilaBasico}
                        >
                            <View
                                style={styles.RellenoNivel}
                            >
                            </View>
                            <Image
                                source={require('../image/calibrador.png')}
                                style={styles.ImagenRellenoNivel}
                            />
                            <TouchableOpacity
                                onPress={() => navigation.navigate("CuestionarioI")}
                                style={styles.BotonLevel}
                            >
                                <Text
                                    style={styles.TextoLevel}
                                >Intermedio</Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={styles.FilaBasico}
                        >
                            <View
                                style={styles.RellenoNivel}
                            >
                            </View>
                            <Image
                                source={require('../image/calibrador.png')}
                                style={styles.ImagenRellenoNivel}
                            />
                            <TouchableOpacity
                                onPress={() => navigation.navigate("CuestionarioA")}
                                style={styles.BotonLevel}
                            >
                                <Text
                                    style={styles.TextoLevel}
                                >Avanzado</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    SafeAreaView: {
        width: "100%",
        height: "100%",
        top: "1%"
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
        //left:40,
        //marginLeft: 1,
        //backgroundColor: "green",
        width: "89%",
        height: "69%",
    },
    Ai: {
        backgroundColor: "#1b1464",
        width: 100,
        height: 100,
        position: "absolute",
        top: "30%",
        borderRadius: 50,
        alignSelf: "flex-start",
        left: 40,
        //marginLeft:30
    },
    TextoAi: {
        fontSize: 40,
        alignSelf: "center",
        top: 18,
        color: "white",
    },
    Columna: {
        flexDirection: "column",
        paddingBottom: 2,
        alignSelf: "center",
        top: "0%",
        marginLeft: 200,

    },
    FilaBasico: {
        flexDirection: "row",
        paddingBottom: 2,
        alignSelf: "center",
        top: "1%",
        margin: 5

    },
    RellenoNivel: {
        backgroundColor: "#00d9dd",
        width: 40,
        position: "absolute",
        top: "27%",
        height: 40,
        borderRadius: 50,
        alignSelf: "center",
        justifyContent: "center",

    },
    ImagenRellenoNivel: {
        width: 20,
        //padding:"1",
        height: 22,
        alignSelf: "center",
        margin: 10,
        top: 7
    },
    BotonLevel: {
        backgroundColor: "#2596be",
        marginTop: "2%",
        width: "70%",
        height: 55,
        //padding: 1,
        alignSelf: "center",
        borderRadius: 10,
        marginLeft: 40,
    },
    TextoLevel: {
        fontSize: 25,
        textAlign: "center",
        color: "#1b1464",
        top: "2%"
    },
    FilaTab: {
        flexDirection: "row",
        paddingBottom: 2,
        alignSelf: "flex-end",
        top: "12%"
    },
    BotonTab: {
        //backgroundColor:"green",
        width: 50,
        height: 50,
        alignSelf: "flex-end",
        borderRadius: 50,
        top: 20,
        right:-60,
        //margin:1,
        //left: 110,
    },
    ImagenTab: {
        width: 27,
        height: 30.5,
        alignSelf: "center",
        //top:1,
        //tintColor:"green"
    },
});

export default Niveles;