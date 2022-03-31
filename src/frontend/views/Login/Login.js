import React, { useContext, useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import { Link } from "react-router-dom";
import "../../assets/css/Login/login.css";
import orangeLogo from "../../assets/resource/images/logo_orange.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string(),
      password: Yup.string()
    }),
    onSubmit: (values) => {
      handleOnsubmit(values);
    },
  });

  const handleOnsubmit = async (values) => {
    setIsFailed(false);
    console.log(values);
    if (values?.username && values?.password) {
      let result = await login(values.username, values.password);
      console.log("in hangle submit");
      console.log(result);
      if (result && result.length > 0) {
        props.history.push("/application");
      }
      else {
        setIsFailed(true);
        console.log("sai password");
      }
    }
  };

  const login = async (username, password) => {
    return await window.electron.electronAPI(username, password)
  }

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
                    src={orangeLogo}
                    alt="運動器検診"
                  />
                </h1>

                <form onSubmit={formik.handleSubmit} className="formLogin">
                  <div className="form_inner glo-login-width">
                    <div className="login_input glo-erroHight">
                      {isFailed && (
                        <label
                          className="lb-loginFailed glo-textColor"
                          id="lb-loginFailed"
                        >
                          ※ メールアドレスまたはパスワードが間違っています
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
                      {/* <Link to="/account-new">新規作成</Link> */}
                    </p>
                  </div>
                  {/* <Link to="/login2" ><button>Tới login2</button></Link> */}

                </form>
              </div>
            </div>

            {/* <footer id="mycarte" className="footer">
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
            </footer> */}


          </div>

        </div>
      </div>
    </>
  );
}

export default Login;
