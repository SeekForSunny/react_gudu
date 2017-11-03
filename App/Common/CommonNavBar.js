//一级界面自定义导航栏
import React,{Component,PropTypes} from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';

const {width}  = Dimensions.get('window');

export default class CommonNavBar extends Component{

    static propTypes={
        leftItem:PropTypes.func,
        titleItem:PropTypes.func,
        rightItem:PropTypes.func,
    };

    renderLeftItem(){
       if (this.props.leftItem == undefined) return ;
       return this.props.leftItem()
    }
    renderRightItem(){
        if (this.props.rightItem == undefined) return;
        return this.props.rightItem()
    }
    renderTitleItem(){
        if (this.props.titleItem == undefined) return;
        return this.props.titleItem()
    }

    render(){

        return(
            <View style={styles.container}>
                <View>
                    {this.renderLeftItem()}
                </View>
                <View>
                    {this.renderTitleItem()}
                </View>
                <View>
                    {this.renderRightItem()}
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        height:64,
        backgroundColor:'white',
        width: width,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:20,
        alignItems:'center',
        borderBottomWidth:0.5,
        borderBottomColor:'rgba(200,200,200,1)',
},
});