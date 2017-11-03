//首页Item
import React, {PureComponent} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native';
const {width} = Dimensions.get('window');

export default class HomeIndexItem extends PureComponent {

    //时间处理
    renderTime(pubtime, fromsite) {

        var result;

        let minute = 1000 * 60;
        let hour = minute * 60;
        let day = hour * 24;
        let week = day * 7;
        let month = day * 30;

        let now = new Date().getTime();
        let diff = now - Date.parse(pubtime.replace(/-/gi, "/"));

        if (diff < 0) return;
        let minutes = parseInt(diff / minute);
        let hours = parseInt(diff / hour);
        let days = parseInt(diff / day);
        let weeks = parseInt(diff / week);
        let months = parseInt(diff / month);

        if (months > 1) {
            result = months + "月前";
        } else if (weeks > 1) {
            result = weeks + "周前";
        } else if (days > 1) {
            result = days + "天前";
        } else if (hours > 1) {
            result = hours + "小时";
        } else if (minutes > 1) {
            result = minutes + "分钟前";
        } else {
            result = "刚刚";
        }

        return result + "·" + fromsite;
    }


    render() {
        const {id, image, mall, title, fromsite, pubtime} = this.props.rowData;
        let time = (new Date().getTime() - Date.parse(pubtime.replace(/-/gi, "/"))) / (1000 * 60);
        let notice = time + '分钟前.';
        if (time > 60) {
            notice = time / 60 + '小时前.';
        } else if (time < 1) {
            notice = "刚刚.";
        }
        return (
            <View style={styles.container}>
                <Image source={{uri: image == '' ? 'defaullt_thumb_83x83_' : image}} style={styles.imageStyle}/>
                <View style={styles.middleContentStyle}>
                    <Text numberOfLines={3} style={styles.titleStyle}>{title}</Text>
                    <View style={styles.infoStyle}>
                        <Text style={styles.mallStyle}>{mall}</Text>
                        <Text style={styles.fromSiteStyle}>{this.renderTime(pubtime, fromsite)}</Text>
                    </View>
                </View>
                <Image source={{uri: 'arrow_right'}} style={styles.arrowIconStyle}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 130,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(200,200,200,1)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'white'
    },
    imageStyle: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    middleContentStyle: {
        flexDirection: 'column',
        height: 130,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    titleStyle: {
        width: width * 0.60,
        fontSize: 17,
        color: 'gray',
    },
    infoStyle: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    mallStyle: {
        color: '#0F9C00',
        fontSize: 13,
    },
    fromSiteStyle: {
        color: '#0F9C00',
        fontSize: 13,
    },
    arrowIconStyle: {
        width: 25,
        height: 35,
        resizeMode: 'contain'
    }
});