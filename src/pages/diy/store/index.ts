import { observable, action, toJS } from 'mobx';

export class DiyStore {
  /**
   * 保存布局数据
   */
  @observable
  diyData: Diy.LayoutProps = {};

  @action
  setDiyData = (options: Diy.LayoutProps): void => {
    this.diyData = this.updateDeepAndIndex(options);
  };

  /**
   * 当前属性组
   */
  @observable
  currentProp: Diy.CurrentProp = {};

  @action
  setCurrentProp = (options: Diy.CurrentProp): void => {
    this.currentProp = { ...this.currentProp, ...options };
  };

  /**
   * 更新属性 （key, value）
   */
  @action
  updatePropValue = (key: string, value: any): void => {
    const firstDeep = 2;
    const options = toJS(this.diyData);
    const deep = this.currentProp.propDeep ? this.currentProp.propDeep.split('_') : [];
    if (deep.length >= firstDeep) {
      const lastDeep = Number(deep[deep.length - 1]);
      // 根据深度和标识更新属性值
      const updatePropByDeep = (options: Diy.LayoutProps, deepIndex: number): Diy.LayoutProps => {
        if (options.layouts) {
          options.layouts = options.layouts.map((item, index) => {
            if (deepIndex === deep.length) {
              if (index === lastDeep) {
                item.props ? (item.props[key] = value) : (item.props = { [key]: value });
              }
              return item;
            } else {
              return updatePropByDeep(item, deepIndex + 1);
            }
          });
        }
        return options;
      };
      this.diyData = updatePropByDeep(options, firstDeep);
    }
  };

  /**
   * 更新深度索引
   */
  private updateDeepAndIndex = (options: Diy.LayoutProps): Diy.LayoutProps => {
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
