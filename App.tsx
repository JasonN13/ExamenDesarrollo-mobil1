import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navegacion from './Compomentes/Navegacion';
import Providerbank from './Provider/Providerbank'; 

export default function App() {
  return (
    <Providerbank>
      <View style={styles.container}>
        <Navegacion />
        <StatusBar style="auto" />
      </View>
    </Providerbank>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // ¡Quitar centrado para que navegación se vea bien!
  },
});
