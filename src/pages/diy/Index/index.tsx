import Taro, { Config } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import BaseComponent from 'components/index';
import { DiyStore } from 'pages/diy/store';
import DiyLayout from 'pages/diy/components/Layout';
import ToolBar from 'pages/diy/Index/ToolBar';
import './style.less';

interface Props {}
interface InjectedProps extends Props {
  DiyStore: DiyStore;
}

@inject('DiyStore')
@observer
export default class Index extends BaseComponent<Props, Object> {
  config: Config = {
    navigationBarTitleText: '布局DIY'
  };
  get injected() {
    return this.props as InjectedProps;
  }

  componentWillMount() {}

  componentDidMount() {
    const { DiyStore } = this.injected;
    DiyStore.setDiyData({
      title: '默认布局',
      layouts: [{ type: 'View', layouts: [{ type: 'View' }] }, { type: 'View', layouts: [{ type: 'View' }] }]
    });
  }

  componentAfterShow() {}

  render() {
    const { DiyStore } = this.injected;
    const { diyData } = DiyStore;
    const layouts = diyData.layouts || [];
    return (
      <View className="container">
        {layouts.map((item, index) => (
          <DiyLayout data={item} key={`item_${index}`} />
        ))}

        <ToolBar />
      </View>
    );
  }
}
