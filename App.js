
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

export default function App() {
 
 const [shoppingItem, setShoppingItem] = useState('');
 const [shoppingList, setShoppingList] = useState([]);

 const handleAddItem = () => {
if (shoppingItem.trim() != '') {
  setShoppingList((prevlist) => [
    ...prevlist, {
      id: Date.now().toString(), text: shoppingItem.trim()
    },
  ]);
  setShoppingItem('');
}

 };

 const clearList = () => {
  setShoppingList([]);
 };

 const renderItem = ({item}) => (
  <View style={styles.item}>
    <Text>{item.text}</Text>
    </View>
 )
  

  return (
    <View style={styles.container}>
<Text style={styles.title}>Shoppinglist</Text>
<TextInput
style={styles.input}
placeholder='Enter an item'
value={shoppingItem}
onChangeText={(text) => setShoppingItem(text)}
/>

<View style={styles.buttonContainer}>
  <Button title="Add" onPress={handleAddItem} />
<Button title="Clear" onPress={clearList} />

</View>

<FlatList
        data={shoppingList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 100, 
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '80%',
  },
  list: {
    flexGrow: 0,
    width: '80%',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  title: {
    fontSize: 30,
    marginBottom: 30
  }
});
