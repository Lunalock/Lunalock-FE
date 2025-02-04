// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { ActivityIndicator, MD2Colors } from 'react-native-paper';
// import { verifyInstallation } from 'nativewind';

// export default function HomeScreen() {
//   verifyInstallation()
  
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ActivityIndicator animating={true} />
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>

//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12'
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
      
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
      
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });

// App.tsx
import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider, Button, Text as PText } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';

// A helper type for our calendar day data
type CalendarDay = {
  label: string;
  // Optional custom styling tokens
  textColorClass?: string;
  bgColorClass?: string;
  rounded?: boolean;
  hasShadow?: boolean;
  hasRing?: boolean;
};

export default function App() {
  // You can later replace these hard-coded days with dynamic logic
  const calendarDays: CalendarDay[] = [
    { label: '25', textColorClass: 'text-gray-500' },
    { label: '26', textColorClass: 'text-gray-500' },
    { label: '27', textColorClass: 'text-gray-500' },
    { label: '28', textColorClass: 'text-gray-500' },
    { label: '1' },
    { label: '2', bgColorClass: 'bg-purple-900/50', rounded: true, hasShadow: true },
    { label: '3' },
    { label: '4' },
    { label: '5' },
    { label: '6' },
    { label: '7' },
    { label: '8', bgColorClass: 'bg-gray-800', rounded: true, hasRing: true },
    { label: '9' },
    { label: '10' },
    { label: '11' },
    { label: '12' },
    { label: '13' },
    { label: '14' },
    { label: '15', bgColorClass: 'bg-pink-900/50', rounded: true, hasShadow: true },
  ];

  return (
    <PaperProvider>
      <SafeAreaView className="flex-1 bg-gray-950">
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {/* Header */}
          <View className="px-4 py-6 flex-row items-center justify-between">
            <Text className="text-2xl font-bold text-white">LunaLock</Text>
            <TouchableOpacity className="p-2 rounded-full bg-gray-800">
              <FontAwesome5 name="gear" size={20} color="#D1D5DB" />
            </TouchableOpacity>
          </View>

          <View className="px-4 py-6 flex-row items-center justify-between">
            <PText className="text-2xl">LunaLock</PText>
            <TouchableOpacity className="p-2 rounded-full bg-gray-800">
              <FontAwesome5 name="gear" size={20} color="#D1D5DB" />
            </TouchableOpacity>
          </View>

          {/* Info Cards */}
          <View className="px-4 space-y-4 mb-6">
            {/* Next Period Card */}
            <TouchableOpacity
              activeOpacity={0.8}
              className="bg-gradient-to-r from-pink-950 to-pink-900 p-4 rounded-xl shadow-md"
            >
              <Text className="text-pink-300 text-sm mb-1">Next Period</Text>
              <Text className="text-xl font-bold text-white">March 15, 2025</Text>
              <Text className="text-pink-300 text-sm">In 7 days</Text>
            </TouchableOpacity>

            {/* Ovulation Day Card */}
            <TouchableOpacity
              activeOpacity={0.8}
              className="bg-gradient-to-r from-purple-950 to-purple-900 p-4 rounded-xl shadow-md"
            >
              <Text className="text-purple-300 text-sm mb-1">Ovulation Day</Text>
              <Text className="text-xl font-bold text-white">March 1, 2025</Text>
              <Text className="text-purple-300 text-sm">High Fertility</Text>
            </TouchableOpacity>

            {/* Cycle Length Card */}
            <TouchableOpacity
              activeOpacity={0.8}
              className="bg-gradient-to-r from-blue-950 to-blue-900 p-4 rounded-xl shadow-md"
            >
              <Text className="text-blue-300 text-sm mb-1">Cycle Length</Text>
              <Text className="text-xl font-bold text-white">28 Days</Text>
              <Text className="text-blue-300 text-sm">Regular</Text>
            </TouchableOpacity>
          </View>

          {/* Calendar Section */}
          <View className="px-4 mb-6">
            {/* Month Navigation */}
            <View className="flex-row justify-between items-center mb-4">
              <TouchableOpacity className="p-2">
                <FontAwesome5 name="chevron-left" size={16} color="#9CA3AF" />
              </TouchableOpacity>
              <Text className="text-lg font-bold text-white">March 2025</Text>
              <TouchableOpacity className="p-2">
                <FontAwesome5 name="chevron-right" size={16} color="#9CA3AF" />
              </TouchableOpacity>
            </View>

            {/* Day Initials */}
            <View className="flex-row flex-wrap justify-between mb-4">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                <Text
                  key={idx}
                  style={{ width: '14.28%' }}
                  className="text-sm text-gray-400 text-center"
                >
                  {day}
                </Text>
              ))}
            </View>

            {/* Calendar Day Buttons */}
            <View className="flex-row flex-wrap justify-between">
              {calendarDays.map((day, idx) => {
                // Build a className string based on the day’s properties.
                const baseClasses = 'p-2 text-center';
                const textColor = day.textColorClass ? day.textColorClass : 'text-white';
                const bgColor = day.bgColorClass ? day.bgColorClass : '';
                const rounded = day.rounded ? 'rounded-full' : '';
                const shadow = day.hasShadow ? 'shadow-md' : '';
                const ring = day.hasRing ? 'ring-2 ring-white shadow-md' : '';

                return (
                  <TouchableOpacity
                    key={idx}
                    activeOpacity={0.8}
                    style={{ width: '14.28%' }}
                    className={`${baseClasses} ${textColor} ${bgColor} ${rounded} ${shadow} ${ring}`}
                  >
                    <Text>{day.label}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Action Buttons */}
          <View className="px-4 space-y-3 mb-8">
            <Button
              mode="contained"
              contentStyle={{ paddingVertical: 12 }}
              labelStyle={{ fontWeight: 'bold' }}
              className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl"
              onPress={() => {}}
            >
              Track Symptoms
            </Button>
            <Button
              mode="contained"
              contentStyle={{ paddingVertical: 12 }}
              labelStyle={{ fontWeight: 'bold' }}
              className="bg-gray-800 rounded-xl"
              onPress={() => {}}
            >
              Add Notes
            </Button>
            <Button
              mode="contained"
              contentStyle={{ paddingVertical: 12 }}
              labelStyle={{ fontWeight: 'bold' }}
              className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl"
              onPress={() => {}}
            >
              Upgrade to Pro
            </Button>
          </View>

          {/* Footer */}
          <View className="bg-gray-900 border-t border-gray-800 px-6 py-4 flex-row justify-around items-center">
            <TouchableOpacity className="items-center">
              <FontAwesome5 name="home" size={24} color="#EC4899" />
              <Text className="text-xs text-pink-500">Home</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
              <FontAwesome5 name="chart-line" size={24} color="#9CA3AF" />
              <Text className="text-xs text-gray-400">Stats</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
              <FontAwesome5 name="calendar" size={24} color="#9CA3AF" />
              <Text className="text-xs text-gray-400">Calendar</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
              <FontAwesome5 name="user" size={24} color="#9CA3AF" />
              <Text className="text-xs text-gray-400">Profile</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}
