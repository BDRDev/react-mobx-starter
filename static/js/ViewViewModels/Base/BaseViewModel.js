import { observable } from "mobx";

class BaseViewModel {

  @observable model

  constructor(model) {
    this.model = model;
  }
}

export default BaseViewModel;