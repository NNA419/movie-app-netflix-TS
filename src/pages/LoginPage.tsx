import React, {  } from 'react';
import "./LoginPage.css";
import LogoNexflix from "../images/logo_netflix.png"
import { useForm, Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import useAuth from '../components/hook/useAuth';
import './LoginPage.css';

type LoginFormInputs = {
email: string;
password: string;
};

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    
    password: yup.string().required("Password is required"),
  })
  .required("Required");

function LoginPage() {
  const navigate = useNavigate();
    const auth = useAuth();
    
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const onSubmit = (data : LoginFormInputs) => {
    navigate("/");
    auth.login({
        email: data.email,
        password : data.password,
  } as {email:string , password:string});
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="main-login-container">
        <div className="background-login-page"></div>
        <div className="logo-login-wrapper">
          <img src={LogoNexflix} alt="Netflix's logo" />
        </div>
        <div className="sign-in-wrapper">
          <div className="padding-signin">
            <div className="input-area">
              <h1>Sign In</h1>
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState: { error } }) => {
                  console.log(field);
                  return (
                    <input
                      {...field}
                      // error={!!error}
                      // helperText={error?.message}
                      className="input-login"
                      placeholder="Email or phone number"
                    ></input>
                  );
                }}
              />
              <p className="error-message">{errors.email?.message}</p>
              <Controller
                name="password"
                control={control}
                render={({ field }) => {
                  return (
                    <input
                      {...field}
                      className="input-login"
                      placeholder="Password"
                    ></input>
                  );
                }}
              />
              <p className="error-message">{errors.password?.message}</p>
              <button type="submit" className="Signin-btn">
                Sign in
              </button>
            </div>
            <div>
              <div className="checkbox-area">
                <div className="Remember-needhelp">
                  <input className="checkbox-login" type="checkbox"></input>
                  <h3>Remember me</h3>
                </div>
                <h3 className="need-help">Need help?</h3>
              </div>
            </div>
            <div className="login-context">
              <div className="sign-up">
                <span>New to Netflix ?</span>
                <button className="sign-up-btn">Sign up now</button>
              </div>
              <div>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </div>
              <div>
                The information collected by Google reCAPTCHA is subject to the
                Google Privacy Policy and Terms of Service, and is used for
                providing, maintaining, and improving the reCAPTCHA service and
                for general security purposes (it is not used for personalized
                advertising by Google).
              </div>
            </div>
          </div>
        </div>

        <div className="main-login-footer">
          <div className="login-footer-wrapper">
            <div>
              <button className="question-btn">Questions? Contact us.</button>
            </div>
            <div className="footer-list-option">
              <div className="footer-login-group">
                <button className="footer-option-login">FAQ</button>
                <button className="footer-option-login">
                  Cookie Preferences
                </button>
              </div>
              <div className="footer-login-group">
                <button className="footer-option-login">Help Center</button>
                <button className="footer-option-login">
                  Corporate information
                </button>
              </div>
              <div className="footer-login-group">
                <button className="footer-option-login">Terms of Use</button>
              </div>
              <div className="footer-login-group">
                <button className="footer-option-login">Privacy</button>
              </div>
            </div>

            <div className="select-language">
              <select className="select-box-lag">
                <option selected>
                  <i className="fa-solid fa-globe">English</i>
                </option>
                <option>Tiếng Việt</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginPage
