import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as MediaLibrary from "expo-media-library";

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Request Media Permissions" onPress={async() => {
        const result = await MediaLibrary.requestPermissionsAsync();
        console.log('result: ', result)
      }}/>
      <StatusBar style="auto" />
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
