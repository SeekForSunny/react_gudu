//搜索全网折扣
import  React,{Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export  default class SearchOnSale extends Component{
   render(){
       return(
           <View style={styles.container}>
               <Text>搜索全网折扣</Text>
           </View>
       );
   }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'purple',
    }
});
