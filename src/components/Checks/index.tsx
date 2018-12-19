import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import Iconfont from "../Iconfont";
import "./style.less";

interface Props {
  onSelect: any;
  data: Array<any>;
}

export default class Index extends Component<Props, Object> {
  static defaultProps = {
    data: [],
    onSelect: null,
  }

  onSelect = item => {
    const { onSelect } = this.props;
    onSelect && onSelect(item);
  };

  render() {
    const { data } = this.props;
    return (
      <View className="container">
        {data.map((item, index) => {
          const selected = item.selected;
          return (
            <View key={index} className="labelContainer" onClick={this.onSelect.bind(this, item)}>
              <Iconfont
                name={selected ? 'icon-icon_succeed_msg' : 'icon-icon_unselected'}
                color={selected ? '#FF921C' : '#ccc'}
                size={14}
              />
              <Text className="text">{item.label}</Text>
            </View>
          )
        })}
      </View>
    );
  }
}
