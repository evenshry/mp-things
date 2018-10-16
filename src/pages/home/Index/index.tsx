import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import './style.less';

interface Props {
  token?: any;
  dispatch?: any;
}

@connect(({ common }) => ({
  ...common
}))
export default class Index extends Component<Props, Object> {
  config: Config = {
    navigationBarTitleText: 'HOME'
  };

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'common/getToken' });
  }

  render() {
    const { token } = this.props;
    return (
      <View className="index">
        <View>
          <Text>{token}</Text>
        </View>
        <View>
          <Text>Hello, HOME</Text>
        </View>
      </View>
    );
  }
}
