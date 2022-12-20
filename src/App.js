import React, { useEffect } from "react";
import "./App.css";
import LayoutMain from "./component/Layout/LayoutMain";
import Home from "../src/pages/Home";
import Products from "../src/pages/Products";
import Login from "../src/pages/Login";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "./store/auth-slice";
import Logout from "./pages/logout";
function App() {
  const checkUserValid = useSelector((state) => state.auth.isLogin);
  const userLogin = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      userLogin(authAction.userLogin());
    } 
  }, [checkUserValid, localStorage]);
  return (
    <div className="row">
      {checkUserValid && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Welcome To Web!</strong> You Can Use This Web
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      <LayoutMain>
        <Switch>
          <Route path={"/"} exact>
            <Redirect to={"/home"} />
          </Route>
          <Route path={"/home"}>
            <Home />
          </Route>
          <Route path={"/products"}>
            <Products />
          </Route>
          {!checkUserValid ? (
            <Route path="/login">
              <Login />
            </Route>
          ) : (
            <Route path={"/logout"}>
              <Logout />
            </Route>
          )}
        </Switch>
      </LayoutMain>
    </div>
  );
}

export default App;
