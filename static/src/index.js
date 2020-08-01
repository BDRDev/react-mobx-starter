import React from "react";
import ReactDOM from "react-dom";

//Views
import AppView from "../js/ViewViewModels/App/AppView";

//ViewModels
import AppViewModel from "../js/ViewViewModels/App/AppViewModel";

ReactDOM.render(
  <AppView
    ViewModel={new AppViewModel()}
  />,
  document.getElementById("app-wrapper")
)