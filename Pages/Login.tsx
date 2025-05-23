import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { UseBanco } from '../Hooks/Hooksbank';

export default function PantallaInicio() {
  const { balance, transferencias, deposito } = UseBanco();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la pantalla de inicio</Text>
      <Text style={styles.title}>Tu Saldo disponible es de: L.{balance}</Text>
      <Button title="Depositar L.500" onPress={deposito} />
      <Text style={styles.subTitle}>Últimas Transferencias</Text>
      <FlatList
        data={transferencias}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.Descripcion}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subTitle: { marginTop: 20, fontSize: 18, fontWeight: '600' },
  item: { paddingVertical: 4 },
});