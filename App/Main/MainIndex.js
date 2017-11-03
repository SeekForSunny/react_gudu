//入口文件
//外层是StackNavigator ,嵌套TabNavigator
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import HomeIndex from '../Home/HomeIndex' //首页 - 一级界面
import OnSaleIndex from '../OnSale/OnSaleIndex' //海淘折扣  - 一级界面
import RankingListIndex from '../RankingList/RankingListIndex' //小时风云榜  - 一级界面

import ShowDetail from '../Common/ShowDetail'

import {StackNavigator, TabNavigator} from 'react-navigation';

const Tabs = TabNavigator({
    Home: { // 首页
        screen: HomeIndex,
        navigationOptions: {
            header: null,
            tabBarLabel: '首页',
            tabBarIcon: ({focused, tintColor}) => (
                <View>

                    <Image resizeMode='contain'
                           source={{uri: focused ? 'tabbar_home_selected_30x30_' : 'tabbar_home_30x30_'}}
                           style={[styles.itemIconStyle, {tintColor: tintColor}]}
                    />
                    <View style={{
                        backgroundColor: '#0F9C00',
                        position: 'absolute',
                        left:20,
                        height:20,
                        width:20,
                        borderRadius:10,
                        alignItems:'center',
                        justifyContent:'center',
                    }}><Text style={{color:'white',fontSize:13,}}>99</Text></View>

                </View>

            ),
        },
    },
    OnSale: { // 海淘折扣
        screen: OnSaleIndex,
        navigationOptions: {
            header: null,
            tabBarLabel: '海淘折扣',
            tabBarIcon: ({tintColor, focused}) => (
            <View>
                <Image resizeMode='contain'
                       source={{uri: focused ? 'tabbar_abroad_selected_30x30_' : 'tabbar_abroad_30x30_'}}
                       style={[styles.itemIconStyle, {tintColor: tintColor}]}
                />

                <View style={{
                    backgroundColor: '#0F9C00',
                    position: 'absolute',
                    left:20,
                    height:20,
                    width:20,
                    borderRadius:10,
                    alignItems:'center',
                    justifyContent:'center',
                }}><Text style={{color:'white',fontSize:13,}}>20</Text></View>
            </View>

            )
        }
    },
    RankingList: { // 小时风云榜
        screen: RankingListIndex,
        navigationOptions: {
            header: null,
            tabBarLabel: '小时风云榜',
            tabBarIcon: ({tintColor, focused}) => (
                <Image resizeMode='contain'
                       source={{uri: focused ? 'tabbar_rank_selected_30x30_' : 'tabbar_rank_30x30_'}}
                       style={[styles.itemIconStyle, {tintColor: tintColor}]}
                />
            ),
        },
    },
}, {
    tabBarPosition: 'bottom', //tabBar位置
    lazy: true,               // 是否懒加载
    initialRouteName: 'Home', //初始化选中页
    tabBarOptions: {
        activeTintColor: '#0F9C00',  // 文字和图片选中颜色
        inactiveTintColor: '#999',   // 文字和图片默认颜色
        showIcon: true,              // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线
        style: {      //TabBar样式
            height: 49,
            backgroundColor: 'white',
        },
        labelStyle: { //Item的文字设置
            fontSize: 14,
            paddingBottom: 0,
        },
    }
});

const styles = StyleSheet.create({
    itemIconStyle: {
        width: 25,
        height: 25,
    }
});


const Stacks = StackNavigator({
        Root: {
            screen: Tabs,
        },
        ShowDetail: {
            screen: ShowDetail,
            navigationOptions: {
                header: null,
            }
        }
    },
);

export  default  Stacks;
