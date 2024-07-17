import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAvatar } from '../screens/AvatarProvider'; 

function Usuario() {
    const navigation = useNavigation();
    const { selectedAvatar } = useAvatar();
    
    return (
        <SafeAreaView style={{ width: "100%", height: "auto" }}>
            <View style={{ top: "10%", width: "auto", height: "auto" }}>
                <View style={{ width: "99%", height: "99%", top: "1%" }}>
                    <Text style={{ fontSize: 30, textAlign: "center", marginTop: "2%" }}>Usuario</Text>
                    <View 
                        style={{
                            backgroundColor: "#1b1464",
                            width: 120,
                            height: 120,
                            position: "absolute",
                            top: "27%",
                            borderRadius: 100,
                            alignSelf: "flex-start",
                            left: -120,
                            marginHorizontal: 200,
                        }}
                    >
                        {selectedAvatar ? (
                            <Image source={selectedAvatar} style={styles.avatarImage} />
                        ) : (
                            <Text style={styles.avatarText}>AI</Text>
                        )}
                    </View>
                    <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", top: "3%" }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Avatar")}
                            style={{
                                width: 150,
                                height: 150,
                                alignSelf: "center",
                                borderRadius: 200,
                                top: "5%",
                                left: 50
                            }}
                        >
                            <Image
                                source={require('../image/Usuario.png')}
                                style={{
                                    width: 150,
                                    height: 150,
                                    alignSelf: "center",
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "flex-end", top: 5 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Menuss")}
                            style={{
                                marginTop: 1,
                                width: 40,
                                height: 40,
                                padding: 1,
                                alignSelf: "flex-end",
                                borderRadius: 50,
                                top: "12%",
                                right: 5,
                                margin: 1,
                                marginBottom: 5,
                            }}
                        >
                            <Image
                                source={require('../image/iniciar.png')}
                                style={{
                                    width: 24.3,
                                    height: 30,
                                    alignSelf: "center",
                                    top: 1,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    avatarImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: "center",
        top: 10,
    },
    avatarText: {
        fontSize: 40,
        alignSelf: "center",
        top: 25,
        color: "white",
    },
});

export default Usuario;
