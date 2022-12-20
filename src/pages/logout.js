import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store/auth-slice";
import { Link, Redirect, Route } from "react-router-dom";
const Logout = (props) => {
  const userLogoutDispatch = useDispatch();
  const logoutHandler = (event) => {
    event.preventDefault()
    userLogoutDispatch(authAction.userLogout());
  };
  return (
    <div>
      <button type="button" onClick={logoutHandler}>
        <Link to={'/'}>Logout</Link>
      </button>
    </div>
  );
};

export default Logout;
