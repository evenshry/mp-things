import Taro, { Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import BaseComponent from 'components/index';
import ItemRow from 'components/ItemRow';
import Checks from 'components/Checks';
import './style.less';

interface Props {}
interface InjectedProps extends Props {}

export default class DemoItemRow extends BaseComponent<Props, Object> {
  config: Config = {
    navigationBarTitleText: 'Checks Demos'
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
      <View className="container">
        <View className="header">
          <Text className="title">Checks</Text>
        </View>
        <View className="listContainer">
          <View className="subTitle">基本用法</View>
          <ItemRow title="标题" type="default">
            <Checks data={data} align="left" onSelect={this.handleSelect} />
          </ItemRow>
          <ItemRow title="标题" type="default">
            <Checks data={data} align="center" onSelect={this.handleSelect} />
          </ItemRow>
          <ItemRow title="标题" type="default">
            <Checks data={data} align="right" onSelect={this.handleSelect} />
          </ItemRow>
          <ItemRow title="标题" type="default">
            <Checks data={data} align="right" defaultColor="#bbb" onSelect={this.handleSelect} />
          </ItemRow>
          <ItemRow title="标题" type="default">
            <Checks data={data} align="right" defaultColor="#aaa" activeColor="#0084FF" onSelect={this.handleSelect} />
          </ItemRow>
        </View>
      </View>
    );
  }
}
