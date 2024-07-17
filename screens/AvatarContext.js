import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useAvatar } from '../screens/AvatarProvider';

function SomeOtherComponent() {
    const { selectedAvatar } = useAvatar();

    return (
        <View style={styles.container}>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        backgroundColor: '#1b1464',
        width: 120,
        height: 120,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    avatarImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    avatarText: {
        fontSize: 40,
        color: 'white',
    },
});

export default SomeOtherComponent;
