import React from "react";
import { withRouter } from "react-router-dom";

export class Detail extends React.Component {
  render() {
    const { location } = this.props;
    console.log(this.props.location);

    return <div></div>;
  }
}

export default withRouter(Detail);
