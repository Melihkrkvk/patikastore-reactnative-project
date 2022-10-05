import React from "react";
import { Text, SafeAreaView, FlatList, StyleSheet, TextInput  } from "react-native";
import items_patika from './items_patika.json';
import ShopItems from "./components/ShopItem/ShopItems";


function App() {
 
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>PATİKASTORE</Text>
      <TextInput 
      placeholder="Ara..."
      style={styles.input}
       ></TextInput>

   
    <FlatList 
    horizontal={false} 
    numColumns={2} 
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    data={items_patika} 
    renderItem={({item}) => (<ShopItems items={item} />)}
    />
      
 
     
    </SafeAreaView>
  );
  




};

const styles = StyleSheet.create({
 container: {
  flex: 1,
 },
 header: {
  color: '#800080',
  margin: 10,
  fontWeight: 'bold',
  fontSize: 30,
 },
 input: {
  backgroundColor: '#ECEFF1',
  borderRadius: 10,
  margin: 8,
  padding: 10,
 }
});
export default App;
