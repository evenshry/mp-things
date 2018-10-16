import Taro, { Component, Config } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';
import '@tarojs/async-await';
import dva from './store';
import models from './store/modals';
import Index from './pages/home/Index/index';

import './app.less';

// 初始化DVA
const dvaApp = dva.createApp({
  initialState: {},
  models: models
});
const store = dvaApp.getStore();

// 全局事件
enum GlobalEvent {
  REQUEST_FAIL = 'request_fail',
  TOKEN_INVALID = 'token_invalid'
}

class App extends Component {
  config: Config = {
    pages: ['pages/home/Index/index', 'pages/things/Index/index', 'pages/profile/Index/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'Things',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999999',
      selectedColor: '#333333',
      backgroundColor: '#fcfcfc',
      borderStyle: 'white',
      position: 'bottom',
      list: [
        {
          text: 'HOME',
          pagePath: 'pages/home/Index/index'
        },
        {
          text: 'THINGS',
          pagePath: 'pages/things/Index/index'
        },
        {
          text: 'MY',
          pagePath: 'pages/profile/Index/index'
        }
      ]
    }
  };

  handleUpdate() {
    // 更新新版本
    const updateManager = Taro.getUpdateManager();
    updateManager.onCheckForUpdate(function() {
      // 请求完新版本信息的回调
    });
    updateManager.onUpdateReady(function() {
      // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
      updateManager.applyUpdate();
    });
    updateManager.onUpdateFailed(function() {
      // 新版本下载失败
    });
  }

  componentWillMount() {
    this.handleUpdate();
    // 请求失败事件
    Taro.eventCenter.on(GlobalEvent.REQUEST_FAIL, error => {
      if (error instanceof Error) {
        Taro.showToast({ title: error.message || '获取失败', icon: 'none' });
      }
    });
  }

  componentWillUnmount() {
    // @ts-ignore
    Taro.eventCenter.off();
  }

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
