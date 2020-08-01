import { observable } from "mobx";

//ViewModels
import BaseViewModel from "../Base/BaseViewModel";
import HomePageViewModel from "../HomePage/HomePageViewModel";

class AppViewModel extends BaseViewModel {

  @observable HomePageVM;

  constructor() {
    super()

    this.HomePageVM = new HomePageViewModel();

  }

}

export default AppViewModel;