import { View, Text } from 'react-native'
import { UseBanco } from '../Hooks/Hooksbank';
import React from 'react'


export default function Transferencia() {
  const {tranferencia} = UseBanco();
  return (
    <View>
      <Text>pantalla Transferencia</Text>
    </View>
  )
}