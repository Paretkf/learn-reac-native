import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  Alert
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/1186035_3480401304973_700598923_n.jpg')} style={{width: '100%', height: '100%'}}>
        <Text>This is my App.</Text>

        <Button
          title="กดหน่อย"
          onPress={() => Alert.alert('Hello Cofen!!')}
        />
      </ImageBackground>
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
