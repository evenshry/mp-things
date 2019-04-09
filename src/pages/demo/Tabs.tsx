import Taro, { Config } from '@tarojs/taro';
import { View, Text, Swiper, SwiperItem } from '@tarojs/components';
import BaseComponent from 'components/index';
import Tabs from 'components/Tabs';

interface Props {}
interface InjectedProps extends Props {}

export default class DemoModal extends BaseComponent<Props, Object> {
  config: Config = {
    navigationBarTitleText: '标签页-示例'
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

  handleSwiper = (event) => {
    this.setState({ active: event.detail.current });
  };

  render() {
    const { active } = this.state;
    return (
      <View className="demoContainer">
        <View className="header">
          <Text className="title">Tabs 标签页</Text>
        </View>

        <View className="listContainer">
          <View className="subTitle">基本用法</View>
          <Tabs data={['标签页一', '标签页二']} value={active} onChange={this.handleChange} />
          <Swiper current={active} duration={200} onChange={this.handleSwiper} style={{ height: '840rpx' }}>
            <SwiperItem>
              <View className="demoContent">标签页一的内容。。。</View>
              <View className="demoContent">标签页一的内容。。。</View>
              <View className="demoContent">标签页一的内容。。。</View>
              <View className="demoContent">标签页一的内容。。。</View>
              <View className="demoContent">标签页一的内容。。。</View>
              <View className="demoContent">标签页一的内容。。。</View>
            </SwiperItem>
            <SwiperItem>
              <View className="demoContent">标签页二的内容。。。</View>
              <View className="demoContent">标签页二的内容。。。</View>
              <View className="demoContent">标签页二的内容。。。</View>
              <View className="demoContent">标签页二的内容。。。</View>
              <View className="demoContent">标签页二的内容。。。</View>
              <View className="demoContent">标签页二的内容。。。</View>
            </SwiperItem>
          </Swiper>
        </View>
      </View>
    );
  }
}
