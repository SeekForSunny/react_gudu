//海淘热门
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    Dimensions,
} from 'react-native';
const {width} = Dimensions.get('window');

export default class OnSaleHotItem extends Component {
    render() {
        const {title, image} = this.props.rowData;
        return (
            <View style={styles.container}>
                <Image source={{uri: image == '' ? 'defaullt_thumb_83x83_' : image}} style={styles.imageStyle}/>
                <Text numberOfLines={3} style={styles.titleStyle}>{title}</Text>
                <Image source={{uri: 'arrow_right'}} style={styles.arrowIconStyle}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: width,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingRight:15,
        paddingLeft:15,
        backgroundColor:'white',
        borderBottomColor:'rgba(200,200,200,1)',
        borderBottomWidth:0.5,
    },
    imageStyle:{
        width:80,
        height:80,
        resizeMode:'contain',
    },
    titleStyle:{
        width:0.65*width,
        fontSize:17,
        color:'gray',
        marginLeft:10,
    },
    arrowIconStyle: {
        width: 25,
        height: 35,
        resizeMode: 'contain'
    }
});