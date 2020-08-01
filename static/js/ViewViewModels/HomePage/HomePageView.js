import React, { Fragment } from "react";
import { observer } from "mobx-react";

//Views
import BaseView from "../Base/BaseView";

//CSS
import "../../../css/Home/style.css";

@observer
class HomePageView extends BaseView {

  constructor(props) {
    super(props)
  }

  doShow() {
    return (
      <div id="home-page-wrapper">

        <div className="content-wrapper">

          <div className="header-text">
            <h1>React & MOBX Boiler Plate Project</h1>
          </div>

          <button
            className="btn btn-dark"
            style={{ marginBottom: 12 }}
            onClick={() => this.viewModel.handleClick()}
          >
            Click Me
          </button>

          <div className="clicks-wrapper">
            <h5>
              Number of Clicks: {this.viewModel.NumTimesClicked}
            </h5>
          </div>
        </div>

      </div>
    )
  }
}

export default HomePageView;