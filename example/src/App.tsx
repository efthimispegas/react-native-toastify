import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { ToastProvider } from 'react-native-toastify';
import ShowToastButton from './ShowToastButton';
export const theme: any = {
  error: {
    primary: '#000000',
    secondary: '#fff',
  },
  success: {
    primary: '#2e7d32',
    secondary: '#fff',
  },
  warning: {
    primary: '#ff9800',
    secondary: '#fff',
  },
  default: {
    primary: '#000000',
    secondary: '#fff',
  },
};

export default function App() {
  return (
    <ToastProvider theme={theme}>
      <View style={styles.container}>
        <ShowToastButton />
      </View>
    </ToastProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
