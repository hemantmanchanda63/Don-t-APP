import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Settings1 = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.center}>
      <Text>Settingss</Text>
    </View>
  )
}

export default Settings1

const styles = StyleSheet.create({
center:{
    textAlign:'center',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}

})