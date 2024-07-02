import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const PersonalInfo = ({ name, phoneNumber }) => {
  return (
    <ScrollView className="p-4">
      <View className="mb-4">
        <Text className="text-xl font-bold mb-2">Personal Info</Text>
        <Text className="text-lg">Name: {name}</Text>
        <Text className="text-lg">Phone Number: {phoneNumber}</Text>
      </View>
    </ScrollView>
  );
};

const EmergencyContacts = ({ emergencyContacts }) => {
  return (
    <ScrollView className="p-4">
      <Text className="text-xl font-bold mb-2">Emergency Contacts</Text>
      {emergencyContacts.map((contact, index) => (
        <View key={index} className="mb-4">
          <Text className="text-lg">Name: {contact.name}</Text>
          <Text className="text-lg">Phone: {contact.phone}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const Profile = ({ name, phoneNumber, emergencyContacts }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Personal Info">
        {() => <PersonalInfo name={name} phoneNumber={phoneNumber} />}
      </Tab.Screen>
      <Tab.Screen name="Emergency Contacts">
        {() => <EmergencyContacts emergencyContacts={emergencyContacts} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Profile;
