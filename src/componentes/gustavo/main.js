import React from 'react';
import { Text, View } from 'react-native';

export default function Gustavo() {
  return (
    <View style={styles.container}>
      <Gustavo/>
      <Danyela/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
