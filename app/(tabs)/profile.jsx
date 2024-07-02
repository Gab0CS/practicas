import React from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';

const PersonalInfo = ({ name, phoneNumber }) => (
  <ScrollView className="p-4">
    <View className="mb-4">
      <Text className="text-xl font-bold mb-2">Información Personal</Text>
      <Text className="text-lg">Nombre: {name}</Text>
      <Text className="text-lg">Número celular: {phoneNumber}</Text>
    </View>
  </ScrollView>
);

const EmergencyContacts = ({ emergencyContacts }) => (
  <ScrollView className="p-4">
    <Text className="text-xl font-bold mb-2">Contactos de emergencia</Text>
    {emergencyContacts.map((contact, index) => (
      <View key={index} className="mb-4">
        <Text className="text-lg">Nombre: {contact.name}</Text>
        <Text className="text-lg">Teléfono: {contact.phone}</Text>
      </View>
    ))}
  </ScrollView>
);

const Profile = () => {
  const name = "Alice Johnson";
  const phoneNumber = "555-1234";
  const emergencyContacts = [
    { name: 'John Doe', phone: '123-456-7890' },
    { name: 'Jane Smith', phone: '098-765-4321' },
    { name: 'Michael Scott', phone: '222-842-4321' }
  ];

  return (
    <SafeAreaView className="flex-1">
      <PersonalInfo name={name} phoneNumber={phoneNumber} />
      <EmergencyContacts emergencyContacts={emergencyContacts} />
    </SafeAreaView>
  );
};

export default Profile;
