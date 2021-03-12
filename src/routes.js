import React from 'react'; // importamos o react
import { createDrawerNavigator } from '@react-navigation/drawer'; //Importa o DrawerNavigator

import Home from './pages/Home'; //Importamos a página home
import Search from './pages/Search'; //Importamos a página Search

//nossa rota é do tipo Drawer
const Drawer = createDrawerNavigator(); 

function Routes(){
    return(
        <Drawer.Navigator></Drawer.Navigator>
    )
}