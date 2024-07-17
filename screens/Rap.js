import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Audio } from 'expo-av';

function Rap() {
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
                            width: 100,
                            top: -130,
                            height: 100,
                            borderRadius: 50,
                            alignSelf: "center",
                            justifyContent: "center",
                            marginRight: 40
                        }}>
                            <Text style={{
                                fontSize: 30,
                                fontWeight: "900",
                                color: "white",
                                alignSelf: "center"
                            }}>
                                Rap
                            </Text>
                        </View>
                    </View>
                    <SongButton
                        title="Alcolirikoz - La tipica"
                        onPress={() => playAudio(require('./assets/AudiosRap/Alcolirykoz - La Típica (Prod. El Arkeólogo).mp3'))}
                        icon={require('../image/calibrador.png')}
                    />
                    <SongButton
                        title="Canserbero - De la Vida Como Pelicula"
                        onPress={() => playAudio(require('./assets/AudiosRap/De la Vida Como Pelicula, Tragedia, Comedia y Ficcion.mp3'))}
                        icon={require('../image/calibrador.png')}
                    />
                    <SongButton
                        title="Mientras Duermen - Negro Gonzalez, Warrior, Samurai, Norick, B.man"
                        onPress={() => playAudio(require('./assets/AudiosRap/Mientras Duermen - Negro Gonzalez, Warrior, Samurai, Norick, B.man.mp3'))}
                        icon={require('../image/calibrador.png')}
                    />
                    <SongButton
                        title="Penyair - No somos iguales"
                        onPress={() => playAudio(require('./assets/AudiosRap/Penyair - No somos iguales ft @GABYLONIA.mp3'))}
                        icon={require('../image/calibrador.png')}
                    />
                    <SongButton
                        title="Doble Porcion - Roca N Ron"
                        onPress={() => playAudio(require('./assets/AudiosRap/Doble Porcion-Roca N Ron.mp3'))}
                        icon={require('../image/calibrador.png')}
                    />
                    <SongButton
                        title="Flaco Flow y Melanina - La Jungla"
                        onPress={() => playAudio(require('./assets/AudiosRap/Flaco Flow y Melanina - La Jungla.mp3'))}
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

export default Rap;
