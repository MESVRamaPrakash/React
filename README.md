React Native Day 1 Notes (Expo) – By Rama
🚀 Day 1 Topics Covered
What is React Native?

Why use Expo?

Setting up the environment

Creating your first Expo project

Understanding View, Text, StyleSheet, StatusBar

Folder structure

Running the app on mobile

🧠 What is React Native?
React Native is a framework to build mobile apps using JavaScript and React. It allows you to write one codebase for both Android and iOS.

⚡ What is Expo?
Expo is a toolchain that makes React Native development easier by handling native builds, app previewing, and libraries out of the box.

🛠️ Environment Setup & First Project
✅ Install Expo CLI
bash
Copy
Edit
npm install -g expo-cli
✅ Create a new Expo project
bash
Copy
Edit
npx create-expo-app MyFirstApp
✅ Run your app
bash
Copy
Edit
cd MyFirstApp
npx expo start
Then scan the QR code using the Expo Go app on your phone.

📂 Default Folder Structure
go
Copy
Edit
MyFirstApp/
├── App.js
├── node_modules/
├── package.json
└── assets/
App.js – Entry point of your application

assets/ – For images, fonts, etc.

🧱 Day 1 Core Components
1. View
A container that acts like a <div> in HTML. Used for layout.

✅ Syntax:
jsx
Copy
Edit
<View style={...}> ... </View>
2. Text
Used to display text on the screen.

✅ Syntax:
jsx
Copy
Edit
<Text style={...}>Hello World</Text>
3. StatusBar
Used to style the top status bar (time, battery etc.)

✅ Syntax:
jsx
Copy
Edit
<StatusBar barStyle="light-content" />
4. StyleSheet
Helps write and organize CSS-like styles.

✅ Syntax:
jsx
Copy
Edit
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
✅ Complete Day 1 Example Code
jsx
Copy
Edit
import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.text}>Hello Rama! 🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
📏 Responsive Design Tip
Get screen width:

js
Copy
Edit
import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
🧠 Useful Commands Recap
Action	Command
Install Expo CLI	npm install -g expo-cli
Create new app	npx create-expo-app MyFirstApp
Start dev server	npx expo start
Install dependencies	npm install <package>
Install expo package	npx expo install <expo-package>

✅ Day 1 Summary
Created a new Expo project

Learned about View, Text, StatusBar, StyleSheet

Ran app on emulator / mobile device

Organized app with simple styling

📌 To-Do Next (Day 2 Preview)
Learn about Button, Image, ScrollView, map(), arrays, and display dynamic UI

