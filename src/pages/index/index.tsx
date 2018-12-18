import Taro, { Component, Config } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import { UserStore } from 'src/store/UserStore';
import './index.less';

interface Props {}
interface InjectedProps extends Props {
  User: UserStore;
}

@inject('User')
@observer
class Index extends Component<Props, Object> {
  config: Config = {
    navigationBarTitleText: '首页'
  };
  get injected() {
    return this.props as InjectedProps;
  }

  componentWillMount() {}

  componentWillReact() {
    console.log('componentWillReact');
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

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

export default Index;
