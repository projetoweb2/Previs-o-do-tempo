import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons } from '@expo/vector-icons';

export default function Header(){
    return(
        <LinearGradient 
        style={styles.header}
        colors={['#1ed6ff', '#97c1ff']}
        >
            <Text style={styles.date}>13/03/2021</Text>
            <Text style={styles.city}>Fortaleza</Text>
            
            <Ionicons 
                name="cloud"
                color="#FFF"
                size={150}
            />

            <Text style={styles.temp}>30°</Text>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '95%',
        height: '55%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    date:{
        color: '#FFF',
        fontSize: 17 
    },
    city:{
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    temp:{
        color: '#FFF',
        fontSize: 80,
        fontWeight: 'bold'
    }
});