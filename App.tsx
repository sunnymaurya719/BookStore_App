import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'



const App = ({navigation}:any) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#1A1A1A' }}>
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

      <Text
      style={{
        fontSize:20,
        marginTop:30,
        marginLeft:20,
        fontWeight:700
      }}>
        Trending Books
      </Text>


      <View style={{ marginTop: 20 }}>
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
                }}
                onPress={() =>{
                  navigation.navigate('ViewBook')
                }}
                >
                <Image
                  source={require('./Assets/pdf.png')}
                  style={{
                    width: 50,
                    height: 50,
                    alignSelf: 'center',
                    marginTop: 25
                  }}
                />
                <Text style={{ alignSelf: 'center', marginTop: 10, fontWeight: 700 }}>{'Book' + (index + 1)}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text
        style={{
          marginLeft:20,
          marginTop:30,
          fontWeight:700,
          fontSize:20
        }}
      >
        New Books 
      </Text>

      <View style={{ marginTop: 20 }}>
        <FlatList
          data={[1, 1, 1, 1, 1, 1]}
          numColumns={2}
          renderItem={({ item, index }) => {
            return (
              <View style={{
                width:'50%',
                justifyContent:'center',
                alignItems:'center'
              }}>
                <TouchableOpacity
                style={{
                  width: 120,
                  height: 120,
                  borderColor: '#fff',
                  borderRadius: 10,
                  borderWidth: 1,
                  marginTop:20               
                }}>
                  <Image 
                  source={require('./Assets/pdf.png')}
                  style={{
                    width:50,
                    height:50,
                    alignSelf:'center',
                    marginTop:20
                  }}
                  />

                  <Text 
                  style ={{alignSelf:'center',marginTop:10,fontWeight:700}}>
                    {'Book'+ index}
                  </Text>


              </TouchableOpacity>
              </View>

            );
          }}
        >

        </FlatList>

      </View>
    </View>
  );
};

export default App

const styles = StyleSheet.create({})