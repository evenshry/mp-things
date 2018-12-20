import Taro, { Component } from '@tarojs/taro';
import { View, Text, Icon } from '@tarojs/components';
import './style.less';

interface Props {
  onSelect: any;
  data: Array<any>;
}

export default class Index extends Component<Props, Object> {
  static defaultProps = {
    data: [],
    onSelect: null
  };

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
              <Icon type={selected ? 'success' : 'success_no_circle'} color={selected ? '#FF921C' : '#ccc'} size="14px" />
              <Text className="text">{item.label}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}
