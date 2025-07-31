import {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count,setCount] = useState<number>(0);

 // const handlePress = () => {console.log("you clicked the button")}; 
  const handlePress = () => {setCount(count + 1)};

  return (
    <View style={styles.container}>
     <Text>COMPONENTS V1</Text> 
     <Text>{count}</Text>
     <Button
       title="CLICK HERE"
       onPress={handlePress}
     />
    
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