import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PageDiv = ({txt}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.h1]}>{txt}</Text>
    </View>
  )
}

export default PageDiv

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#525259'
    },
    h1:{
        fontSize:30,
        color:'#CFF250',
        textTransform:'uppercase'
    }
})