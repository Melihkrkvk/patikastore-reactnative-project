import React from "react";
import { View, Text, Image } from "react-native";
import styles from './ShopItems.style';

            
            

const ShopItems = ({items}) => {
   
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: items.imgURL}}/>
            <Text style={styles.title}>{items.title}</Text>
            <Text style={styles.price_text}>{items.price}</Text>
            <Text style={styles.stock_text}>{items.inStock === true ? '' : 'STOKTA YOK'}</Text>
           
        
            
            
          
            
        </View>
    );
};
export default ShopItems;