import Taro, { Config } from '@tarojs/taro';
import { View, Text, Swiper, SwiperItem } from '@tarojs/components';
import BaseComponent from 'components/index';
import Tabs from 'components/Tabs';
import './style.less';

interface Props {}
interface InjectedProps extends Props {}

export default class DemoModal extends BaseComponent<Props, Object> {
  config: Config = {
    navigationBarTitleText: '首页'
  };
  get injected() {
    return this.props as InjectedProps;
  }

  state = { active: 0 };

  componentWillMount() {}

  componentDidMount() {}

  handleChange = (active: number) => {
    this.setState({ active });
  };

  handleSwiper = event => {
    this.setState({ active: event.detail.current });
  };

  render() {
    const { active } = this.state;
    return (
      <View className="container">
        <View className="header">
          <Text className="title">Checks</Text>
        </View>

        <View className="listContainer">
          <View className="subTitle">基本用法</View>
        </View>

        <Tabs data={['测试一', '测试二']} value={active} onChange={this.handleChange} />
        <Swiper current={active} duration={200} onChange={this.handleSwiper}>
          <SwiperItem>
            <View className="content">弹窗的内容。。。</View>
          </SwiperItem>
          <SwiperItem>
            <View className="content">弹窗的内容。。。</View>
          </SwiperItem>
        </Swiper>
      </View>
    );
  }
}
