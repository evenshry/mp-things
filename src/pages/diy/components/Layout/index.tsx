import Taro, { Component } from '@tarojs/taro';
import DiyView from '../View';

interface Props {
  data: Diy.LayoutProps;
}

export default class DiyLayout extends Component<Props, Object> {
  static defaultProps = {};

  render() {
    const { data } = this.props;
    if (!data || !data.type) return null;
    switch (data.type) {
      case 'View': {
        return <DiyView data={data} />;
      }
    }
  }
}
