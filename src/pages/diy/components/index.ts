import { Component } from '@tarojs/taro';
import { inject } from '@tarojs/mobx';
import { DiyStore } from 'pages/diy/store';

interface Props {
  data: Diy.LayoutProps;
}
interface InjectedProps extends Props {
  DiyStore?: DiyStore;
}

/**
 * 基础组件，作路由拦截（按需继承）
 */
@inject('DiyStore')
export default class DiyComponent<P extends Props, S = {}> extends Component<P, S> {
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
    const { DiyStore, data } = this.injected;
    if (DiyStore) {
      DiyStore.setShowTool(true);
    }
    console.log(data);
  };
}
