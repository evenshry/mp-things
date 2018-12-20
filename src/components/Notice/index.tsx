import Taro, { Component } from '@tarojs/taro';
import { View, Icon } from '@tarojs/components';
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
          <Icon type="info" color="#FF921C" size="14px" />
        </View>
        <View className="text">{this.props.children}</View>
        <View className="close" onClick={this.onClose}>
          <Icon type="cancel" color="#ccc" size="14px" />
        </View>
      </View>
    ) : null;
  }
}
