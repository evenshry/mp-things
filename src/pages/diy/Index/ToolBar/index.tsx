import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { ITouchEvent } from '@tarojs/components/types/common';
import { observer, inject } from '@tarojs/mobx';
import BaseComponent from 'components/index';
import { DiyStore } from 'pages/diy/store';
import Ticon from 'components/Ticon';
import './style.less';

interface Props {}
interface InjectedProps extends Props {
  DiyStore: DiyStore;
}

@inject('DiyStore')
@observer
export default class ToolBar extends BaseComponent<Props, Object> {
  get injected() {
    return this.props as InjectedProps;
  }

  /**
   * 显示属性窗口
   */
  handleShowProp = (event: ITouchEvent) => {
    event.stopPropagation();
    const { DiyStore } = this.injected;
    DiyStore.setCurrentProp({ showProp: true });
  };

  /**
   * 收起工具条
   */
  handleToolHide = (event: ITouchEvent) => {
    event.stopPropagation();
    const { DiyStore } = this.injected;
    DiyStore.setCurrentProp({ showTool: false });
  };

  render() {
    const { currentProp } = this.injected.DiyStore;
    return (
      <View className={`toolContainer ${currentProp.showTool ? 'show' : ''}`}>
        <View className="item" onClick={this.handleShowProp}>
          <Ticon value="icon-edit-square" color="#fff" size={44} />
          <Text className="text">编辑属性</Text>
        </View>
        <View className="item">
          <Ticon value="icon-add1" color="#fff" size={44} />
          <Text className="text">添加子元素</Text>
        </View>
        <View className="item">
          <Ticon value="icon-delete" color="#fff" size={44} />
          <Text className="text">移除它</Text>
        </View>
        <View className="item" onClick={this.handleToolHide}>
          <Ticon value="icon-arrow-right" color="#fff" size={44} />
          <Text className="text">收起</Text>
        </View>
      </View>
    );
  }
}
