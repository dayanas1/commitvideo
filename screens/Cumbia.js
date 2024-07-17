import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Audio } from 'expo-av';

function Cumbia() {
    const navigation = useNavigation();
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(null);

    useEffect(() => {
        return () => {
            // Detener la reproducción al salir de la ventana
            if (sound !== null) {
                sound.unloadAsync();
            }
        };
    }, []);

    const playAudio = async (audioFile) => {
        try {
            if (currentSong === audioFile) {
                if (isPlaying) {
                    // Si es la misma canción y está reproduciéndose, detenerla
                    await sound.pauseAsync();
                    setIsPlaying(false);
                } else {
                    // Si es la misma canción pero no está reproduciéndose, reanudarla
                    await sound.playAsync();
                    setIsPlaying(true);
                }
            } else {
                // Si es una nueva canción, detener la anterior y reproducir la nueva
                if (sound !== null) {
                    await sound.unloadAsync();
                }
                const { sound: newSound } = await Audio.Sound.createAsync(audioFile);
                setSound(newSound);
                setCurrentSong(audioFile);
                await newSound.playAsync();
                setIsPlaying(true);
            }
        } catch (error) {
            console.log("Error al reproducir el audio:", error.message);
        }
    };

    return (
        <SafeAreaView>
            <View>
                <ScrollView>
                    <View style={{ top: "5%" }}>
                        <Image
                            source={require('../image/ImageMusica.png')}
                            style={{
                                width: "99%",
                                height: 150,
                                alignSelf: "center",
                                margin: 10,
                                top: 0
                            }}
                        />
                        <View style={{
                            backgroundColor: "#1b1464",
                            width: 150,
                            top: -130,
                            height: 100,
                            borderRadius: 150,
                            alignSelf: "center",
                            justifyContent: "center",
                            marginRight: 20
                        }}>
                            <Text style={{
                                fontSize: 30,
                                fontWeight: "900",
                                color: "white",
                                alignSelf: "center"
                            }}>
                                Cumbia
                            </Text>
                        </View>
                    </View>
                    <SongButton
                        title="Totó la mamposina - El Pescador"
                        onPress={() => playAudio(require('./assets/AudiosCumbia/El Pescador.mp3'))}
                        icon={require('../image/calibrador.png')}
                    />
                    <SongButton
                        title="La Pollera colora Wilson Choperena, Pedro Salcedo y Su Orquesta"
                        onPress={() => playAudio(require('./assets/AudiosCumbia/La Pollera colora Wilson Choperena, Pedro Salcedo y Su Orquesta.mp3'))}
                        icon={require('../image/calibrador.png')}
                    />
                    <SongButton
                        title="Yerba Brava - Pibe Cantina"
                        onPress={() => playAudio(require('./assets/AudiosCumbia/Pibe Cantina.mp3'))}
                        icon={require('../image/calibrador.png')}
                    />
                    <SongButton
                        title="Yerba Brava - La Cumbia de los Trapos"
                        onPress={() => playAudio(require('./assets/AudiosCumbia/Yerba Brava - La Cumbia de los Trapos.mp3'))}
                        icon={require('../image/calibrador.png')}
                    />
                    <SongButton
                        title="Pibe Chorros - Una copa mas"
                        onPress={() => playAudio(require('./assets/AudiosCumbia/Una copa mas.mp3'))}
                        icon={require('../image/calibrador.png')}
                    />
                    <SongButton
                        title="Totó la mamposina - Yo Me Llamo Cumbia"
                        onPress={() => playAudio(require('./assets/AudiosCumbia/Yo Me Llamo Cumbia.mp3'))}
                        icon={require('../image/calibrador.png')}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const SongButton = ({ title, onPress, icon }) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <View style={styles.buttonContent}>
            <View style={styles.iconBackground}>
                <Image source={icon} style={styles.icon} />
            </View>
            <Text style={styles.buttonText}>{title}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#2596be",
        marginTop: "1%",
        width: "80%",
        alignSelf: "center",
        borderRadius: 10,
        marginBottom: 10,
    },
    buttonContent: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    buttonText: {
        fontSize: 15,
        textAlign: "center",
        color: "#1b1464",
        flex: 1,
    },
    iconBackground: {
        backgroundColor: "#00d9dd",
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    icon: {
        width: 20,
        height: 22,
    },
});

export default Cumbia;
