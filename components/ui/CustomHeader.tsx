import React from 'react';
import { SafeAreaView, View, Text, Pressable } from 'react-native';
// If you want to replicate the "notifications" icon from Material Icons
import { MaterialIcons } from '@expo/vector-icons';

export function CustomHeader() {
  return (
    <View className="flex-row items-center justify-between mt-4 mb-4">
      <Text className="text-2xl font-bold text-pink-300">
        LunaLock
      </Text>

      <Pressable onPress={() => console.log('Notifications tapped')}>
        <MaterialIcons name="notifications" size={24} color="#333" />
      </Pressable>
    </View>
  );
}
