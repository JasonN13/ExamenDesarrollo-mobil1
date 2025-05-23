import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Pantallainicio from '../Pages/Login';
import Transferencia from '../Pages/Transferencia';
import Historico from '../Pages/Historico';
import React from 'react'

const Tab = createBottomTabNavigator();

export default function Navegacion() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={Pantallainicio} />
        <Tab.Screen name="Transferencia" component={Transferencia} />
        <Tab.Screen name="Historico" component={Historico} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
