export default {
  namespace: 'common',
  state: {
    token: ''
  },

  effects: {
    *getToken(_, { call, put }) {
      // yield call('', {});
      yield put({
        type: 'setToken',
        payload: {
          token: 'YANSHENG'
        }
      });
    }
  },

  reducers: {
    setToken(state, { payload }) {
      return { ...state, ...payload };
    }
  }
};
