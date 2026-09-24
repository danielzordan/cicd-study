import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const MyButton = () => {
  const [count, setCount] = useState(0);

  const handlePressDecrement = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  }

  const handlePressIncrement = () => {
    setCount(count + 1);
  }

  return (
    <View style={styles.container} >
      <Button color='#fff' title="+ Incrementar" onPress={handlePressIncrement} />
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{count}</Text>
      <Button color='#fff' title="- Decrementar" onPress={handlePressDecrement} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    height: 60,
    borderRadius: 16,
    backgroundColor: '#00d5ff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});


export default MyButton;