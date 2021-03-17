
import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native';
import * as Location from 'expo-location';

import Menu from '../../components/Menu'; // o '../ sai da pasta e o segundo ../ desce mais uma pasta
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';
import { set } from 'react-native-reanimated';

const mylist = [
    {
      "date": "16/03",
      "weekday": "Ter",
      "max": 27,
      "min": 18,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "17/03",
      "weekday": "Qua",
      "max": 28,
      "min": 18,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "18/03",
      "weekday": "Qui",
      "max": 28,
      "min": 18,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "19/03",
      "weekday": "Sex",
      "max": 28,
      "min": 19,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "20/03",
      "weekday": "Sáb",
      "max": 27,
      "min": 18,
      "description": "Tempestades isoladas",
      "condition": "storm"
    },
    {
      "date": "21/03",
      "weekday": "Dom",
      "max": 28,
      "min": 18,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "22/03",
      "weekday": "Seg",
      "max": 27,
      "min": 19,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "23/03",
      "weekday": "Ter",
      "max": 25,
      "min": 18,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "24/03",
      "weekday": "Qua",
      "max": 25,
      "min": 20,
      "description": "Tempo nublado",
      "condition": "cloud"
    },
    {
      "date": "25/03",
      "weekday": "Qui",
      "max": 25,
      "min": 18,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    }
  ];

export default function Home(){
//O use effect faz alguma coisa qnd vc abre o app. nesse caso ele tem a função de pegar a localização.

 const [errorMsg, setErrorMsg] = useState(null); // Mensagem de erro caso recuse
 const [loading, setLoading] = useState(true); // Loading enquanto faz a requisição
 useEffect(()=>{

  (async ()=>{

    let { status } = await Location.requestPermissionsAsync();
    //Pede o status da permissão, espera a requisição acessando nosso Location

    if(status !== 'granted'){
      setErrorMsg('Se não der a localização não tem como usar o aplicativo!');
      setLoading(false);
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location.coords);

  })();


  }, []);


    return(
        <SafeAreaView style={styles.container}>
            <Menu />
            <Header />
            <Conditions />
            <FlatList 
                horizontal={true}
                contentContainerStyle={{ paddingBottom: '5%'}}
                style={styles.list}
                data={mylist}
                keyExtractor={ item => item.date}
                renderItem={ ({ item }) => <Forecast data={item}/>}
            />
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
    },
    list:{
        marginTop: 10,
        marginLeft: 10
    }
});