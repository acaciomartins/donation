import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        alert(user + '-' + password);
        
        navigation.navigate('Main');
    }
    return (
        <View style={styles.container} >
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                placeholder="Digite seu usuário"
                placeholderTextColor="#999"
                style={styles.input}
                value={user}
                onChangeText={setUser}
                />
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                placeholder="Digite sua senha"
                textContentType="password"
                placeholderTextColor="#999"
                style={styles.input}
                value={password}
                onChangeText={setPassword}/>

            <TouchableOpacity style={styles.button}
                onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    input: {
        height: 46,
        alignSelf: "stretch",
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 4,
        marginTop: 20,
        marginHorizontal: 15
    },
    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#DF4723',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
});