import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

export default function App() {

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center 
        min-h-[85vh] px-4">
          <View className="relative mt-5 ">
            <Text className="text-3xl text-white font-bold center">
              Seguridad para ciudadanos de la Capital de{' '}
              <Text className="text-secondary-200">Puebla</Text>
            </Text>
          </View>
          <Text className="text-xl font-pregular text-gray-100 mt-7 text-center">
            Esta aplicación que te permitirá comunicarte con tus familiares o 
            contactos de emergencia que selecciones de una manera rápida en caso de
            un accidente también podrá medir tu actividad GPS y detectar si tuviste 
            un accidente para comunicárselo a las autoridades y tus contactos.
          </Text>
          <CustomButton 
            title="Continua a tu perfil"
            handlePress={() => router.push('/profile')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622'
      style='light'/>
    </SafeAreaView>
  );
}

