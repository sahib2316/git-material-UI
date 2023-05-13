import React from "react";
import UserAdd from "./UserAdd";

import { withRouter } from "react-router-dom";

function User() {
  return (
    <>
      <div>
        <UserAdd />
      </div>
    </>
  );
}

export default withRouter(User);
