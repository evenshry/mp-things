import { observable, action } from 'mobx';

export class UserStore {
  @observable
  count: number = 0;

  @action
  setCount = (value: number): void => {
    this.count = value;
  };
}
export default new UserStore();
