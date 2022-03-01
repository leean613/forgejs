import React, { useContext, useEffect } from "react";
import { RingLoader } from "react-spinners";
import { Link } from "react-router-dom";
import {
  LOGIN_LOADING,
} from "../../context/constants/actionTypes/authType";
import InformModal from "../../components/common/Modal/MessageModal/InformModal";

function Login(props) {

  useEffect(() => {
    if (authenticationService.token) {
      props.history.push("/application");
    }
  }, []);

  return (
    <>
      <div id="mycarte" className="login container">
        <div
          className={`${isLoading ? "login-spinner" : "login-spinner-isVisable"
            }`}
        >
          <RingLoader></RingLoader>
        </div>
        <div
          className={`${isLoading
            ? "auth-wrapper-opacity login-main-wrap"
            : "login-main-wrap"
            }`}
        >
          <div className="main_wrap">
            <div className="glo-minHeightLogin">
              <div className="login_wrap glo-card">
                <h1 className="glo-img-login">
                  <img
                    src={require("../../assets/resource/images/logo_orange.svg")}
                    alt="運動器検診"
                  />
                </h1>

                <form className="formLogin">
                  <div className="form_inner glo-login-width">
                    <div className="login_input glo-erroHight">
                      {formik.errors.username && formik.touched.username && (
                        <p
                          className="lb-loginFailed glo-textColor"
                          id="lb-loginFailed"
                        >
                          {formik.errors.username}
                        </p>
                      )}
                      {isFailed && !isShowPopupError && (
                        <label
                          className="lb-loginFailed glo-textColor"
                          id="lb-loginFailed"
                        >
                          {data.errorMessage}
                        </label>
                      )}
                    </div>
                    <div className="login_input">
                      <input
                        type="text"
                        name="username"
                        value={formik.values.username}
                        className="form-control glo-buttonFontSize"
                        placeholder="メールアドレス"
                        onChange={formik.handleChange}
                      />
                    </div>

                    <div className="login_input glo-erroHight">
                      {formik.errors.password && formik.touched.password && (
                        <p
                          className="lb-loginFailed glo-textColor"
                          id="lb-loginFailed"
                        >
                          {formik.errors.password}
                        </p>
                      )}
                    </div>

                    <div className="login_input">
                      <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        className="form-control glo-buttonFontSize"
                        placeholder="パスワード"
                        onChange={formik.handleChange}
                      />
                    </div>

                    <div className="box box-forgot-password">
                      <div className="login_forgot">
                        <Link to="/email-confirmation">
                          パスワードをお忘れの方
                        </Link>
                      </div>
                    </div>
                    <div className="submit_btn">
                      <button
                        type="submit"
                        className="login glo-buttonFontSize"
                      >
                        ログイン
                      </button>
                    </div>
                    <p className="glo-textNewAccount">
                      アカウントをお持ちでない方
                      <Link to="/account-new">新規作成</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <footer id="mycarte" className="footer">
              <nav className="footer_nav_pc">
                <ul>
                  <li>
                    <Link to="/privacy-policy" target="_blank">利用規約</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" target="_blank">プライバシーポリシー</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" target="_blank">バージョン : 1.0.1</Link>
                  </li>
                </ul>
              </nav>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
