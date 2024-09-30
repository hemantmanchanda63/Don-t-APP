import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Settings = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.center}>
      <Text>Settings</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('settings1')}
      />
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
center:{
    textAlign:'center',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}

})