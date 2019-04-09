import Taro, { Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import BaseComponent from 'components/index';
import ItemRow from 'components/ItemRow';
import Tpicker, { DataProps } from 'components/Tpicker';
import './style.less';

interface Props {}
interface InjectedProps extends Props {}

export default class DemoPicker extends BaseComponent<Props, Object> {
  config: Config = {
    navigationBarTitleText: '首页'
  };
  get injected() {
    return this.props as InjectedProps;
  }

  state = {
    modal: [false, false, false, false, false, false],
    selection: []
  };

  componentWillMount() {}

  componentDidMount() {}

  componentAfterShow() {}

  /**
   * 显示弹窗
   */
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
  /**
   * 处理点击
   */
  handleSure = () => {
    Taro.showToast({ title: '点击了确定' });
  };

  render() {
    const { modal, selection } = this.state;
    const data: Array<DataProps> = [
      { value: 1, label: '选项1' },
      { value: 2, label: '选项2' },
      { value: 3, label: '选项3' },
      { value: 4, label: '选项4' },
      { value: 5, label: '选项5' },
      { value: 6, label: '选项6' },
      { value: 7, label: '选项7' },
      { value: 8, label: '选项8' },
      { value: 9, label: '选项9' }
    ];
    return (
      <View className="container">
        <View className="header">
          <Text className="title">Tpicker</Text>
        </View>

        <View className="listContainer">
          <View className="subTitle">基本用法</View>
          <ItemRow title="标题" type="select" detail="单选" onClickDetail={this.handleDetail.bind(this, 0)} />
        </View>

        <Tpicker show={modal[0]} data={data} selected={selection} onModal={this.handleModal.bind(this, 0)} />
      </View>
    );
  }
}
