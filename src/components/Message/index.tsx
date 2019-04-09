import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import Ticon from 'components/Ticon';
import './style.less';

const MESSAGE_EVENT: 'MESSAGE_EVENT' = 'MESSAGE_EVENT';

type MESSAGETYPE = 'info' | 'success' | 'warning' | 'error';

const MESSAGE_TYPE: {
  INFO: 'info';
  SUCCESS: 'success';
  WARNING: 'warning';
  ERROR: 'error';
} = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

const MESSAGE_ICON = {
  [MESSAGE_TYPE.INFO]: 'icon-info',
  [MESSAGE_TYPE.SUCCESS]: 'icon-success',
  [MESSAGE_TYPE.WARNING]: 'icon-warning',
  [MESSAGE_TYPE.ERROR]: 'icon-close1'
};

export interface MessageProps {
  type: MESSAGETYPE;
  message: string;
  showClose?: boolean;
  duration?: number;
}

interface Props {
  onClose?: Function;
  show?: boolean;
}

const defaultState = {
  show: false,
  showClose: false,
  type: undefined,
  duration: 3000,
  message: ''
};

export default class Message extends Component<Props, Object> {
  static defaultProps = {
    show: false
  };

  static show = (options: MessageProps) => {
    Taro.eventCenter.trigger(MESSAGE_EVENT, options);
  };

  state = { ...defaultState };

  componentWillMount() {
    Taro.eventCenter.on(MESSAGE_EVENT, this.handleShowMessage);
  }

  componentWillUnmount() {
    Taro.eventCenter.off(MESSAGE_EVENT);
  }

  timeout: any = null;

  handleShowMessage = (options: MessageProps) => {
    const newOptions = { ...defaultState, ...options, show: true };
    this.setState(newOptions);
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(this.handleHideMessage, newOptions.duration);
  };

  handleHideMessage = () => {
    this.setState(defaultState);
  };

  render() {
    const { show, showClose, type, message } = this.state;
    return (
      <View className={`uiMessage ${type} ${show ? 'show' : ''}`}>
        {type ? (
          <View className="icon">
            <Ticon value={MESSAGE_ICON[type]} color="#fff" size={30} />
          </View>
        ) : null}

        <View className="text">{message}</View>

        {showClose ? (
          <View className="close" onClick={this.handleHideMessage}>
            <Ticon value="icon-close1" size={32} color="#fff" />
          </View>
        ) : null}
      </View>
    );
  }
}
