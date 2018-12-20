import Taro, { Component } from '@tarojs/taro';
import { View, Input, Switch, Text } from '@tarojs/components';
import Ticon from 'components/Ticon/index';
import './style.less';

interface Props {
  type?: string;
  title?: string;
  titleIcon?: string;
  detail?: string;
  checked?: boolean;
  maxlength?: number;
  placeholder?: string;
  onClickInfo?: any;
  onClickDetail?: any;
  onChangeValue?: any;
}

export default class ItemRow extends Component<Props, Object> {
  static defaultProps = {
    type: 'text',
    title: '标题',
    titleIcon: '',
    checked: false,
    detail: '',
    maxlength: 20,
    placeholder: '请输入',
    onClickInfo: null,
    onClickDetail: null,
    onChangeValue: null
  };

  onClickInfo = event => {
    const { onClickInfo } = this.props;
    onClickInfo && onClickInfo(event);
  };

  onClickDetail = event => {
    const { onClickDetail } = this.props;
    onClickDetail && onClickDetail(event);
  };

  onChangeValue = event => {
    const { onChangeValue } = this.props;
    onChangeValue && onChangeValue(event);
  };

  onSelectFile = () => {
    const { onClickDetail } = this.props;
    Taro.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera']
    })
      .then(response => {
        onClickDetail && onClickDetail(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { type, title, titleIcon, checked, detail, maxlength, placeholder, children } = this.props;
    let detailContent: any = null;
    if (type === 'text') {
      detailContent = (
        <View className="detail">
          <View className="text">{detail}</View>
        </View>
      );
    } else if (type === 'switch') {
      detailContent = (
        <View className="detail">
          <Switch checked={checked} color="#ff921c" onChange={this.onChangeValue} />
        </View>
      );
    } else if (type === 'input') {
      detailContent = (
        <View className="detail">
          <Input className="input" type="text" value={detail} maxLength={maxlength} placeholder={placeholder} onInput={this.onChangeValue} />
        </View>
      );
    } else if (type === 'inputNumber') {
      detailContent = (
        <View className="detail">
          <Input className="input" type="number" value={detail} maxLength={maxlength} placeholder={placeholder} onInput={this.onChangeValue} />
        </View>
      );
    } else if (type === 'idcard') {
      detailContent = (
        <View className="detail">
          <Input className="input" type="idcard" maxLength={maxlength || 18} value={detail} placeholder={placeholder} onInput={this.onChangeValue} />
        </View>
      );
    } else if (type === 'select') {
      detailContent = (
        <View className="detail" onClick={this.onClickDetail}>
          <View className="text">{detail}</View>
          <View className="arrow">
            <Ticon name="right" size={28} />
          </View>
        </View>
      );
    } else if (type === 'upload') {
      detailContent = (
        <View className="detail" onClick={this.onSelectFile}>
          <View className="text">{detail}</View>
          <View className="arrow">
            <Ticon name="right" size={28} />
          </View>
        </View>
      );
    }
    return (
      <View className="rowItem">
        <View className="title">
          <Text className="text">{title}</Text>
          {titleIcon && <View className="info" onClick={this.onClickInfo} />}
        </View>
        {detailContent}
        {children && <View className="body">{children}</View>}
      </View>
    );
  }
}
