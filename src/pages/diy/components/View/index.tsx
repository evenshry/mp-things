import Taro from '@tarojs/taro';
import { ITouchEvent } from '@tarojs/components/types/common';
import DiyComponent, { DiyProps } from 'pages/diy/components';
import { View } from '@tarojs/components';
import DiyLayout from '../Layout';
import './style.less';

export default class DiyView extends DiyComponent<DiyProps, Object> {
  static defaultProps = {
    propConfig: [
      { key: 'backgroundColor', type: 'String', title: '背景颜色', value: '#fff' },
      { key: 'borderColor', type: 'String', title: '边框颜色', value: '#ccc' }
    ]
  };

  handleTap = (event: ITouchEvent) => {
    event.stopPropagation();
    this.handleToolShow();
  };

  render() {
    const { data } = this.props;
    if (!data || !data.type) return null;
    const layouts = data.layouts || [];
    return (
      <View className="view" onClick={this.handleTap}>
        {layouts.map((item, index) => (
          <DiyLayout data={item} key={`item_${index}`} />
        ))}
      </View>
    );
  }
}
