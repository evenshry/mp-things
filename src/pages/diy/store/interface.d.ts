declare namespace Diy {
  /**
   * 元素类型
   */
  type LayoutType = 'View' | 'Text' | 'Image';

  /**
   * 属性类型
   */
  type PropType = 'String' | 'Number' | 'Color' | 'Select' | 'Text';

  /**
   * 布局属性
   */
  interface LayoutProps {
    title?: string; // 标题
    type?: LayoutType; // 元素类型
    deep?: string; // 深度
    layouts?: Array<LayoutProps>; // 子元素集合
    props?: PropsUnknown; // 属性对象
  }

  /**
   * 未知属性对象
   */
  interface PropsUnknown {
    [key: string]: any;
  }

  /**
   * 属性类型
   */
  interface PropData {
    key?: string; // 标识键
    type?: PropType; // 属性类型
    title?: string; // 属性名
    value?: any; // 属性值
  }

  /**
   * 当前属性
   */
  interface CurrentProp {
    showTool?: boolean; // 显示工具栏
    showProp?: boolean; // 显示属性窗口
    showLayoutType?: boolean; // 显示布局类型窗口
    propDeep?: string; // 布局项深度 （以此来确定布局项）
    propConfig?: Array<Diy.PropData>; // 属性配置
  }
}
