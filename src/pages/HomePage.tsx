import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomePage = () => {
  return (
    <View style={styles.center}>
      <Text>Welcome to Don't Home Page</Text>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  center:{
    textAlign:'center',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
})