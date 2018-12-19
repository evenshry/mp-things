import Taro, { Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import BaseComponent from 'components/index';
import { UserStore } from 'store/UserStore';
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
      </View>
    );
  }
}
