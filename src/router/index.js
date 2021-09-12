import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Alat, Dashboard } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="Alat"
        component={Alat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
