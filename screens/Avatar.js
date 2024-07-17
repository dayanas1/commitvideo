import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAvatar } from '../screens/AvatarProvider';

function Avatar() {
    const navigation = useNavigation();
    const { selectedAvatar, setSelectedAvatar } = useAvatar();

    const handleImageSelect = (image) => {
        setSelectedAvatar(image); // Actualizamos el avatar seleccionado en el contexto
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Avatar</Text>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatar}>
                        {selectedAvatar ? (
                            <Image
                                source={selectedAvatar}
                                style={styles.avatarImage}
                            />
                        ) : (
                            <Text style={styles.avatarText}>AI</Text>
                        )}
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Menuss")}
                        style={styles.menuButton}
                    >
                        <Image
                            source={require('../image/ClaveSol.png')}
                            style={styles.menuIcon}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    contentContainerStyle={styles.avatarList}
                    horizontal={true}
                >
                    <TouchableOpacity
                        onPress={() => handleImageSelect(require('../image/Avatarf1.jpg'))}
                        style={styles.avatarButton}
                    >
                        <Image
                            source={require('../image/Avatarf1.jpg')}
                            style={styles.avatarImageSmall}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleImageSelect(require('../image/Avatarf2.jpg'))}
                        style={styles.avatarButton}
                    >
                        <Image
                            source={require('../image/Avatarf2.jpg')}
                            style={styles.avatarImageSmall}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleImageSelect(require('../image/Avatarf3.jpg'))}
                        style={styles.avatarButton}
                    >
                        <Image
                            source={require('../image/Avatarf3.jpg')}
                            style={styles.avatarImageSmall}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleImageSelect(require('../image/Avatarf4.jpg'))}
                        style={styles.avatarButton}
                    >
                        <Image
                            source={require('../image/Avatarf4.jpg')}
                            style={styles.avatarImageSmall}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleImageSelect(require('../image/Avatarm1.jpg'))}
                        style={styles.avatarButton}
                    >
                        <Image
                            source={require('../image/Avatarm1.jpg')}
                            style={styles.avatarImageSmall}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleImageSelect(require('../image/Avatarm2.jpg'))}
                        style={styles.avatarButton}
                    >
                        <Image
                            source={require('../image/Avatarm2.jpg')}
                            style={styles.avatarImageSmall}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleImageSelect(require('../image/Avatarm3.jpg'))}
                        style={styles.avatarButton}
                    >
                        <Image
                            source={require('../image/Avatarm3.jpg')}
                            style={styles.avatarImageSmall}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleImageSelect(require('../image/Avatarm4.jpg'))}
                        style={styles.avatarButton}
                    >
                        <Image
                            source={require('../image/Avatarm4.jpg')}
                            style={styles.avatarImageSmall}
                        />
                    </TouchableOpacity>
                </ScrollView>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Usuario")}
                    style={styles.refreshButton}
                >
                    <Image
                        source={require('../image/Refresh.png')}
                        style={styles.refreshIcon}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        marginTop: "2%",
    },
    avatarContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    avatar: {
        backgroundColor: "#1b1464",
        width: 120,
        height: 120,
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    avatarImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    avatarText: {
        fontSize: 40,
        color: "white",
    },
    menuButton: {
        position: "absolute",
        top: 40,
        right: 10,
    },
    menuIcon: {
        width: 28,
        height: 63,
        left: 68,
        tintColor: "black",
    },
    avatarList: {
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 60,
    },
    avatarButton: {
        backgroundColor: "#1b1464",
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    avatarImageSmall: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    refreshButton: {
        marginTop: 0,
        width: 26,
        height: 29,
        justifyContent: "center",
        alignItems: "center",
    },
    refreshIcon: {
        width: 26,
        height: 29,
        left: 400,
    },
});

export default Avatar;
