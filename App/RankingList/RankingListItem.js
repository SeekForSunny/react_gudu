//半小时风云榜Item
import React,{PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions
} from 'react-native';

const {width} = Dimensions.get('window');

export default class RankingListItem extends PureComponent{
    render(){
        const {title,image} = this.props.rowData;
        return(
            <View style={styles.container}>
                <Image source={{uri:image == ''?'defaullt_thumb_83x83_':image}} style={styles.imageStyle}/>
                <Text numberOfLines={3} style={styles.titleStyle}>{title}</Text>
                <Image source={{uri: 'arrow_right'}} style={styles.arrowIconStyle}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:100,
        width:width,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:15,
        paddingRight:15,
        borderBottomColor:'rgba(200,200,200,1)',
        borderBottomWidth:0.5,
    },
    imageStyle:{
        width:80,
        height:80,
        resizeMode:'contain'
    },
    titleStyle:{
        fontSize:17,
        width:0.65*width,
        marginLeft:10,
        color:'gray'
    },
    arrowIconStyle: {
        width: 25,
        height: 35,
        resizeMode: 'contain'
    }
})