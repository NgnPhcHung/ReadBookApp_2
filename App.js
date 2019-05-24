import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContent from './src/component/ScreenManager'
export default class App extends React.Component {
  render() {
    return (
      <AppContent />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
