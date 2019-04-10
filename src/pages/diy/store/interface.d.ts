declare namespace Diy {
  type LayoutType = 'View' | 'Text' | 'Image';

  /**
   * 布局属性
   */
  interface LayoutProps {
    title?: string; // 标题
    type?: LayoutType; // 元素类型
    deep?: string; // 深度
    layouts?: Array<LayoutProps>; // 子元素集合
  }
}
