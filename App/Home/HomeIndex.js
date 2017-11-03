/**
 * Created by SMART on 2017/8/10.
 */
import React, {PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    Modal
} from 'react-native';

import HomeIndexItem from './HomeIndexItem'
import HTTPRequest from '../HTTP/HTTPRequest';

import HalfAnHourHot from '../Home/HalfAnHourHot' //半小时热门  - 二级界面
import CommonNavBar from '../Common/CommonNavBar'
import ShowDetail from '../Common/ShowDetail'

export default class HomeIndex extends PureComponent {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data: [],
            refreshing: false,
            isModal: false
        };
        //加载更多时使用
        this.sinceid = '';
        this.isLoadMore = false;
    }

    //展示详情页
    _popToShowDetail(item) {
        this.props.navigation.navigate('ShowDetail',{url:'https://guangdiu.com/api/showdetail.php'+'?id='+item.id+'&v=21'});
    };

    //设置Item
    _renderItem = ({item}) => (

        <TouchableOpacity
            activeOpacity={1}
            onPress={this._popToShowDetail.bind(this, item)}
        >
            <HomeIndexItem rowData={item}/>
        </TouchableOpacity>
    );

    onRequestClose = () => {
        this.setState({
            isModal: false
        })
    };

    //导航栏左侧Item
    renderLeftItem() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.showHalfHourHot()}
            >
                <Image source={{uri: 'hot_icon_20x20_'}} style={styles.leftItemStyle}/>
            </TouchableOpacity>

        );
    }

    //导航栏右侧Item
    renderRightItem() {
        return (
            <Image source={{uri: 'search_icon_20x20_'}} style={styles.rightItemStyle}/>
        );
    }

    //导航栏TitleItem
    renderTitleItem() {
        return (
            <Image source={{uri:'navtitle_home_down_66x20_'}} style={styles.titleItemStyle}/>
        );
    }

    //展示热门半小时
    showHalfHourHot() {
        this.setState({
            isModal: true,
        })
    }

    //关闭热门半小时
    closeModal() {
        this.setState({
            isModal: false,
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
                    <HalfAnHourHot removeModal={() => this.closeModal()}/>
                </Modal>


                {/*设置导航栏*/}
                <CommonNavBar
                    leftItem={() => this.renderLeftItem()}
                    titleItem={() => this.renderTitleItem()}
                    rightItem={() => this.renderRightItem()}
                />

                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => index}
                    renderItem={this._renderItem}

                    onRefresh={this._onRefresh}
                    refreshing={this.state.refreshing}
                    onEndReachedThreshold={0.5}
                    onEndReached={this._onEndReached}
                />
            </View>
        );
    }

    //加载网络数据
    _loadData = () => {
        let url = 'http://guangdiu.com/api/getlist.php';
        let params = {};
        //加载更多
        if (this.isLoadMore) {
            console.log('Y-加载更多');
            params = {'country': 'ch', 'count': '20', 'sinceid': this.sinceid};
            console.log(params);
        } else {
            params = {'country': 'ch', 'count': '20'};
            console.log('X-下拉刷新');
            console.log(params);
        }

        HTTPRequest.post(url, params, {})
            .then((response) => {

                if (this.isLoadMore) {
                    let data = this.state.data;
                    this.setState({
                        data: data.concat(response.data),
                    });
                    this.isLoadMore = false;
                } else {
                    this.setState({
                        data: response.data
                    });
                }

                this.sinceid = response.data[response.data.length - 1].id;
            })
            .catch(e => {
                console.log(e);
            })
    };

    //下拉刷新
    _onRefresh = () => {
        this.setState({refreshing: true});
        setTimeout(() => {
            this._loadData();
            this.setState({refreshing: false});
        }, 3000);
    };

    //加载更多
    _onEndReached = () => {
        if (this.state.refreshing === true) {
            return
        }
        this.isLoadMore = true;
        this._loadData();

    };

    componentDidMount() {
        const {setParams} = this.props.navigation;
        setParams({tabBarVisible: false});
        this._onRefresh();
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
    titleItemStyle:{
        width:66,
        height:20,
        resizeMode:'contain',
    }

});

