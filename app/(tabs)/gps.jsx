import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';

const LocationTracking = () => {
  const [isTracking, setIsTracking] = useState(false);

  const toggleTracking = () => {
    setIsTracking(!isTracking);
    // Logic to handle GPS tracking can be added here
    console.log(isTracking ? 'GPS Tracking Deactivated' : 'GPS Tracking Activated');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.description}>
          Deja que nuestra aplicación monitoree tu ubicación GPS, la aplicación detectará si llegas a tener un accidente 
          víal y automáticamente enviará un SMS a tus contactos de emergencia, con la ubicación del accidente y la leyenda 
          "He tenido un accidente en la siguiente ubicación".
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={isTracking ? "Desactivar Seguimiento De GPS" : "Activar Seguimiento De GPS"}
          onPress={toggleTracking}
          color={isTracking ? "#d9534f" : "#5cb85c"} // Red for deactivate, green for activate
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  textContainer: {
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

export default LocationTracking;
