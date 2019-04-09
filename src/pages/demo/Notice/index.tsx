import Taro, { Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import BaseComponent from 'components/index';
import Notice from 'components/Notice';
import './style.less';

interface Props {}
interface InjectedProps extends Props {}

export default class DemoModal extends BaseComponent<Props, Object> {
  config: Config = {
    navigationBarTitleText: 'Notice Demos'
  };
  get injected() {
    return this.props as InjectedProps;
  }

  state = { notice: true };

  handleCloseNotice = () => {
    this.setState({ notice: false });
  };

  render() {
    const { notice } = this.state;
    return (
      <View className="container">
        <View className="header">
          <Text className="title">Notice</Text>
        </View>

        <View className="listContainer">
          <View className="subTitle">基本用法</View>
          <Notice show>通知一下</Notice>
          <View className="subTitle">可关闭</View>
          <Notice show={notice} onClose={this.handleCloseNotice}>
            通知一下
          </Notice>
        </View>
      </View>
    );
  }
}
