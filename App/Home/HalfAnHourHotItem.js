//半小时热门
import React, {PureComponent} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    Dimensions
} from 'react-native'

const {width, height} = Dimensions.get('window');

export default class HalfAnHourHotItem extends PureComponent {
    render() {
        const {id,title,image,iftobuy,buyurl} = this.props.rowData;
        return (
            <View style={styles.container}>
                <Image source={{uri:image == '' ? 'defaullt_thumb_83x83_':image}} style={styles.imageStyle}/>
                    <Text numberOfLines={3} style={styles.titleStyle}>{title}</Text>
                <Image source={{uri:'arrow_right'}} style={styles.arrowIconStyle}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        height: 100,
        width: width,
        alignItems:'center',
        backgroundColor:'white',
        borderBottomColor:'rgba(200,200,200,1)',
        borderBottomWidth:0.5,
        paddingLeft:15,
    },
    imageStyle:{
        height:83,
        width:83,
        resizeMode:'contain'
    },
    titleStyle:{
        width:width*0.65,
        fontSize:17,
        color:'gray',
        marginLeft:10,
    },
    arrowIconStyle:{
        width:25,
        height:35,
        resizeMode:'contain'
    }
});