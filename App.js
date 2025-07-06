// import {View, Text, StatusBar, StyleSheet, ScrollView} from 'react-native';

// //Tasks - 1,2,3,4 and 5

// export default function App() {
//   return (
//     <ScrollView style={styles.container}>
//       <StatusBar barStyle={'light-content'} backgroundColor={'#33f'}/>
//       <View style={{backgroundColor:'#555',width:1000, flex:1, justifyContent:'center',alignItems:'center',}}>
//         <Text style={styles.text1}>Rama 💙</Text>
//         <Text style={styles.text2}>Aspiring App Developer</Text>
//         <Text style={styles.text3}>"Code. Create. Repeat."</Text>
//       </View>
//       <View style={{backgroundColor:'#000',width:1000, flex:1, justifyContent:'center',alignItems:'center',}}>
//         <Motivator />
//       </View>
//       <View style={{backgroundColor:'#555',width:1000, flex:1, justifyContent:'center',alignItems:'center',}}>
//         <Motivator />
//       </View>
//     </ScrollView>
    
//   ); 
// }

// function Motivator() {
//   return (
//     <View>
//       <Text style={styles.text4}>"Learning React Native" </Text>
//       <Text style={styles.text5}>-  Rama Prakash</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container : {
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
//     backgroundColor:'#000',
//   },
//   text1 : {
//     color:'#fff',
//     fontSize:21,
//     fontWeight:'bold',
//     marginBottom:10,
//   },
//   text2: {
//     color:'#fff',
//     fontSize:17,
//     fontWeight:'bold',
//     marginBottom:5,
//   },
//   text3: {
//     color:'#fff',
//     fontSize:14,
//   },
//   text4: {
//     color:'cyan',
//     fontSize:17,
//     marginTop:30,
//   },
//   text5:{
//     color:'grey',
//     fontSize:14,
//     paddingTop:5,
//     paddingLeft:80,
//   },
// })

// import React from 'react';
// import { ScrollView, View, Text, StyleSheet, StatusBar, Image } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.wrapper}>
//       <StatusBar barStyle="light-content" backgroundColor="#000" />

//       <ScrollView
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         style={styles.scroll}
//       >
//         {/* Page 1 */}
//         <View style={[styles.page, { backgroundColor: '#111' }]}>
//           <Text style={styles.title}>🌟 Welcome, Rama!</Text>
//           <Text style={styles.subtitle}>Swipe to explore</Text>
//         </View>

//         {/* Page 2 */}
//         <View style={[styles.page, { backgroundColor: '#222' }]}>
//           <Text style={styles.title}>🔥 Learn React Native</Text>
//           <Text style={styles.subtitle}>Build beautiful apps easily</Text>
//         </View>

//         {/* Page 3 */}
//         <View style={[styles.page, { backgroundColor: '#333' }]}>
//           <Text style={styles.title}>🚀 Launch Your Ideas</Text>
//           <Text style={styles.subtitle}>With confidence and style</Text>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
//   scroll: {
//     flex: 1,
//   },
//   page: {
//     width: 360, // screen width
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 24,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#00FFCC',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 18,
//     color: '#ccc',
//   },
// });


// import {View, Text, StatusBar, StyleSheet} from 'react-native';

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './HomeScreen';
// import SecondScreen from './SecondScreen';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#000' }, headerTintColor: '#fff' }}>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="SecondScreen" component={SecondScreen} options={{ title: 'Next Page' }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

export default function App() {
  const flashcards = [
    {
      question: 'What is View?',
      answer: 'A container used to layout elements, like div in HTML.',
    },
    {
      question: 'What is Text?',
      answer: 'Component used to display text on the screen.',
    },
    {
      question: 'What is StatusBar?',
      answer: 'Controls color, style, and visibility of the phone’s top bar.',
    },
    {
      question: 'What does export default do?',
      answer: 'It exports the main component so React Native can render it.',
    },
    {
      question: 'Why use StyleSheet?',
      answer: 'To define and organize reusable styles.',
    },
    {
      question: 'What is flex: 1?',
      answer: 'Takes up all available space in a container.',
    },
  ];

  const [flipped, setFlipped] = useState({});

  const toggleFlip = (index) => {
    setFlipped((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Text style={styles.heading}>📚 Day 1 Flashcards</Text>

      <ScrollView>
        {flashcards.map((card, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => toggleFlip(index)}
          >
            <Text style={styles.cardText}>
              {flipped[index] ? card.answer : card.question}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'cyan',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'cyan',
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

