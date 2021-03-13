
import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

import Menu from '../../components/Menu'; // o '../ sai da pasta e o segundo ../ desce mais uma pasta
import Header from '../../components/Header';

export default function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <Menu />
            <Header />
        </SafeAreaView>
    )
}

//folhas de estilo
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f0ff',
        paddingTop: '5%'
    }
});