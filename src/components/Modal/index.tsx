import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Ticon from 'components/Ticon';
import './style.less';

interface Props {
  visible?: boolean;
  showHeader?: boolean;
  showClose?: boolean;
  showFooter?: boolean;
  center?: boolean;
  radius?: boolean;
  width?: string;
  height?: string;
  title?: string;
  onClose?: Function;
  onSure?: Function;
}

export default class Modal extends Component<Props, Object> {
  static defaultProps = {
    visible: false,
    showHeader: true,
    showClose: true,
    showFooter: false,
    center: false,
    radius: false,
    title: '标题'
  };

  handleClose() {
    const { onClose } = this.props;
    onClose && onClose();
  }

  handleSure() {
    const { onSure, onClose } = this.props;
    onSure && onSure();
    onClose && onClose();
  }

  handleTouchMove = event => {
    event.stopPropagation();
  };

  render() {
    const { visible, title, center, radius, width, height, showHeader, showClose, showFooter } = this.props;
    return (
      <View className="ui-modal" onTouchMove={this.handleTouchMove}>
        <View className={`modal-mask ${visible && 'modal-mask-show'}`} onTouchMove={this.handleTouchMove} onClick={this.handleClose} />

        <View
          className={`modal ${center ? 'center' : ''} ${visible ? 'show' : ''} ${radius ? 'radius' : ''}`}
          style={{ width, height }}
          onTouchMove={this.handleTouchMove}
        >
          {showHeader && (
            <View className="modal-header">
              <Text className="title">{title}</Text>
            </View>
          )}

          {showClose && (
            <View className="modal-close" onClick={this.handleClose}>
              <Ticon value="icon-close1" size={40} />
            </View>
          )}

          <View className="modal-body">{this.props.children}</View>

          {showFooter && (
            <View className="modal-footer">
              <View className="btn" onClick={this.handleClose}>
                取消
              </View>
              <View className="btn primary" onClick={this.handleSure}>
                确定
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}
