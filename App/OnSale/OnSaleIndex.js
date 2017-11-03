/**
 * Created by SMART on 2017/8/10.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    Modal,
} from 'react-native';

import HTTPRequest from '../HTTP/HTTPRequest';
import CommonNavBar from '../Common/CommonNavBar'
import OnSaleIndexItem from "./OnSaleIndexItem";
import OnSaleHot from './OnSaleHot' // 海淘热门 - 二级界面


export default class OnSaleIndex extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data: [],
            isModal: false,
        };

        this.renderItem = this.renderItem.bind(this);
        this.renderLeftItem = this.renderLeftItem.bind(this);
        this.renderRightItem = this.renderRightItem.bind(this);
        this.renderTitleItem = this.renderTitleItem.bind(this);
        this.showOnSaleHot = this.showOnSaleHot.bind(this);
        this.onRequestClose = this.onRequestClose.bind(this);
    }

    renderItem({item}) {
        return (
            <OnSaleIndexItem rowData={item}/>
        )
    };

    renderLeftItem() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={this.showOnSaleHot}
            >
                <Image source={{uri: 'hot_icon_20x20_'}} style={styles.leftItemStyle}/>
            </TouchableOpacity>
        );
    };

    renderRightItem() {
        return (
            <Image source={{uri: 'search_icon_20x20_'}} style={styles.rightItemStyle}/>
        );
    };

    renderTitleItem() {
        return (
            <Image source={{uri: 'navtitle_abroad_down_66x20_'}} style={styles.titleItemStyle}/>
        );
    };

    onRequestClose = () => {
        this.setState({
            isModal: false
        })
    };

    showOnSaleHot() {
        this.setState({
            isModal: true,
        })
    }

    render() {
        return (
            <View style={styles.container}>

                <Modal
                    animationType='slide'
                    transparent={false}
                    visible={this.state.isModal}
                    onrequestclose={this.onRequestClose}
                >
                    <OnSaleHot closeModel={()=>{
                        this.setState({
                            isModal:false,
                        })
                    }}/>
                </Modal>

                <CommonNavBar
                    leftItem={this.renderLeftItem}
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

    componentDidMount() {
        let url = 'http://guangdiu.com/api/getlist.php';
        let params = {'country': 'us', 'count': '20'};
        HTTPRequest.post(url, params)
            .then((responseData) => {
                this.setState({data: responseData.data})
            }).catch(e => {
            console.log(e)
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftItemStyle: {
        width: 20,
        height: 20,
        marginLeft: 15,
        tintColor: '#0F9C00'
    },
    rightItemStyle: {
        width: 20,
        height: 20,
        marginRight: 15,
        tintColor: '#0F9C00'
    },
    titleItemStyle: {
        width: 66,
        height: 20,
        resizeMode: 'contain',
    }
});
