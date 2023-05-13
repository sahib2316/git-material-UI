import React from "react";

import { withRouter } from "react-router-dom";
import Icons from "../icons/Icons";
import Maps from "../maps/Maps";
import Typography from "../typography/Typography";

function Marketing() {
  return (
    <>
      <div>
        <Icons />
        <Maps />
        <Typography />
      </div>
    </>
  );
}

export default withRouter(Marketing);
