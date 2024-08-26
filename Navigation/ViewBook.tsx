import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pdf from 'react-native-pdf'



const ViewBook = () => {
  return (
    <View style={{flex:1,}}>
        <Pdf
        trustAllCerts={false}
        source={require('../Assets/AndroidDevelopment.pdf')}
        style={{flex:1,width:Dimensions.get('window').width}}
        />
    </View>
  )
}

export default ViewBook

const styles = StyleSheet.create({
    pdf:{
    }
})