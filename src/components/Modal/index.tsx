import Taro, { Component } from '@tarojs/taro';
import { View, Text, Icon } from '@tarojs/components';

import './style.less';

interface Props {
  visible?: boolean;
  showHeader?: boolean;
  showClose?: boolean;
  center?: boolean;
  radius?: boolean;
  width?: string;
  height?: string;
  title?: string;
  onClose?: any;
}

export default class Modal extends Component<Props, Object> {
  static defaultProps = {
    visible: false,
    showHeader: true,
    showClose: true,
    center: false,
    radius: false,
    width: '100%',
    height: 'auto',
    title: '标题'
  };

  handleClose() {
    const { onClose } = this.props;
    onClose && onClose();
  }

  onTouchMove = event => {
    event.stopPropagation();
  };

  render() {
    const { visible, title, center, radius, width, height, showHeader, showClose } = this.props;
    const bodyHeight = center ? (showHeader ? 'calc(100% - 104rpx)' : '100%') : 'auto';
    return (
      <View className="ui-modal" onTouchMove={this.onTouchMove}>
        <View className={`modal-mask ${visible && 'modal-mask-show'}`} onClick={this.handleClose} />
        <View className={`modal ${center ? 'center' : ''} ${visible ? 'show' : ''} ${radius ? 'radius' : ''}`} style={{ width, height }}>
          {showHeader && (
            <View className="modal-header">
              <Text className="title">{title}</Text>
            </View>
          )}
          {showClose && (
            <View className="modal-close" onClick={this.handleClose}>
              <Icon type="cancel" color="#ccc" size="16px" />
            </View>
          )}
          <View className="modal-body" style={{ height: bodyHeight }}>
            {this.props.children}
          </View>
        </View>
      </View>
    );
  }
}
