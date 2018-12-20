import Taro, { Component } from '@tarojs/taro';
import { Text } from '@tarojs/components';
import 'assets/icon/iconfont.css';
import './style.less';

interface Props {
  name: string;
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
    const { name, size, color } = this.props;
    const style = { fontSize: size + 'rpx', color: color };
    return <Text className={`iconfont icon-${name}`} style={style} />;
  }
}
