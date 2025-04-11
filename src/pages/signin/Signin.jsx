import React from "react";
import "./Signin.css";

function Signin() {
  return (
    <div className="Signincontainer">
      <div className="signin_container">
        <form action="" id="signin_form">
          <div className="signin_logo">
            <img
              src="./images/png-clipart-mcdonald-s-museum-logo-mcdonalds 1.png"
              alt=""
            />
          </div>
          <div className="signin user__name">
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
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.99999 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 9.99999 2.5C8.15904 2.5 6.66666 3.99238 6.66666 5.83333C6.66666 7.67428 8.15904 9.16667 9.99999 9.16667Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              type="text"
              placeholder="USERNAME"
              id="login_username"
              required
            />
          </div>
          <div className="signin user__email">
            <svg
              fill="#fff"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 250.57 250.57"
              //   style={"enable-background: new 0 0 250.57 250.57"}
              xmlSpace="preserve"
            >
              <path
                d="M23.032,220.285h204.506c12.7,0,23.032-10.333,23.032-23.034V53.318c0-12.701-10.332-23.033-23.032-23.033H23.032
                C10.332,30.285,0,40.618,0,53.318v143.933C0,209.952,10.332,220.285,23.032,220.285z M15,53.318c0-4.436,3.601-8.033,8.032-8.033
                h204.506c4.433,0,8.032,3.597,8.032,8.033v143.933c0,4.437-3.6,8.034-8.032,8.034H23.032c-4.432,0-8.032-3.597-8.032-8.034V53.318z
                 M44.738,194.677h-15V56.529l93.674,60.815c1.102,0.715,2.643,0.716,3.748-0.002l93.673-60.813v138.148h-15V84.151l-70.507,45.774
                c-2.992,1.941-6.464,2.966-10.041,2.966s-7.049-1.025-10.039-2.965L44.738,84.151V194.677z"
              ></path>
            </svg>

            <input type="email" id="login_email" placeholder="EMAIL" required />
          </div>
          <div className="signin user__phone">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-phone-call"
            >
              <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>

            <input
              type="tel"
              pattern="[0]{1}[9]{1}[0-9]{9}"
              id="login_phone"
              placeholder="PHONE NUMBER (09**---****)"
              required
            />
          </div>
          <div className="signin user__password">
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
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.83334 9.16667V5.83333C5.83334 4.72826 6.27233 3.66846 7.05373 2.88706C7.83513 2.10565 8.89494 1.66667 10 1.66667C11.1051 1.66667 12.1649 2.10565 12.9463 2.88706C13.7277 3.66846 14.1667 4.72826 14.1667 5.83333V9.16667"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              type="password"
              id="login_password"
              placeholder="PASSWORD"
              required
            />
          </div>
          <button>SIGN IN</button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
