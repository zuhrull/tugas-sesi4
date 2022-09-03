import React from "react";
import Contribution from "./Contribution";
import RepoList from "./RepoList";
import Timeline from "./Timeline";

class Overview extends React.Component {
  render() {
    return (
      <>
        <div className="overview">
          <div>
            <a href="#overview">Overview</a>
            <a href="#overview">Repositories</a>
            <a href="#overview">Projects</a>
            <a href="#overview">Packages</a>
            <a href="#overview">Stars</a>
          </div>
          <br /><br /><br /><br />
          <h7>Popular Repositories</h7>
          <br />
          <RepoList />
          <h7>50 contributions in the last year</h7>
          <br />
          <Contribution />
          <br />
          <h7>Contribution activity</h7>
          <br />
          <Timeline />
          <br /><br />
        </div>
      </>
    )
  }
}

export default Overview;