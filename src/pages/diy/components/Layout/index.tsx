import Taro from '@tarojs/taro';
import DiyComponent from 'pages/diy/components';
import DiyView from '../View';
import './style.less';

interface Props {
  data: Diy.LayoutProps;
}

export default class DiyLayout extends DiyComponent<Props, Object> {
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
