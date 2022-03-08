import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity, Text, View } from 'react-native';

export default function Start({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.navigate("Signup")} >
          <Text style={{ fontSize :34}}>Hy Platform</Text>
      </TouchableOpacity>
      <Text style={{ fontSize :15}}>Music Application</Text>
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
