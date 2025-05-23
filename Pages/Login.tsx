import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { UseBanco } from '../Hooks/Hooksbank'

export default function PantallaInicio() {
  const {balance, transferencias, deposito, tranferencia} = UseBanco();

  return (
    <View>
     <Text style={styles.comtainer}>
     <Text style={StyleSheet.title}>Bienvenido a la pantalla de inicio</Text>
     <Text style={StyleSheet.title}>Tu Saldo disponible es de : {balance}</Text>
     <Button title="Depositar L.500" onPress={deposito} />
     <Text Style={StyleSheet.subtitle}>Ultimas Transferencias</Text>
     <FlatList
     data={transferencias}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (Text style=(styles.item)>{item.Descripcion}</Text>)}
          <Text>{item.Descripcion}</Text>
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  balance: { fontSize: 20, marginBottom: 10 },
  subTitle: { marginTop: 20, fontSize: 18, fontWeight: '600' },
  item: { paddingVertical: 4 },
});