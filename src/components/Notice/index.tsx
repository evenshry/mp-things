import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import Ticon from 'components/Ticon';
import './style.less';

interface Props {
  onClose?: Function;
  show?: boolean;
}

export default class Notice extends Component<Props, Object> {
  static defaultProps = {
    show: false
  };

  onClose = () => {
    const { onClose } = this.props;
    onClose && onClose();
  };

  render() {
    const { show, onClose } = this.props;
    const showClose = typeof onClose === 'function';
    return show ? (
      <View className="noticeContainer">
        <View className="icon">
          <Ticon value="icon-info" color="#FF921C" size={30} />
        </View>
        <View className="text">{this.props.children}</View>
        {showClose ? (
          <View className="close" onClick={this.onClose}>
            <Ticon value="icon-close1" size={30} />
          </View>
        ) : null}
      </View>
    ) : null;
  }
}
