import React, {Component} from 'react';
import {View, SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';

 export default function Donation({ navigation }) {

        return (
            <SafeAreaView style={
                styles.container
                }>
                <Text style={
                    styles.text
                }>Doações</Text>

            <View>
                {/* //tipodoacao
                //doacoes
                //contato */}
            </View>
            </SafeAreaView>
        );


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2E8B57',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    text: {
        fontWeight: "bold",
        color: '#FFF',
        fontSize: 20
    },

})
