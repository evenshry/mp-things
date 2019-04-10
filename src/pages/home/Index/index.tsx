import Taro, { Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import { UserStore } from 'store/UserStore';
import BaseComponent from 'components/index';
import ItemRow from 'components/ItemRow';
import './style.less';

interface Props {}
interface InjectedProps extends Props {
  UserStore: UserStore;
}

@inject('UserStore')
@observer
export default class Index extends BaseComponent<Props, Object> {
  config: Config = {
    navigationBarTitleText: 'MiniUI收集'
  };
  get injected() {
    return this.props as InjectedProps;
  }

  componentWillMount() {}

  componentDidMount() {}

  componentAfterShow() {}

  /**
   * 跳转详情
   */
  handleDemo = (type: string): void => {
    Taro.navigateTo({ url: `/pages/demo/${type}` });
  };

  /**
   * 跳转DIY
   */
  handleDiy = (): void => {
    Taro.navigateTo({ url: '/pages/diy/Index/index' });
  };

  render() {
    return (
      <View className="demoContainer">
        <View className="header">
          <Text className="title">MiniUI收集</Text>
        </View>
        <View className="listContainer">
          <ItemRow
            title="ItemRow-列表项"
            titleWidth={260}
            type="select"
            detail="查看"
            onClickDetail={this.handleDemo.bind(this, 'ItemRow')}
          />
          <ItemRow title="Checks-选项" titleWidth={260} type="select" detail="查看" onClickDetail={this.handleDemo.bind(this, 'Checks')} />
          <ItemRow title="Tabs-标签页" titleWidth={260} type="select" detail="查看" onClickDetail={this.handleDemo.bind(this, 'Tabs')} />
          <ItemRow title="Modal-弹出框" titleWidth={260} type="select" detail="查看" onClickDetail={this.handleDemo.bind(this, 'Modal')} />
          <ItemRow
            title="Tpicker-选项弹出框"
            titleWidth={260}
            type="select"
            detail="查看"
            onClickDetail={this.handleDemo.bind(this, 'Tpicker')}
          />
          <ItemRow title="Notice-通知" titleWidth={260} type="select" detail="查看" onClickDetail={this.handleDemo.bind(this, 'Notice')} />
          <ItemRow
            title="Message-消息"
            titleWidth={260}
            type="select"
            detail="查看"
            onClickDetail={this.handleDemo.bind(this, 'Message')}
          />
        </View>

        <View className="header">
          <Text className="title">布局DIY</Text>
        </View>
        <View className="listContainer">
          <ItemRow title="DIY入口" titleWidth={260} type="select" detail="查看" onClickDetail={this.handleDiy} />
        </View>
      </View>
    );
  }
}
