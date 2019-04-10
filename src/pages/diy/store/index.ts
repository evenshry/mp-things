import { observable, action } from 'mobx';

export class DiyStore {
  /**
   * 保存布局数据
   */
  @observable
  diyData: Diy.LayoutProps = {};

  @action
  setDiyData = (options: Diy.LayoutProps): void => {
    const _props = this.updateDeepAndIndex(options);
    this.diyData = { ..._props };
  };

  /**
   * 显示工具栏
   */
  @observable
  showTool: boolean = false;

  @action
  setShowTool = (value: boolean): void => {
    this.showTool = value;
  };

  /**
   * 更新深度索引
   */
  updateDeepAndIndex = (options: Diy.LayoutProps): Diy.LayoutProps => {
    if (options.layouts) {
      options.layouts = options.layouts.map((item, index) => {
        item.deep = `${options.deep || '0'}_${index}`;
        return this.updateDeepAndIndex(item);
      });
    }
    return options;
  };
}
export default new DiyStore();
