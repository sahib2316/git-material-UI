import React from "react";
import Tables from "../tables/Tables";

import { withRouter } from "react-router-dom";

function User() {
  return (
    <>
      <div>
        <Tables />
      </div>
    </>
  );
}

export default withRouter(User);
