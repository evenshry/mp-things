import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import 'assets/icon/iconfont.css';
import './style.less';

interface Props {
  value: string;
  size?: string;
  color?: string;
}

export default class Ticon extends Component<Props, Object> {
  static defaultProps = {
    name: 'right',
    size: '24',
    color: '#ccc'
  };

  render() {
    const { value, size, color } = this.props;
    const style = { fontSize: size + 'rpx', color: color };
    return <View className={`iconfont icon-${value}`} style={style} />;
  }
}
