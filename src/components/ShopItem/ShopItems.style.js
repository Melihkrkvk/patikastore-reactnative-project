import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        marginTop: 10,
        margin: 8,
        backgroundColor: '#ECEFF1',
        borderRadius: 10,
        flex: 1,
        
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 4,
        flex: 1,
        
    },
    price_text: {
        textAlign: 'left',
        margin: 5,
        color: '#A9AAAB',
        fontSize: 14,

    },
    image: {
        height: Dimensions.get('window').height /4,
        borderRadius: 10,
        borderColor: '#ECEFF1',
        borderWidth: 14,
        
        
    },
    stock_text: {
        color: 'red',
        fontSize: 14,
        paddingLeft: 4,
        paddingBottom: 2,
        fontWeight: 'bold',
    },




});