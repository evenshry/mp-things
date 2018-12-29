import Taro, { Component } from '@tarojs/taro';
import { View, Text, Icon } from '@tarojs/components';
import './style.less';

interface Props {
  data: Array<any>;
  onSelect: Function;
  align?: 'left' | 'center' | 'right';
  defaultColor?: string;
  activeColor?: string;
}

export default class Checks extends Component<Props, Object> {
  static defaultProps = {
    data: [],
    onSelect: null,
    align: 'left',
    defaultColor: '#ccc',
    activeColor: '#FF921C'
  };

  state = {};

  onSelect = (item, index) => {
    const { onSelect } = this.props;
    onSelect && onSelect(item, index);
  };

  render() {
    const { data, align, defaultColor, activeColor } = this.props;
    let justifyContent: string = align || 'left';
    if (align === 'left') justifyContent = 'flex-start';
    if (align === 'right') justifyContent = 'flex-end';
    return (
      <View className="container" style={{ justifyContent }}>
        {data.map((item, index) => {
          const selected = item.selected;
          return (
            <View key={index} className="labelContainer" onClick={this.onSelect.bind(this, item, index)}>
              <Icon type="success" color={selected ? activeColor : defaultColor} size="14px" />
              <Text className="text" style={{ color: selected ? activeColor : defaultColor }}>
                {item.label}
              </Text>
            </View>
          );
        })}
      </View>
    );
  }
}
