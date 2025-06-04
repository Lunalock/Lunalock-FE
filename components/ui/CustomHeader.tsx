import React from 'react';
import { SafeAreaView, View, Text, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

export function CustomHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>LunaLock</Text>

      <Pressable onPress={() => console.log('Notifications tapped')}>
        <MaterialIcons name="notifications" size={24} color="#fff" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginVertical: 16, 
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold', 
    color: Colors.dark.pink, 
  },
});
