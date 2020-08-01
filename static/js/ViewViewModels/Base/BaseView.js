import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class BaseView extends Component {

  @observable viewModel;
  @observable isVisible;
  @observable children;

  constructor(props) {
    super(props);

    this.viewModel;
    this.isVisible = true;
    this.name = "";

    this.children = [];

    this.init();
  }

  /**
   * does any initial set up that the class needs
   */
  init() {

    if (this.props.hasOwnProperty("ViewModel"))
      this.setViewModel(this.props.ViewModel);

    if (this.props.hasOwnProperty("IsVisible"))
      this.isVisible = this.props.IsVisible;

    if (this.props.hasOwnProperty("Parent")) {
      this.props.Parent.children.push(this);
    }

    if (this.props.hasOwnProperty("Name")) {
      this.name = this.props.Name;
    } else {
      this.name = this.constructor.name;
    }

  }

  /**
   * @param {ViewModel} viewModel
   * 
   * sets the viewModel property
   */
  setViewModel(viewModel) {
    this.viewModel = viewModel;
  }

  /**
   * @returns {HTML}
   * 
   * runs if the isVisible property is true
   */
  doShow() {
    return <div />
  }

  /**
   * @returns {HTML}
   * 
   * runs if the isVisible property is false
   */
  doHide() {
    return <div style={{ display: 'none' }} />
  }

  render() {

    if (this.isVisible)
      return this.doShow();

    return this.doHide();
  }
}

export default BaseView;
