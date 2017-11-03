//展示详情
import  React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    WebView,
    Button,
} from 'react-native';
import CommonNavBar from '../Common/CommonNavBar'

export default class ShowDetail extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.renderLeftItem = this.renderLeftItem.bind(this);
    }


    renderLeftItem() {
        return (
            <Button title="< 返回" color='#0F9C00' onPress={() => {
                this.props.navigation.goBack();
            }}/>
        );
    }

    render() {
        const {params} = this.props.navigation.state;
        let url = params.url;
        return (
            <View style={styles.container}>
                <CommonNavBar
                    leftItem={this.renderLeftItem}
                />
                <WebView
                    source={{uri: url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                    scalesPageToFit={true}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    }
});