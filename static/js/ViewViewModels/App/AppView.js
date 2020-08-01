import React, { Fragment } from "react";
import { observer } from "mobx-react";

//Views
import BaseView from "../Base/BaseView";
import HomePageView from "../HomePage/HomePageView";

//CSS
import "../../../css/reset.css"
import "../../../css/App/style.css";

@observer
class AppView extends BaseView {

  constructor(props) {
    super(props);
  }

  doShow() {
    return (
      <Fragment>

        <HomePageView
          ViewModel={this.viewModel.HomePageVM}
          IsVisible={true}
          Parent={this}
        />

      </Fragment>
    )
  }
}

export default AppView;