import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import Iconfont from '../Iconfont';
import './style.less';

interface Props {
  onClose?: any;
  show?: boolean;
}

export default class Index extends Component<Props, Object> {
  static defaultProps = {
    show: false,
    onClose: null
  };

  onClose = () => {
    const { onClose } = this.props;
    onClose && onClose();
  };

  render() {
    const { show } = this.props;
    return show ? (
      <View className="noticeContainer">
        <View className="icon">
          <Iconfont name="icon-icon_prompt" color="#FF921C" size={14} />
        </View>
        <View className="text">{this.props.children}</View>
        <View className="close" onClick={this.onClose}>
          <Iconfont name="icon-icon_close_line" color="#ccc" size={14} />
        </View>
      </View>
    ) : null;
  }
}
