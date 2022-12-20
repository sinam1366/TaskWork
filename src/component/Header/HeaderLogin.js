import React, { useEffect } from "react";
import classes from "./HeaderLogin.module.css";
import { useFormik } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/auth-slice";
import LoginLogo from "../../images/LoginLogo.png";

const HeaderLogin = (props) => {
  const validUserLogin = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      errorValid: "",
      successValid: ""
    },
    onSubmit: (values, action) => {
      let session_url = "http://dummyjson.com/auth/login";
      let user = {
        username: formik.values.username,
        password: formik.values.password,
      };
      axios(session_url, {
        method: "POST",
        data: user,
        headers: {
          "content-type": "application/json; charset=utf-8",
        },
      })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          validUserLogin(authAction.userLogin());
          action.resetForm({
            values: {
              username: "",
              password: "",
            },
          });
          console.log(response);
        })
        .catch((error) => {
          if (error.response.data.message === "Invalid credentials") {
            action.setFieldError(error.field, error.message)
          }
          formik.values.errorValid = "There is no user";
          console.log(error);
        });
      console.log(values);
    },
  });
  useEffect(() =>{
    formik.values.errorValid = ''
  },[formik.values.errorValid])
  return (
    <div className="col-12 d-flex flex-column align-items-center justify-content-center">
      <div className="col-8 d-flex justify-content-center align-items-center p-3">
        <h2>login</h2>
      </div>
      <div
        className={`${classes.header_login} col-8 d-flex justify-content-between`}
      >
        <div className="col-6 p-3">
          <form className="container" onSubmit={formik.handleSubmit}>
            <div className="form-group mt-3">
              <label className="form-label mt-2" htmlFor="email">
                Email
              </label>
              <input
                className="form-control mt-1"
                type="text"
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              {formik.values.errorValid ? (
                <div className="text-danger">{formik.values.errorValid}</div>
              ) : null}
            </div>
            <div className="from-group mt-3">
              <label className="form-label mt-2" htmlFor="password">
                Password
              </label>
              <input
                className="form-control mt-1"
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>
            <div className="mt-5">
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-center align-items-center col-6">
          <img src={LoginLogo} style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default HeaderLogin;
