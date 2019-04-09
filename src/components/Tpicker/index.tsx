import Taro, { Component } from '@tarojs/taro';
import { ScrollView, View, Text } from '@tarojs/components';
import Ticon from 'components/Ticon';
import Modal from 'components/Modal';
import './style.less';

interface Props {
  show: boolean;
  multiple: boolean;
  selected: Array<DataProps>;
  data: Array<DataProps>;
  onSelect: Function;
  onModal: Function;
  onSure: Function;
}

interface State {
  selected: Array<DataProps>;
}

export default class Tpicker extends Component<Props, Object> {
  static defaultProps = {
    show: false,
    multiple: false,
    selected: [],
    data: [],
    onSelect: null,
    onCancel: null,
    onSure: null
  };

  state: State = {
    selected: []
  };

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.selected) {
      this.setState({
        selected: nextProps.selected
      });
    }
  }

  handleSelect = (item: DataProps): void => {
    const { selected } = this.state;
    const { multiple } = this.props;
    if (!multiple) {
      return this.setState({ selected: [item] });
    }
    const i = selected.findIndex(select => select.value === item.value);
    if (i === -1) {
      selected.push(item);
    } else {
      selected.splice(i, 1);
    }
    this.setState({ selected: [...selected] });
  };

  handleCancel = (): void => {
    const { onModal } = this.props;
    onModal && onModal(false);
  };

  handleSure = () => {
    const { selected } = this.state;
    const { onSure } = this.props;
    onSure && onSure(selected);
    this.handleCancel();
  };

  render() {
    const { show, data } = this.props;
    const { selected } = this.state;
    return (
      <Modal visible={show} showHeader={false} showClose={false} onClose={this.handleCancel}>
        <View className="header">
          <View className="cancel" onClick={this.handleCancel}>
            取消
          </View>
          <View className="blank" />
          <View className="sure" onClick={this.handleSure}>
            确定
          </View>
        </View>
        <ScrollView scrollY className="scrollContainer">
          {data.map((item, index) => {
            const active = selected.some(se => item.value === se.value);
            return (
              <View key={`item_${index}`} className={`item ${active ? 'active' : ''}`} onClick={this.handleSelect.bind(this, item)}>
                <Text className="text">{item.label}</Text>
                {active ? <Ticon value="icon-check1" size={30} color="#ff921c" /> : null}
              </View>
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

/**
 * 数据类型
 */
export interface DataProps {
  value: any;
  label: string;
}

/**
 * 根据给定数据值获取集合中项目的指定项
 * @param value 数据值
 * @param data 数据集合
 * @param options 选项
 */
export const getItemInList = <T, R>(
  value: T,
  data: Array<any>,
  options: {
    valueField?: string;
    defaultValue?: R;
  } = {}
): R => {
  const opt = { valueField: 'value', ...options };
  const result = data.find(item => {
    return item[opt.valueField] === value;
  });
  return result || {};
};
