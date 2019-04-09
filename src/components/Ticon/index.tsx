import Taro, { Component } from '@tarojs/taro';
import { Text } from '@tarojs/components';
import 'assets/icon/iconfont.css';
import './style.less';

interface Props {
  value: string;
  size?: number;
  color?: string;
}

export default class Ticon extends Component<Props, Object> {
  static defaultProps = {
    name: 'right',
    size: 24,
    color: '#ababab'
  };

  render() {
    const { value, size, color } = this.props;
    const style = { fontSize: size + 'rpx', color: color };
    return <Text className={`iconfont ${value}`} style={style} />;
  }
}
