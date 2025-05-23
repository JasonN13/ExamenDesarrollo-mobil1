import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'


import Transferencia from '../Pages/Transferencia';
import Historico from '../Pages/Historico';
import PlantillaInicio from '../Pages/Login';

const Tab = createBottomTabNavigator();

export default function Navegacion() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={PlantillaInicio} />
        <Tab.Screen name="Transferencia" component={Transferencia} />
        <Tab.Screen name="Historico" component={Historico} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}


