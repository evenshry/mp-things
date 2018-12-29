import Taro, { Component } from '@tarojs/taro';
import { View, Input, Switch, Text } from '@tarojs/components';
import Ticon from 'components/Ticon';
import './style.less';

interface Props {
  type?: 'default' | 'text' | 'number' | 'idcard' | 'digit' | 'select' | 'switch';
  title?: string;
  titleWidth?: number;
  detail?: string;
  detailAlign?: 'left' | 'right';
  checked?: boolean;
  height?: number;
  maxlength?: number;
  placeholder?: string;
  onClickDetail?: any;
  onChangeValue?: any;
}

interface StyleObj {
  height?: string;
  width?: string;
}

export default class ItemRow extends Component<Props, Object> {
  static defaultProps = {
    type: 'default',
    title: '标题',
    checked: false,
    detailAlign: 'right',
    maxlength: 20,
    placeholder: '请输入',
    onClickDetail: null,
    onChangeValue: null
  };

  onClickDetail = event => {
    const { onClickDetail } = this.props;
    onClickDetail && onClickDetail(event);
  };

  onChangeValue = event => {
    const { onChangeValue } = this.props;
    onChangeValue && onChangeValue(event);
  };

  render() {
    const { type, title, titleWidth, height, detail, detailAlign, maxlength, placeholder, checked } = this.props;
    const rowStyle: StyleObj = {};
    if (height) {
      rowStyle.height = height + 'rpx';
    }
    const titleStyle: StyleObj = {};
    if (titleWidth) {
      titleStyle.width = titleWidth + 'rpx';
    }
    let detailClass = 'detail';
    if (detailAlign === 'right') {
      detailClass = `${detailClass} right`;
    } else {
      detailClass = `${detailClass} left`;
    }
    let detailContent: any = null;
    if (type === 'default') {
      detailContent = (
        <View className={detailClass}>
          <View className="text">{detail || this.props.children}</View>
        </View>
      );
    } else if (type === 'switch') {
      detailContent = (
        <View className={detailClass}>
          <Switch checked={checked} color="#ff921c" onChange={this.onChangeValue} />
        </View>
      );
    } else if (type === 'text' || type === 'number' || type === 'idcard' || type === 'digit') {
      detailContent = (
        <View className={detailClass}>
          <Input
            className="input"
            type={type}
            value={detail}
            maxLength={type === 'idcard' ? 18 : maxlength}
            placeholder={placeholder}
            onInput={this.onChangeValue}
            onConfirm={this.onChangeValue}
          />
        </View>
      );
    } else if (type === 'select') {
      detailContent = (
        <View className={detailClass} onClick={this.onClickDetail}>
          <View className="text">{detail || this.props.children}</View>
          <Ticon value="right" />
        </View>
      );
    }
    return (
      <View className="rowItem" style={rowStyle}>
        <View className="title" style={titleStyle}>
          <Text className="text">{title}</Text>
        </View>
        {detailContent}
      </View>
    );
  }
}
