import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Navigation,SingOutStack} from "./Navigation"


export default function App() {
  return <SingOutStack/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
