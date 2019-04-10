import Taro, { Config } from '@tarojs/taro';
import { View, Block } from '@tarojs/components';
import { ITouchEvent } from '@tarojs/components/types/common';
import { observer, inject } from '@tarojs/mobx';
import BaseComponent from 'components/index';
import { DiyStore } from 'pages/diy/store';
import DiyLayout from 'pages/diy/components/Layout';
import ToolBar from 'pages/diy/Index/ToolBar';
import PropBar from 'pages/diy/Index/PropBar';
import './style.less';

interface Props {}
interface InjectedProps extends Props {
  DiyStore: DiyStore;
}

@inject('DiyStore')
@observer
export default class Index extends BaseComponent<Props, Object> {
  config: Config = {
    navigationBarTitleText: '布局DIY'
  };
  get injected() {
    return this.props as InjectedProps;
  }

  componentDidMount() {
    const { DiyStore } = this.injected;
    DiyStore.setDiyData({
      title: '默认布局',
      layouts: [{ type: 'View', layouts: [{ type: 'View' }] }, { type: 'View', layouts: [{ type: 'View' }] }]
    });
  }

  /**
   * 收起工具条
   */
  handleToolHide = (event: ITouchEvent) => {
    event.stopPropagation();
    const { DiyStore } = this.injected;
    DiyStore.setCurrentProp({ showTool: false });
  };

  render() {
    const { diyData } = this.injected.DiyStore;
    const layouts = diyData.layouts || [];
    return (
      <Block>
        <View className="container" onClick={this.handleToolHide}>
          {layouts.map((item, index) => (
            <DiyLayout data={item} key={`item_${index}`} />
          ))}
        </View>

        <ToolBar />
        <PropBar />
      </Block>
    );
  }
}
