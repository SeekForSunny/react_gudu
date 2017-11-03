/**
 * Created by SMART on 2017/8/10.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Button,
    FlatList,
    Text
} from 'react-native';

import RankingListItem from './RankingListItem';
import HTTPRequest from '../HTTP/HTTPRequest';
import CommonNavBar from '../Common/CommonNavBar'

export default class RankingListIndex extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data: [],
        };
        this.renderItem = this.renderItem.bind(this);
        this.renderRightItem = this.renderRightItem.bind(this);
        this.renderTitleItem = this.renderTitleItem.bind(this);

    }

    renderItem({item}) {
        return (
            <RankingListItem rowData={item}/>
        )
    }

    renderTitleItem(){
        return(
            <Image source={{uri:'navtitle_rank_106x20_'}} style={styles.titleItemStyle}/>
        )
    }
    renderRightItem(){
        return(
            <Text style={styles.titleStyle}>设置</Text>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <CommonNavBar
                titleItem={this.renderTitleItem}
                rightItem={this.renderRightItem}
                />

                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => index}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }

    componentDidMount() {
        let url = 'http://guangdiu.com/api/getranklist.php';
        HTTPRequest.post(url)
            .then((responseData) => {
                console.log(responseData.data);
                this.setState({data:responseData.data})
            })
            .catch(e=>{
                console.log(e);
            })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4'
    },
    titleItemStyle:{
        width:106,
        height:20,
        resizeMode:'contain',
        marginLeft:50,
    },
    titleStyle:{
        fontSize:20,
        color:'#0F9C00',
        marginRight:15,
    }
});
