import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { appAction } from "../context/actions/app/appAction";
// import { GlobalContext } from "../context/Provider";
import { RingLoader } from "react-spinners";
import { helper } from "../utils/helper";

function Application(props) {
  console.log("in appplication");
  return (
    <h1>in application</h1>
    // <div id="inspection" className="application container">
    //   <header style={{ position: "fixed", zIndex: 9999, width: "100%" }}>
    //     <div className="header_wrap">
    //       <div className="header_user">
    //         <dl className="glo-applist-paddTop glo-applist-username">
    //           <dt>
    //             <img
    //               className="user-avatar-app"
    //               src={
    //                 require("../assets/resource/images/iconMen.svg")
    //               }
    //               alt="顔写真"
    //             />
    //           </dt>
    //           <dd>Lý Trường An</dd>
    //         </dl>
    //       </div>
    //       <div className="header_logo">
    //         <h1>
    //           <img
    //             src={require("../assets/resource/images/logo_orange.svg")}
    //             alt="運動器検診"
    //           />
    //         </h1>
    //       </div>
    //       <div className="header_btn">
    //         <div className="logout__btn glo-applist-paddTop">
    //           <Link to="" onClick={() => logOut()}>
    //             ログアウト
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    //   <div className="main_wrap ">
    //     <div
    //       className={`${isLoading ? "login-spinner" : "login-spinner-isVisable"
    //         }`}
    //     >
    //       <RingLoader></RingLoader>
    //     </div>
    //     <div
    //       className={`${isLoading
    //         ? "auth-wrapper-opacity login-main-wrap"
    //         : "login-main-wrap"
    //         }`}
    //     >
    //       <div className="glo-minHeightApplication">
    //         <div className="glo-header">
    //           <div className=" glo-contentApplication">
    //             <div className="glo-content1 appli_menu">
    //               <ul>
    //                 {applications
    //                   .filter((app) => app.name === "ALC-MAINTENANCE")
    //                   .map((app, key) => {
    //                     return (
    //                       <li className="glo-contentLable" key={key}>
    //                         <Link
    //                           className="glo-textblack"
    //                           to={`master/account-management`}
    //                           onClick={() => {
    //                             localStorage.setItem(
    //                               "system",
    //                               "ALC-MAINTAINANCE"
    //                             );
    //                             setUserLogInHistory("ALC-MAINTAINANCE")
    //                           }}
    //                         >
    //                           {app.japaneseName}
    //                           <br />
    //                           アプリケーション
    //                         </Link>
    //                       </li>
    //                     );
    //                   })}

    //                 {applications
    //                   .filter((app) => app.name === "MANAGEMENT")
    //                   .map((app, key) => {
    //                     return (
    //                       <li className="glo-contentLable" key={key}>
    //                         <Link
    //                           className="glo-textblack"
    //                           to={`/${helper.ConvertSystemNameToURLName(
    //                             app.name
    //                           )}/dashboard`}
    //                           onClick={() => { setCurrentSystem(app.name); setUserLogInHistory(app.name) }}
    //                         >
    //                           {app.japaneseName}
    //                           <br />
    //                           アプリケーション
    //                         </Link>
    //                       </li>
    //                     );
    //                   })}

    //                 {applications
    //                   .filter((app) => app.name === "MYCARTE")
    //                   .map((app, key) => {
    //                     return (
    //                       <li className="glo-contentLable" key={key}>
    //                         <Link
    //                           className="glo-textblack"
    //                           to={`/${helper.ConvertSystemNameToURLName(
    //                             app.name
    //                           )}/dashboard`}
    //                           onClick={() => { setCurrentSystem(app.name); setUserLogInHistory(app.name) }}
    //                         >
    //                           {app.japaneseName}
    //                           <br />
    //                           アプリケーション
    //                         </Link>
    //                       </li>
    //                     );
    //                   })}

    //                 {applications
    //                   .filter((app) => app.name === "INSPECTION")
    //                   .map((app, key) => {
    //                     return (
    //                       <li className="glo-contentLable" key={key}>
    //                         <a
    //                           className="glo-textblack"
    //                           href={`${window.location.origin}/checkup/`}
    //                           onClick={() => { setCurrentSystem(app.name); setUserLogInHistory(app.name) }}
    //                         >
    //                           {app.japaneseName}
    //                           <br />
    //                           アプリケーション
    //                         </a>
    //                       </li>
    //                     );
    //                   })}
    //               </ul>
    //             </div>
    //             <div className="glo-content2">
    //               <nav className="appli_sub_menu">
    //                 {isMyCarteAccount && !isAdmin && (
    //                   <ul>
    //                     <li className="glo-appContent2Li">
    //                       <Link
    //                         to={`/user/account-top`}
    //                         onClick={() => { setCurrentSystem("MYCARTE"); setAccountService(true); setUserLogInHistory("ACCOUNT-SERVICE") }}
    //                       >
    //                         アカウント
    //                         <br />
    //                         サービス
    //                       </Link>
    //                     </li>
    //                     <li className="glo-appContent2Li2 ">
    //                       <Link
    //                         to={`/user/faq`}
    //                         onClick={() => { setCurrentSystem("MYCARTE"); setAccountService(true); setUserLogInHistory("ACCOUNT-SERVICE") }}
    //                       >
    //                         FAQ
    //                       </Link>
    //                     </li>
    //                     <li className="glo-noMarginBottom glo-appContent2Li2">
    //                       <Link
    //                         to={`/user/inquiry`}
    //                         onClick={() => { setCurrentSystem("MYCARTE"); setAccountService(true); setUserLogInHistory("ACCOUNT-SERVICE") }}
    //                       >
    //                         お問い合わせ
    //                       </Link>
    //                     </li>
    //                   </ul>
    //                 )}
    //                 {!isMyCarteAccount && !isAdmin && (
    //                   <ul>
    //                     <li className="glo-appContent2Li">
    //                       <Link
    //                         to={`/admin/account-top`}
    //                         onClick={() => { setCurrentSystem("MANAGEMENT"); setAccountService(true); setUserLogInHistory("ACCOUNT-SERVICE") }}
    //                       >
    //                         アカウント
    //                         <br />
    //                         サービス
    //                       </Link>
    //                     </li>
    //                     <li className="glo-appContent2Li2 ">
    //                       <Link
    //                         to={`/admin/faq`}
    //                         onClick={() => { setCurrentSystem("MANAGEMENT"); setAccountService(true); setUserLogInHistory("ACCOUNT-SERVICE") }}
    //                       >
    //                         FAQ
    //                       </Link>
    //                     </li>
    //                     <li className="glo-noMarginBottom glo-appContent2Li2">
    //                       <Link
    //                         to={`/admin/inquiry`}
    //                         onClick={() => { setCurrentSystem("MANAGEMENT"); setAccountService(true); setUserLogInHistory("ACCOUNT-SERVICE") }}
    //                       >
    //                         お問い合わせ
    //                       </Link>
    //                     </li>
    //                   </ul>
    //                 )}
    //               </nav>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <footer>
    //         <nav className="footer_nav_pc">
    //           <ul>
    //             <li>
    //               <Link to="/privacy-policy" target="_blank">利用規約</Link>
    //             </li>
    //             <li>
    //               <Link to="/privacy-policy" target="_blank">プライバシーポリシー </Link>
    //             </li>
    //             <li >
    //               <Link to="/privacy-policy" target="_blank">バージョン : 1.0.1</Link>
    //             </li>
    //           </ul>
    //         </nav>
    //       </footer>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Application;
