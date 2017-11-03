//半小时热门
import  React, {Component, PropTypes} from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Button,
    TouchableOpacity,
} from 'react-native'

import HalfAnHourHotItem from './HalfAnHourHotItem';
import HTTPRequest from '../HTTP/HTTPRequest';
import CommonNavBar from '../Common/CommonNavBar'

export default class HalfAnHourHot extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data: []
        };
    }

    static propTypes = {
        removeModal: PropTypes.func,
    }
    static defaultProps = {
        removeModal: {},
    };

    _renderItem = ({item}) => (
        <HalfAnHourHotItem
            rowData={item}
        />
    );

    _onClose = () => {
        this.props.removeModal();
    };

    renderTitleItem = () => {
        return (
            <Text style={styles.titleItemStyle}>近半小时热门</Text>
        );
    }

    renderRightItem() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={this._onClose}
            >
                <Text style={styles.rightItemStyle}>关闭</Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <CommonNavBar rightItem={this.renderRightItem.bind(this)} titleItem={this.renderTitleItem}/>

                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => index}
                    renderItem={this._renderItem}
                />
            </View>
        )
    }

    componentDidMount() {
        let url = 'http://guangdiu.com/api/gethots.php';
        HTTPRequest.post(url)
            .then(responseData => {
                this.setState({data: responseData.data})
            })
            .catch(e => {
                console.log(e)
            });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginLeft:55,
    }
});
