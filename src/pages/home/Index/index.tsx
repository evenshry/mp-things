import Taro, { Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import { UserStore } from 'store/UserStore';
import BaseComponent from 'components/index';
import ItemRow from 'components/ItemRow';
import './style.less';

interface Props {}
interface InjectedProps extends Props {
  User: UserStore;
}

@inject('User')
@observer
export default class Index extends BaseComponent<Props, Object> {
  config: Config = {
    navigationBarTitleText: '首页'
  };
  get injected() {
    return this.props as InjectedProps;
  }

  componentWillMount() {
    this.initTitle();
  }

  componentDidMount() {}

  componentAfterShow() {}

  initTitle = () => {
    const { User } = this.injected;
    const { title, setTitle } = User;
    setTitle(`${title} WORLD`);
  };

  /**
   * 调转详情
   */
  handleDemo = (type: string): void => {
    Taro.navigateTo({ url: `/pages/demo/${type}` });
  };

  render() {
    const { User } = this.injected;
    const { title } = User;
    return (
      <View className="container">
        <View className="header">
          <Text className="title">{title}</Text>
        </View>
        <View className="listContainer">
          <ItemRow title="ItemRow" type="select" detail="查看" onClickDetail={this.handleDemo.bind(this, 'ItemRow')} />
          <ItemRow title="Checks" type="select" detail="查看" onClickDetail={this.handleDemo.bind(this, 'Checks')} />
          <ItemRow title="Tabs" type="select" detail="查看" onClickDetail={this.handleDemo.bind(this, 'Tabs')} />
          <ItemRow title="Modal" type="select" detail="查看" onClickDetail={this.handleDemo.bind(this, 'Modal')} />
          <ItemRow title="Tpicker" type="select" detail="查看" onClickDetail={this.handleDemo.bind(this, 'Tpicker')} />
          <ItemRow title="Notice" type="select" detail="查看" onClickDetail={this.handleDemo.bind(this, 'Notice')} />
          <ItemRow title="Message" type="select" detail="查看" onClickDetail={this.handleDemo.bind(this, 'Message')} />
        </View>
      </View>
    );
  }
}
