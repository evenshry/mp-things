import Taro, { Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import BaseComponent from 'components/index';
import Notice from 'components/Notice';

interface Props {}
interface InjectedProps extends Props {}

export default class DemoModal extends BaseComponent<Props, Object> {
  config: Config = {
    navigationBarTitleText: '通知-示例'
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
      <View className="demoContainer">
        <View className="header">
          <Text className="title">Notice 通知</Text>
        </View>

        <View className="listContainer">
          <View className="subTitle">基本用法</View>
          <Notice show>通知一下:这里是通知消息！</Notice>
        </View>

        <View className="listContainer">
          <View className="subTitle">可关闭</View>
          <Notice show={notice} onClose={this.handleCloseNotice}>
            通知一下:这里是通知消息！
          </Notice>
        </View>
      </View>
    );
  }
}
