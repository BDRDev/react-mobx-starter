import { observable } from "mobx";

//ViewModels
import BaseViewModel from "../Base/BaseViewModel";

class HomePageViewModel extends BaseViewModel {

  @observable NumTimesClicked;

  constructor() {
    super();

    this.NumTimesClicked = 0;
  }

  /**
   * runs when the user clicks on the button
   */
  handleClick() {
    this.NumTimesClicked++;
  }
}

export default HomePageViewModel;