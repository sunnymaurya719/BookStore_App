import { StyleSheet, Text, View } from 'react-native'
import React, { createRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import App from '../App';
import ViewBook from './ViewBook';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name ="App" component={App} />
            <Stack.Screen name='ViewBook' component={ViewBook} />
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})