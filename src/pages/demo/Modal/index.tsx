import Taro, { Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import BaseComponent from 'components/index';
import ItemRow from 'components/ItemRow';
import Modal from 'components/Modal';
import './style.less';

interface Props {}
interface InjectedProps extends Props {}

export default class DemoModal extends BaseComponent<Props, Object> {
  config: Config = {
    navigationBarTitleText: '首页'
  };
  get injected() {
    return this.props as InjectedProps;
  }

  state = {
    modal: [false, false, false, false, false, false]
  };

  componentWillMount() {}

  componentDidMount() {}

  componentAfterShow() {}

  handleModal = (index: number, visible: boolean): void => {
    const { modal } = this.state;
    this.setState({
      modal: modal.map((_, i) => {
        if (index === i) {
          return visible;
        } else {
          return false;
        }
      })
    });
  };

  /**
   * 处理点击
   */
  handleDetail = (index: number) => {
    this.handleModal(index, true);
  };

  render() {
    const { modal } = this.state;
    return (
      <View className="container">
        <View className="header">
          <Text className="title">Checks</Text>
        </View>

        <View className="listContainer">
          <View className="subTitle">基本用法</View>
          <ItemRow title="标题" type="select" detail="底部弹出" onClickDetail={this.handleDetail.bind(this, 0)} />
          <ItemRow title="标题" type="select" detail="顶部弹出并居中" onClickDetail={this.handleDetail.bind(this, 1)} />
        </View>

        <Modal visible={modal[0]} title="弹窗的标题" onClose={this.handleModal.bind(this, 0, false)}>
          <View className="content">弹窗的内容。。。</View>
          <View className="content">弹窗的内容。。。</View>
          <View className="content">弹窗的内容。。。</View>
        </Modal>

        <Modal visible={modal[1]} title="弹窗的标题" center width="80%" height="400rpx" onClose={this.handleModal.bind(this, 1, false)}>
          <View className="content">弹窗的内容。。。</View>
          <View className="content">弹窗的内容。。。</View>
          <View className="content">弹窗的内容。。。</View>
        </Modal>
      </View>
    );
  }
}
