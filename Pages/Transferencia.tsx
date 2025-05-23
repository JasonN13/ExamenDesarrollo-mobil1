import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { UseBanco } from '../Hooks/Hooksbank';
import React, { useState } from 'react';

export default function Transferencia() {
  const { tranferencia } = UseBanco();
  const [Cuenta, setCuenta] = useState('');
  const [Monto, setMonto] = useState('');

  const handleTransfer = () => {
    const parsedMonto = parseFloat(Monto);
    if (!Cuenta || isNaN(parsedMonto)) {
      Alert.alert('Error', 'Por favor ingrese todos los campos correctamente');
      return;
    }

    const success = tranferencia(parsedMonto, Cuenta);
    if (success) {
      Alert.alert('Éxito', 'Transferencia realizada con éxito');
      setCuenta('');
      setMonto('');
    } else {
      Alert.alert('Error', 'No hay suficiente saldo');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Número de Cuenta y Nombre:</Text>
      <TextInput
        style={styles.input}
        value={Cuenta}
        onChangeText={setCuenta}
        placeholder="Ej. 123456 - Juan Pérez"
      />

      <Text style={styles.label}>Monto a transferir:</Text>
      <TextInput
        style={styles.input}
        value={Monto}
        onChangeText={setMonto}
        keyboardType="numeric"
        placeholder="Ej. 200"
      />

      <Button title="Transferir Saldo" onPress={handleTransfer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontWeight: 'bold', marginTop: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 5 },
});