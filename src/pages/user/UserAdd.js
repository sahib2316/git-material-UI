import React from "react";
import TextField from "../fields/TextField";
import NavTabs from "../nav-tabs/NavTabs";
import Button from "../../components/buttons/Button";
import SmallBtn from "../../components/buttons/SmallBtn";
import "./style.css";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

import { withRouter } from "react-router-dom";
import CustomBox from "../fields/CustomBox";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";

function UserAdd() {
  return (
    <>
      <div className="container-fluid backgroundColor">
        <div className="my-3">
          <nav className="navbar navbar-expand-lg backgroundColor">
            <div className="">
              {/* <a className="navbar-brand">
                <NavTabs label="App" href="/app/dashboard" />
              </a>
              <a className="navbar-brand">
                <NavTabs label="User" href="/app/user" />
              </a>
              <a className="navbar-brand">
                <NavTabs label="New" href="/app/user/UserAdd" />
              </a> */}
              <a className="navbar-brand" href="#">
                App
              </a>
              <a className="navbar-brand" href="#">
                User
              </a>
              <a className="navbar-brand" href="#">
                New
              </a>
            </div>
          </nav>
          {/* <NavTabs /> */}
        </div>
      </div>
      <div className="container-fluid backgroundColor">
        <div className="mx-3">
          <h3>Add Users</h3>
        </div>
        <div className="my-3 text-dark">
          <TextField placeholder="First Name" label="First Name" />
        </div>
        <div className="my-3 text-dark">
          <TextField placeholder="Last Name" label="Last Name" />
        </div>
        <div className="my-3 text-dark">
          <TextField placeholder="Phone Number" label="Phone Number" />
        </div>
        <div className="my-3 text-dark">
          <TextField placeholder="E-Mail" label="E-Mail" />
        </div>
        <div className="mx-3 my-2">
          <h5>Role</h5>
          <div className="containerfluid">
            <div className="row">
              <div className="col-md-3">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-5 m-0 p-0 container-fluid">
                      <div className="row">
                        <div className="col-md-6">
                          <CustomBox
                            Icon={<RadioButtonUncheckedIcon />}
                            CheckedIcon={<CheckCircleOutlineRoundedIcon />}
                          />
                        </div>
                        <div className="col-md-6 mt-2 px-0">
                          <h5>admin</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 m-0 p-0 container-fluid">
                      <div className="row">
                        <div className="col-md-6">
                          <CustomBox
                            Icon={<RadioButtonUncheckedIcon />}
                            CheckedIcon={<CheckCircleOutlineRoundedIcon />}
                          />
                        </div>
                        <div className="col-md-6 mt-2 px-0">
                          <h5>user</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9"></div>
            </div>
          </div>
        </div>
        <div className="mx-3 my-4">
          <h5>Disabled</h5>
          <CustomBox />
        </div>
        <div className="mx-3 my-4">
          <h5>Avatar</h5>
          <Button />
        </div>
        <div className="my-3">
          <TextField placeholder="Password" />
        </div>
        <div className="container-fluid my-2">
          <div className="row">
            <div className="col-md-5">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-3 mr-2">
                    <SmallBtn
                      type="button"
                      className="btn btn-outline-primary"
                      Text="SAVE"
                    />
                  </div>
                  <div className="col-md-3 mx-2">
                    <SmallBtn
                      type="button"
                      className="btn btn-outline-primary"
                      Text="RESET"
                    />
                  </div>
                  <div className="col-md-3 mx-2">
                    <SmallBtn
                      type="button"
                      className="btn btn-outline-primary"
                      Text="CANCEL"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(UserAdd);
