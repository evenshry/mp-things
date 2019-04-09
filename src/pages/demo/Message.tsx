import Taro, { Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import BaseComponent from 'components/index';
import Message, { MessageProps } from 'components/Message';
import ItemRow from 'components/ItemRow';

interface Props {}
interface InjectedProps extends Props {}

export default class DemoModal extends BaseComponent<Props, Object> {
  config: Config = {
    navigationBarTitleText: '消息-示例'
  };
  get injected() {
    return this.props as InjectedProps;
  }

  handleMessage = (options: MessageProps) => {
    Message.show(options);
  };

  render() {
    return (
      <View className="demoContainer">
        <Message />

        <View className="header">
          <Text className="title">Message 消息</Text>
        </View>

        <View className="listContainer">
          <View className="subTitle">基本用法</View>
          <ItemRow
            title="普通消息"
            type="select"
            detail="查看效果"
            onClickDetail={this.handleMessage.bind(this, { type: 'info', message: '展示一条普通消息' })}
          />
          <ItemRow
            title="成功消息"
            type="select"
            detail="查看效果"
            onClickDetail={this.handleMessage.bind(this, { type: 'success', message: '展示一条成功消息' })}
          />
          <ItemRow
            title="警告消息"
            type="select"
            detail="查看效果"
            onClickDetail={this.handleMessage.bind(this, { type: 'warning', message: '展示一条警告消息' })}
          />
          <ItemRow
            title="错误消息"
            type="select"
            detail="查看效果"
            onClickDetail={this.handleMessage.bind(this, { type: 'error', message: '展示一条错误消息' })}
          />
          <ItemRow
            title="普通消息（带关闭）"
            titleWidth={260}
            type="select"
            detail="查看效果"
            onClickDetail={this.handleMessage.bind(this, { type: 'info', message: '展示一条普通消息', showClose: true })}
          />
        </View>
      </View>
    );
  }
}
