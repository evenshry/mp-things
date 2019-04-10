import { Component } from '@tarojs/taro';
import { inject } from '@tarojs/mobx';
import { DiyStore } from 'pages/diy/store';

export interface DiyProps {
  data: Diy.LayoutProps;
  propConfig?: Array<Diy.PropData>;
}
interface InjectedProps extends DiyProps {
  DiyStore?: DiyStore;
}

/**
 * 基础组件
 */
@inject('DiyStore')
export default class DiyComponent<P extends DiyProps, S = {}> extends Component<P, S> {
  get injected() {
    return this.props as InjectedProps;
  }

  /**
   * 显示该页面时
   */
  componentDidShow() {
    // const params = this.$router.params;
    // console.log(params);
    this.componentAfterShow();
  }

  /**
   * 显示页面完成回调
   */
  componentAfterShow(): any {}

  /**
   * 显示工具条
   */
  handleToolShow = () => {
    const { DiyStore, data, propConfig } = this.injected;
    if (DiyStore) {
      DiyStore.setCurrentProp({ showTool: true, propDeep: data.deep, propConfig });
      console.log(data.deep);
    }
  };
}
