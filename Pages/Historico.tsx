import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native'
import { UseBanco } from '../Hooks/Hooksbank'
import React from 'react'


export default function Historico() {
  const {Transferencia} = UseBanco();
  return (
    <View>
      <Text style={styles.title}>Ultimas Transferencias</Text>
      <FlatList
        data={Transferencia}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.Descripcion}</Text>
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  item: { paddingVertical: 6 },
});