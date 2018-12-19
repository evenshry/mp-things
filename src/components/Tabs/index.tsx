import Taro, { Component, clientRectElement } from '@tarojs/taro';
import { View } from '@tarojs/components';

import './style.less';

interface Props {
  data: Array<any>;
  value?: number;
  itemWidth?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  onChange?: any;
}
interface Rect extends clientRectElement {
  height: any;
  width: any;
}

export default class Tabs extends Component<Props, Object> {
  static defaultProps = {
    data: [],
    value: 0,
    itemWidth: 0,
    height: 40,
    color: '#FF921C',
    backgroundColor: '#fff',
    onChange: null
  };

  state = {
    pWidth: 0,
    current: 0,
    offsetLeft: 0,
    tabStyle: {
      width: 'auto'
    },
    itemStyle: {
      flex: 1,
      width: 'auto'
    }
  };

  componentDidMount = () => {
    const query = Taro.createSelectorQuery().in(this.$scope);
    query
      .select('.ui-tabs')
      .boundingClientRect((rect: Rect) => {
        this.setState({ pWidth: rect.width }, () => {
          this.ininStyle(rect.width);
        });
      })
      .exec();
  };

  componentWillReceiveProps = nextProps => {
    const { value, data } = this.props;
    const { current } = this.state;
    if (nextProps.value !== value && nextProps.value !== current) {
      this.handleChange(nextProps.value, false);
    }
    if (data.length !== nextProps.data.length) {
      this.handleChangeData(nextProps.data);
    }
  };

  handleChangeData = data => {
    const { itemWidth } = this.props;
    const { current, pWidth } = this.state;
    const tempWidth = itemWidth && itemWidth > 0 ? itemWidth : pWidth / data.length;
    const offset = tempWidth * (current + 1 / 2);
    this.setState({ offsetLeft: offset });
  };

  ininStyle = pWidth => {
    let { itemWidth, data, value } = this.props;
    if (!value) value = 0;
    if (itemWidth && itemWidth > 0) {
      const tWidth = itemWidth * data.length;
      const tabWidth = tWidth > pWidth ? tWidth : pWidth;
      const offset = itemWidth * (value + 1 / 2);
      this.setState({
        current: value,
        offsetLeft: offset,
        tabStyle: { width: tabWidth },
        itemStyle: { flex: 'none', width: itemWidth }
      });
    } else {
      const itemWidth = pWidth / data.length;
      const offset = itemWidth * (value + 1 / 2);
      this.setState({
        current: value,
        offsetLeft: offset,
        tabStyle: { width: 'auto' },
        itemStyle: { flex: '1', width: 'auto' }
      });
    }
  };

  handleChange = (index, isTriger) => {
    const { itemWidth, data, onChange } = this.props;
    const { current, pWidth } = this.state;
    if (index !== current) {
      const tempWidth = itemWidth && itemWidth > 0 ? itemWidth : pWidth / data.length;
      const offset = tempWidth * (index + 1 / 2);
      this.setState({ current: index, offsetLeft: offset }, () => {
        if (isTriger && onChange) {
          onChange(index);
        }
      });
    }
  };

  render() {
    const { height, color, backgroundColor, data } = this.props;
    const { current, offsetLeft, tabStyle, itemStyle } = this.state;
    return (
      <View className="ui-tabs" style={{ backgroundColor: backgroundColor }}>
        <View
          className="tabContainer"
          style={{
            width: !tabStyle.width || tabStyle.width === 'auto' ? 'auto' : tabStyle.width + 'px',
            backgroundColor: backgroundColor,
            height: height + 'px',
            lineHeight: height + 'px'
          }}
        >
          {data.map((item, index) => (
            <View
              key={index}
              className={`item ${index === current ? 'active' : ''}`}
              onClick={this.handleChange.bind(this, index, true)}
              style={{
                flex: itemStyle.flex,
                width: !itemStyle.width || itemStyle.width === 'auto' ? 'auto' : itemStyle.width + 'px',
                color: index === current ? color : '#333'
              }}
            >
              {item}
            </View>
          ))}
          <View className="indicator" style={{ left: offsetLeft + 'px', backgroundColor: color }} />
        </View>
      </View>
    );
  }
}
