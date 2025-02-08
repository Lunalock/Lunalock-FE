import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function StatsScreen() {
  const queryParams = useLocalSearchParams()
  console.log(queryParams)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Page {queryParams['foo']}</Text>
      {/* Add whatever stats UI or components you want here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
});
