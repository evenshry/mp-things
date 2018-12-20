import Taro, { Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import BaseComponent from 'components/index';
import { UserStore } from 'store/UserStore';
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

  render() {
    const { User } = this.injected;
    const { title } = User;
    return (
      <View className="container">
        <View className="header">
          <Text className="title">{title}</Text>
        </View>
        <View className="listContainer">
          <ItemRow title="Checks" type="select" detail="查看" />
          <ItemRow title="ItemRow" type="select" detail="查看" />
          <ItemRow title="Modal" type="select" detail="查看" />
          <ItemRow title="ModalSel" type="select" detail="查看" />
          <ItemRow title="Notice" type="select" detail="查看" />
          <ItemRow title="Tabs" type="select" detail="查看" />
        </View>
      </View>
    );
  }
}
