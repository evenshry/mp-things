import Taro, { Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import BaseComponent from 'components/index';
import ItemRow from 'components/ItemRow';
import Checks from 'components/Checks';

interface Props {}
interface InjectedProps extends Props {}

export default class DemoItemRow extends BaseComponent<Props, Object> {
  config: Config = {
    navigationBarTitleText: '选项-示例'
  };
  get injected() {
    return this.props as InjectedProps;
  }

  state = {
    data: [
      { value: '1', label: '选项一', selected: true },
      { value: '2', label: '选项二', selected: false },
      { value: '3', label: '选项三', selected: false }
    ]
  };

  componentWillMount() {}

  componentDidMount() {}

  componentAfterShow() {}

  /**
   * 处理点击
   */
  handleSelect = (_, index) => {
    const { data } = this.state;
    const newData = data.map((inItem, i) => {
      inItem.selected = index === i;
      return inItem;
    });
    this.setState({ data: newData });
  };

  render() {
    const { data } = this.state;
    return (
      <View className="demoContainer">
        <View className="header">
          <Text className="title">Checks 选项</Text>
        </View>
        <View className="listContainer">
          <View className="subTitle">基本用法</View>
          <ItemRow title="列表项" type="default">
            <Checks data={data} align="left" onSelect={this.handleSelect} />
          </ItemRow>
        </View>

        <View className="listContainer">
          <View className="subTitle">居中</View>
          <Checks data={data} align="center" onSelect={this.handleSelect} />
        </View>

        <View className="listContainer">
          <View className="subTitle">居右</View>
          <Checks data={data} align="right" onSelect={this.handleSelect} />
        </View>

        <View className="listContainer">
          <View className="subTitle">改变颜色</View>
          <Checks data={data} align="left" defaultColor="#aaa" activeColor="#0084FF" onSelect={this.handleSelect} />
        </View>
      </View>
    );
  }
}
