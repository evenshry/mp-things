import { Component } from '@tarojs/taro';

/**
 * 基础组件，作路由拦截（按需继承）
 */
export default class BaseComponent<P, S = {}> extends Component<P, S> {
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

}
