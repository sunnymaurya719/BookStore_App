import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
      <View style={{ flex:1,backgroundColor: '#1A1A1A' }}>
      <Text 
      style={{
        color: '#FFFFF',
        fontSize: 20,
        fontWeight: '700',
        marginTop: 30,
        marginLeft: 20,
      }}>
        Book App
      </Text>


      <View style={{marginTop:20}}>
      <FlatList
          data={[1, 1, 1, 1, 1, 1]}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
              style={{
                width: 120,
                height: 120,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#fff',
                marginLeft: 20,
              }}></TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default App

const styles = StyleSheet.create({})