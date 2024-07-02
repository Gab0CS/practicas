import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Mensajes = () => {
  const [message, setMessage] = useState('');
  const [selectedGesture, setSelectedGesture] = useState('');

  const handleSaveMessage = () => {
    // Logic to handle message saving
    console.log(`Saved Message: ${message}, Gesture: ${selectedGesture}`);
  };

  return (
    <SafeAreaView className="flex-1 p-4">
      <View className="mb-4">
        <Text className="text-xl font-bold mb-2">Mensaje de emergencia</Text>
        <Text className="text-lg mb-2">{message}</Text>
      </View>
      <View className="mb-4">
        <Text className="text-lg font-bold mb-2">Enter Message</Text>
        <TextInput
          className="border border-gray-300 p-2 mb-4 rounded"
          placeholder="Type your message here"
          value={message}
          onChangeText={setMessage}
        />
        <Text className="text-lg font-bold mb-2">Select Gesture</Text>
        <View className="border border-gray-300 rounded mb-4">
          <Picker
            selectedValue={selectedGesture}
            onValueChange={(itemValue) => setSelectedGesture(itemValue)}
            className="p-2"
          >
            <Picker.Item label="Sacudir" value="shake" />
            <Picker.Item label="Doble click Teclas De Volumen" value="doubleTap" />
            <Picker.Item label="Bajar volumen + Bloqueo" value="swipeUp" />
          </Picker>
        </View>
      </View>
      <Button title="Save Message" onPress={handleSaveMessage} />
    </SafeAreaView>
  );
};

export default Mensajes;
