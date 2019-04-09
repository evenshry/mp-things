import Taro, { Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import BaseComponent from 'components/index';
import Message from 'components/Message';
import ItemRow from 'components/ItemRow';
import './style.less';

interface Props {}
interface InjectedProps extends Props {}

export default class DemoModal extends BaseComponent<Props, Object> {
  config: Config = {
    navigationBarTitleText: 'Message Demos'
  };
  get injected() {
    return this.props as InjectedProps;
  }

  handleInfoMessage = () => {
    Message.show({ type: 'info', message: '展示一条普通消息', showClose: true });
  };

  handleSuccessMessage = () => {
    Message.show({ type: 'success', message: '展示一条成功消息' });
  };

  handleWarningMessage = () => {
    Message.show({ type: 'warning', message: '展示一条警告消息' });
  };

  handleErrorMessage = () => {
    Message.show({ type: 'error', message: '展示一条错误消息' });
  };

  render() {
    return (
      <View className="container">
        <Message />

        <View className="header">
          <Text className="title">Message</Text>
        </View>

        <View className="listContainer">
          <View className="subTitle">基本用法</View>
          <ItemRow title="普通消息" type="select" detail="查看" onClickDetail={this.handleInfoMessage} />
          <ItemRow title="成功消息" type="select" detail="查看" onClickDetail={this.handleSuccessMessage} />
          <ItemRow title="警告消息" type="select" detail="查看" onClickDetail={this.handleWarningMessage} />
          <ItemRow title="错误消息" type="select" detail="查看" onClickDetail={this.handleErrorMessage} />
        </View>
      </View>
    );
  }
}
