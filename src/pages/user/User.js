import React from "react";

import { withRouter } from "react-router-dom";

function User() {
  return (
    <>
      <div>
        <h1>User List</h1>
        <table>
          <th>
            <td>Firstname</td>
            <td>Lastname</td>
            <td>Username</td>
            <td>Role</td>
          </th>
          <tr>
            <td>Sahib</td>
            <td>Malhotra</td>
            <td>sahib2316</td>
            <td>Developer</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default withRouter(User);
