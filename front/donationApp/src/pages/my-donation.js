import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, SectionList, TextInput } from 'react-native';
import api from '../services/api';


// export default class MyDonation extends Component {
export default function MyDonation() {

    const [donations, setDonations] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [typeDonation, setTypeDonation] = useState('');
    const [donation, setDonation] = useState('');
    const [listDonation, setListDonation] = useState('');

    useEffect(() => {
        loadDonations();
    }, [])

    const id_user = '5dab6a797387c0265b7a97e6';

    let DATA =  [];
        // [{
        //     '_id': '1a',
        //     'typeDonation': 'Roupas',
        //     'data': ['calça, camiseta']
        // },
        // {
        //     '_id': '2a',
        //     'typeDonation': 'Calçados',
        //     'data': ['Chinelos, tenis']
        // }];
    
    

    const loadDonations = async () => {
        //Busca doações por usuario
        const response = await api.get(`/donate/findByUserId/${id_user}`);
        const { donate } = response.data;
        donate.map(d => {
            DATA = d.donations
        });
        setListDonation(DATA);

    }

   const Item = ({ title }) => {
    return (
        <View style={styles.donationContainer}>
            <Text style={styles.donationType}>{title}</Text>
        </View>
    );
  }

    const handleShowForm = () => {
        setShowForm(!showForm);
    }

    const handleAddDonation = () => {
        DATA.push({
            '_id': '3',
            'typeDonation': typeDonation,
            'data': [donation]
        })

        //salva mongo

        //alert(JSON.stringify(DATA[2]));
        //setListDonation(DATA);
        setShowForm(!showForm);
    }

      
        return (
        
            
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>Minhas doações</Text>

                <View style={styles.cardsContainer}>
                    <TouchableOpacity style={styles.card}
                        onPress={handleShowForm} >
                        <Text style={styles.textCard}>Incluir doações +</Text>
                    </TouchableOpacity>
                    
                    {showForm ? 
                        (<View style={styles.form}>
                            <TextInput 
                                autoCapitalize='none'
                                autoCorrect={false}
                                placeholder="Digite o tipo da doação"
                                placeholderTextColor="#999"
                                style={styles.input}
                                
                                value={typeDonation}
                                onChangeText={setTypeDonation}
                            />
                            <TextInput 
                                autoCapitalize='none'
                                autoCorrect={false}
                                placeholder="Digite suas doações"
                                placeholderTextColor="#999"
                                style={styles.input}

                                value={donation}
                                onChangeText={setDonation}
                            />
                            
                            <TouchableOpacity style={styles.button}
                                onPress={handleAddDonation}>
                                <Text style={styles.buttonText}>Incluir</Text>
                            </TouchableOpacity>

                        </View>) : <View/>}

                    {/* <FlatList
                        contentContainerStyle={styles.list}
                        data={listDonation}
                        keyExtractor={item => item._id}
                        renderItem={renderItem}
                    /> */}
                    <SectionList
                        contentContainerStyle={styles.list}
                        sections={listDonation}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => <Item title={item} />}
                        renderSectionHeader={({ section: { typeDonation } }) => (
                            <Text style={styles.donationItens}>{typeDonation}</Text>
                        )}
                    />
                </View>

            </SafeAreaView>
        );

}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF8C00',
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
        margin: 15,
        overflow: 'hidden',
        height: 50
    },
    textCard: {
        flex: 1,
        alignSelf: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff'
    },
    text: {
        fontWeight: "bold",
        color: '#FFF',
        fontSize: 20
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
    donationContainer: {
        flex: 1,
        backgroundColor: '#FFA500'
    },
    list: {
        padding: 20,
    },
    donationContainer: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20,
    },
    donationItens: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        lineHeight: 24,
    },
    donationType: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        lineHeight: 24,
    },
    form: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20,
        
    },
    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 4,
        marginTop: 20,
        marginHorizontal: 15
    },
})

