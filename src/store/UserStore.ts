import { observable, action } from 'mobx';

export class UserStore {
  @observable
  title: string = 'HELLO';

  @action
  setTitle = (value: string): void => {
    this.title = value;
  };
}
export default new UserStore();
