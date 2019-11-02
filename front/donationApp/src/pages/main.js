import React, {Component} from 'react';
import {View, SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';

 export default function Main({ navigation }) {
    

        function handleMyDonation() {
            //alert(user + '-' + password);
            
            navigation.navigate('MyDonation');
        }

        function handleDonation() {
            //alert(user + '-' + password);
            
            navigation.navigate('Donation');
        }

        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.text }>Doações</Text>

                <View style={styles.cardsContainer}>
                    <TouchableOpacity style={
                        styles.card}
                        onPress={handleMyDonation}>
                        <Text style={styles.textCard}>Suas doações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}
                         onPress={handleDonation}  >
                        <Text style={
                            styles.textCard
                        }>Doações</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    cardsContainer: {
        flex: 1,
        alignSelf: 'stretch',
        maxHeight: 600
    },
    card: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        margin: 30,
        overflow: 'hidden',
        height: 100
    },
    text: {
        fontWeight: "bold",
        color: '#FFF',
        fontSize: 20
    },
    textCard: {
        flex: 1,
        alignSelf: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff'
    }

})
