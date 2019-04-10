import Taro, { Component } from '@tarojs/taro';
import { ScrollView, View, Text } from '@tarojs/components';
import { ITouchEvent } from '@tarojs/components/types/common';
import { observer, inject } from '@tarojs/mobx';
import { DiyStore } from 'pages/diy/store';
import ItemRow from 'components/ItemRow';
import Modal from 'components/Modal';
import './style.less';

interface Props {}
interface InjectedProps extends Props {
  DiyStore: DiyStore;
}
interface State {}

@inject('DiyStore')
@observer
export default class PropBar extends Component<Props, Object> {
  get injected() {
    return this.props as InjectedProps;
  }

  state: State = {};

  handleModal = (value: boolean, event: ITouchEvent) => {
    event.stopPropagation();
    const { DiyStore } = this.injected;
    DiyStore.setCurrentProp({ showProp: value });
  };

  handleChange = (key: string, event: any) => {
    const { DiyStore } = this.injected;
    DiyStore.updatePropValue(key, event.detail.value);
  };

  handleSure = (event: ITouchEvent) => {
    event.stopPropagation();
  };

  render() {
    const { currentProp } = this.injected.DiyStore;
    const data = currentProp.propConfig || [];
    return (
      <Modal visible={currentProp.showProp} showHeader={false} showClose={false} onClose={this.handleModal.bind(this, false)}>
        <View className="header">
          <View className="cancel" onClick={this.handleModal.bind(this, false)}>
            取消
          </View>
          <View className="blank" />
          <View className="sure" onClick={this.handleSure}>
            确定
          </View>
        </View>
        <ScrollView scrollY className="scrollContainer">
          {data.map((item, index) => {
            return (
              <ItemRow
                key={`item_${index}`}
                title={item.title}
                type="text"
                detail={item.value}
                onChangeValue={this.handleChange.bind(this, item.key)}
              />
            );
          })}
          {!data || data.length === 0 ? (
            <View className="item">
              <Text className="text center">空空如也~</Text>
            </View>
          ) : null}
        </ScrollView>
      </Modal>
    );
  }
}
