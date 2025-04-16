import React, { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isShowHint, setIsShowHint] = useState(false);

  const navigate = useNavigate();
  const loginHandler = () => {
    if (userName === "admin" && password === "12345") {
      alert("log in");
      navigate("/");
    } else if (userName === "admin" && password !== "12345") {
      alert("password is incorrect !");
      setIsShowHint(true);
    } else if (userName !== "admin" && password === "12345") {
      alert("username is incorrect !");
      setIsShowHint(true);
    } else {
      alert("username and password both are incorrect !");
      setIsShowHint(true);
    }
  };
  const inputUserNameHandler = (e) => {
    console.log(e);
    setUserName(e.target.value);
  };
  const inputPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Logincontainer">
      <div className="login_container">
        {/* lang switch */}
        <div className="change_lang">
          <div className="lang">Fa</div>
        </div>
        {/*form */}
        <form action="" id="login_form" onSubmit={submitHandler}>
          <div className="login_logo">
            <img
              src="./images/png-clipart-mcdonald-s-museum-logo-mcdonalds 1.png"
              alt=""
            />
          </div>
          <div className="login">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66668C5.78262 12.5 4.93478 12.8512 4.30965 13.4763C3.68453 14.1014 3.33334 14.9493 3.33334 15.8333V17.5"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.99999 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 9.99999 2.5C8.15904 2.5 6.66666 3.99238 6.66666 5.83333C6.66666 7.67428 8.15904 9.16667 9.99999 9.16667Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <input
              autofocus
              type="text"
              placeholder="USERNAME"
              value={userName}
              onChange={inputUserNameHandler}
              id="login_username"
              required
              autocomplete="off"
            />
          </div>
          <div className="login">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8333 9.16667H4.16667C3.24619 9.16667 2.5 9.91286 2.5 10.8333V16.6667C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6667V10.8333C17.5 9.91286 16.7538 9.16667 15.8333 9.16667Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.83334 9.16667V5.83333C5.83334 4.72826 6.27233 3.66846 7.05373 2.88706C7.83513 2.10565 8.89494 1.66667 10 1.66667C11.1051 1.66667 12.1649 2.10565 12.9463 2.88706C13.7277 3.66846 14.1667 4.72826 14.1667 5.83333V9.16667"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <input
              type="password"
              value={password}
              onChange={inputPasswordHandler}
              id="login_password"
              placeholder="PASSWORD"
              required
            />
            <div className="toggle-password">
              <i className="fa fa-eye"></i>
              <i className="fa fa-eye-slash"></i>
            </div>
          </div>
          <button onClick={loginHandler}>LOGIN</button>
          <span className="message">
            Not registered?{" "}
            <Link to="/signin">
              <a>Create an account</a>
            </Link>
          </span>
          <p className={`${isShowHint ? "hint" : ""}`}>
            <span>hint (user : " admin ") </span>
            <span>hint (pass : " 12345 ") </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
