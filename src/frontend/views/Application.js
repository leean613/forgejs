import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { helper } from "../utils/helper";
import "../assets/css/Appliaction/app.css";

function Application(props) {

  const applications =
    [{ id: "74a7ecef-9ee3-47bb-9f70-f93f1824bea1", name: "MYCARTE", japaneseName: "マイカルテ" },
    { id: "64fd6f0c-08e9-4c14-aaad-d134517b784d", name: "INSPECTION", japaneseName: "検査" },
    { id: "21e0884f-c25f-462d-a727-ba61e4e36439", name: "MANAGEMENT", japaneseName: "管理" },
    { id: "d8d15425-60bb-425e-b880-54d1b9d43a81", name: "ALC-MAINTENANCE", japaneseName: "ALCメンテナンス" }]
  console.log("in appplication");
  // return (
  //   <h1>in application</h1>
  // );
  const logOut = () => {
    // loginAction.logout(authDispatch);
    // authenticationService.logout();
    props.history.push("/login");
  };

  return (
    <div id="inspection" className="application container">
      <header style={{ position: "fixed", zIndex: 9999, width: "100%" }}>
        <div className="header_wrap">
          <div className="header_user">
            <dl className="glo-applist-paddTop glo-applist-username">
              <dt>
                <img
                  className="user-avatar-app"
                  src={
                    require("../assets/resource/images/iconMen.svg")
                  }
                  alt="顔写真"
                />
              </dt>
              <dd>User Name</dd>
            </dl>
          </div>
          <div className="header_logo">
            <h1>
              <img
                src={require("../assets/resource/images/logo_orange.svg")}
                alt="運動器検診"
              />
            </h1>
          </div>
          <div className="header_btn">
            <div className="logout__btn glo-applist-paddTop">
              <Link to="" onClick={() => logOut()}>
                ログアウト
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="main_wrap ">
        <div
          className="login-main-wrap"
        >
          <div className="glo-minHeightApplication">
            <div className="glo-header">
              <div className=" glo-contentApplication">
                <div className="glo-content1 appli_menu">
                  <ul>
                    {applications
                      .filter((app) => app.name === "ALC-MAINTENANCE")
                      .map((app, key) => {
                        return (
                          <li className="glo-contentLable" key={key}>
                            <Link
                              className="glo-textblack"
                              to={`master/account-management`}
                            // onClick={() => {
                            //   localStorage.setItem(
                            //     "system",
                            //     "ALC-MAINTAINANCE"
                            //   );
                            // }}
                            >
                              {app.japaneseName}
                              <br />
                              アプリケーション
                            </Link>
                          </li>
                        );
                      })}

                    {applications
                      .filter((app) => app.name === "MANAGEMENT")
                      .map((app, key) => {
                        return (
                          <li className="glo-contentLable" key={key}>
                            <Link
                              className="glo-textblack"
                              to={`/${helper.ConvertSystemNameToURLName(
                                app.name
                              )}/dashboard`}
                            // onClick={() => { setCurrentSystem(app.name); setUserLogInHistory(app.name) }}
                            >
                              {app.japaneseName}
                              <br />
                              アプリケーション
                            </Link>
                          </li>
                        );
                      })}

                    {applications
                      .filter((app) => app.name === "MYCARTE")
                      .map((app, key) => {
                        return (
                          <li className="glo-contentLable" key={key}>
                            <Link
                              className="glo-textblack"
                              to={`/${helper.ConvertSystemNameToURLName(
                                app.name
                              )}/dashboard`}
                            // onClick={() => { setCurrentSystem(app.name); setUserLogInHistory(app.name) }}
                            >
                              {app.japaneseName}
                              <br />
                              アプリケーション
                            </Link>
                          </li>
                        );
                      })}

                    {applications
                      .filter((app) => app.name === "INSPECTION")
                      .map((app, key) => {
                        return (
                          <li className="glo-contentLable" key={key}>
                            <a
                              className="glo-textblack"
                              href={`${window.location.origin}/checkup/`}
                            // onClick={() => { setCurrentSystem(app.name); setUserLogInHistory(app.name) }}
                            >
                              {app.japaneseName}
                              <br />
                              アプリケーション
                            </a>
                          </li>
                        );
                      })}
                  </ul>
                </div>
                <div className="glo-content2">
                </div>
              </div>
            </div>
          </div>
          <footer>
            <nav className="footer_nav_pc">
              <ul>
                <li>
                  <Link to="/privacy-policy" target="_blank">利用規約</Link>
                </li>
                <li>
                  <Link to="/privacy-policy" target="_blank">プライバシーポリシー </Link>
                </li>
                <li >
                  <Link to="/privacy-policy" target="_blank">バージョン : 1.0.2</Link>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Application;
