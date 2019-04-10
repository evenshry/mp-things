import Taro, { Config } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import { UserStore } from 'store/UserStore';
import BaseComponent from 'components/index';
import './style.less';

interface Props {}
interface InjectedProps extends Props {
  User: UserStore;
}

@inject('User')
@observer
export default class Index extends BaseComponent<Props, Object> {
  config: Config = {
    navigationBarTitleText: '布局DIY'
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
    // const { User } = this.injected;
    // const { title } = User;
    return <View className="demoContainer" />;
  }
}
