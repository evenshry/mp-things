import Taro, { Config } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
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

  componentWillMount() {}

  componentDidMount() {}

  componentAfterShow() {}

  increment = () => {
    const { User } = this.injected;
    const { count, setCount } = User;
    setCount(count + 1);
  };

  render() {
    const { User } = this.injected;
    const { count } = User;
    return (
      <View className="index">
        <Button onClick={this.increment}>+</Button>
        <Text>{count}</Text>
      </View>
    );
  }
}
