import Taro from '@tarojs/taro';
import { ITouchEvent } from '@tarojs/components/types/common';
import DiyComponent from 'pages/diy/components';
import { View } from '@tarojs/components';
import DiyLayout from '../Layout';
import './style.less';

interface Props {
  data: Diy.LayoutProps;
}

export default class DiyView extends DiyComponent<Props, Object> {
  static defaultProps = {};

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
