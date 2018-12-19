import Taro, { Component } from '@tarojs/taro';
import { ScrollView, View, Text } from '@tarojs/components';
import Modal from '../Modal';
// import Iconfont from '../Iconfont';
import './style.less';

/*======================= 类型声明 begin ===========================*/
type Props = {
  show: boolean;
  value: Array<any>;
  data: Array<Array<any>>;
  onModal: Function;
  onSelect: Function;
};
/*======================= 类型声明 end ===========================*/

export default class Index extends Component<Props, Object> {
  static defaultProps = {
    show: false,
    value: [],
    data: [],
    onModal: null,
    onSelect: null
  };

  state = {
    current: [{ index: -1, item: {} }]
  };

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.data.length > 0) {
      const current = nextProps.data.map(() => ({ index: -1, item: {} }));
      this.setState({ current });
    }
    if (nextProps.value.length > 0) {
      const current = [];
      for (let i = 0; i < nextProps.value.length; i++) {
        const value = nextProps.value[i];
        const temp = { index: -1, item: {} };
        if (value && nextProps.data && nextProps.data[i] && nextProps.data[i].length > 0) {
          nextProps.data[i].some((itemj, j) => {
            if (itemj.value === value) {
              temp.index = j;
              temp.item = itemj;
            }
            return itemj.value === value;
          });
        }
      }
      this.setState({ current });
    }
  }

  /**
   * 选择项
   * @param type
   * @param index
   * @param item
   */
  handleOptionSelect(type, index, item) {
    const { onSelect, onModal, data } = this.props;
    const { current } = this.state;
    current[type] = { index, item };
    if (data.length > 1) {
      // 多选
      this.setState({ current: [...current] });
    } else {
      // 单选
      onSelect && onSelect(current);
      onModal && onModal(false);
    }
  }

  /**
   * 确认选择
   */
  handleSure() {
    const { current } = this.state;
    const { onSelect, onModal, data } = this.props;
    if (data.length === current.length) {
      onSelect && onSelect(current);
    }
    onModal && onModal(false);
  }

  render() {
    const { show, data, onModal } = this.props;
    const { current } = this.state;
    return (
      <Modal visible={show} showHeader={false} showClose={false} onClose={onModal.bind(this, false)}>
        <View className="header">
          <View className="cancel" onClick={onModal.bind(this, false)}>
            取消
          </View>
          <View className="blank" />
          <View className="sure" onClick={this.handleSure}>
            确定
          </View>
        </View>
        <View className="scrollContainer">
          {data && data.length > 0
            ? data.map((item, index) => {
                // const scrollTop = current[index] && ~current[index].index ? current[index].index * 48 : 0;
                return (
                  <ScrollView key={index} scrollY className="scrollView">
                    {item && item.length > 0
                      ? item.map((children, j) => {
                          let selected = false;
                          if (current[index] && ~current[index].index) {
                            selected = current[index].index === j;
                          } else {
                            selected = children.selected;
                          }
                          return (
                            <View
                              key={j}
                              className={`item ${selected ? 'active' : ''}`}
                              onClick={this.handleOptionSelect.bind(this, index, j, children)}
                            >
                              <Text className="text">{children.label}</Text>
                              {/* {selected ? <Iconfont size={16} color="#FF921C" name="icon-add" /> : <Text />} */}
                            </View>
                          );
                        })
                      : null}
                  </ScrollView>
                );
              })
            : null}
        </View>
      </Modal>
    );
  }
}
