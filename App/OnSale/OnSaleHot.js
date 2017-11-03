//海淘热门
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button,
    FlatList,
} from 'react-native'

import CommonNavBar from '../Common/CommonNavBar';
import HTTPRequest from '../HTTP/HTTPRequest';
import OnSaleHotItem from './OnSaleHotItem';

export default class OnSaleHot extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data: [],
        };

        this.renderRightItem = this.renderRightItem.bind(this);
        this.renderTitleItem = this.renderTitleItem.bind(this);
        this.closeModel = this.closeModel.bind(this);
        this.renderItem = this.renderItem.bind(this);

    }

    //设置导航栏TitleItem
    renderTitleItem() {
        return (
            <Text style={styles.titleItemStyle}>热门海淘</Text>
        );
    }

    //设置导航栏右侧Item
    renderRightItem() {
        return (
            <Button title="关闭" color='#0F9C00' onPress={this.closeModel}/>
        );
    }

    //返回上级界面
    closeModel() {
        this.props.closeModel();
    };

    renderItem({item}) {
        return (
            <OnSaleHotItem rowData = {item}/>
        );

    }

    render() {
        return (
            <View style={styles.container}>
                <CommonNavBar
                    rightItem={this.renderRightItem}
                    titleItem={this.renderTitleItem}
                />
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => index}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }

    loadData() {
        let url = 'http://guangdiu.com/api/gethots.php';
        let params = {'c': 'us'};
        HTTPRequest.get(url, params, {})
            .then(response => {
                this.setState({
                    data: response.data,
                });
                console.log(response);
            })
            .catch(e => {
                console.log(e);
            })
    }

    componentDidMount() {
        this.loadData()
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
    },
    rightItemStyle: {
        marginRight: 15,
        color: '#0F9C00',
        fontSize: 20,
    },
    titleItemStyle: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 55,
    }
});