import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Layout from './Layout/Layout';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className='pt-4 flex-1'>
      <NavigationContainer>
        <Layout />
      </NavigationContainer>
    </SafeAreaView>
  );
}

