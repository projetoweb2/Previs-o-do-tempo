import React from 'react'; // importamos o react
import { createDrawerNavigator } from '@react-navigation/drawer'; //Importa o DrawerNavigator

import Home from './pages/Home'; //Importamos a página home
import Search from './pages/Search'; //Importamos a página Search

//nossa rota é do tipo Drawer
const Drawer = createDrawerNavigator(); 

//Criamos nossos tipos de navegação Drawer, e nele temos nossas screens/paginas
function Routes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen 
                name="Home"
                component={Home}
                options={{ 
                    title: 'Minha Cidade'
                }}

            />

            <Drawer.Screen 
                name="Search"
                component={Search}
                options={{
                    title: 'Procurar'
                }}
            />

        </Drawer.Navigator>
    )
}

export default Routes;