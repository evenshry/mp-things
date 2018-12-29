import Taro, { Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import BaseComponent from 'components/index';
import ItemRow from 'components/ItemRow';
import './style.less';

interface Props {}
interface InjectedProps extends Props {}

export default class Index extends BaseComponent<Props, Object> {
  config: Config = {
    navigationBarTitleText: '首页'
  };
  get injected() {
    return this.props as InjectedProps;
  }

  componentWillMount() {}

  componentDidMount() {}

  componentAfterShow() {}

  /**
   * 处理点击
   */
  handleDetail = () => {
    Taro.showToast({ title: '点击事件这里处理' });
  };

  render() {
    return (
      <View className="container">
        <View className="header">
          <Text className="title">ItemRow</Text>
        </View>
        <View className="listContainer">
          <View className="subTitle">基本用法</View>
          <ItemRow title="标题" type="default" detail="默认文本内容" />
          <ItemRow title="标题" type="default" detailAlign="left" detail="文本内容居左" />
          <ItemRow title="标题" titleWidth={300} type="default" detailAlign="left" detail="标题设置宽度300rpx" />
          <ItemRow title="标题" titleWidth={300} height={160} type="default" detailAlign="left" detail="设置高度160rpx" />
          <ItemRow title="标题" type="select" detail="可点击" onClickDetail={this.handleDetail} />
        </View>
        <View className="listContainer">
          <View className="subTitle">表单元素</View>
          <ItemRow title="文本" type="text" detail="" placeholder="请输入文本" />
          <ItemRow title="数字" type="number" detail="" placeholder="请输入数字" />
          <ItemRow title="身份证" type="idcard" detail="" placeholder="请输入身份证" />
          <ItemRow title="数字带小数" type="digit" detail="" placeholder="请输入数字带小数" />
          <ItemRow title="开关按钮" type="switch" checked />
        </View>
      </View>
    );
  }
}
