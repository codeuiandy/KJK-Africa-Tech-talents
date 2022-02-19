import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import "./layout.css";
export const SecuredRoutes = ({ children, ...props }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let valid = localStorage.getItem("valid");
    console.log(valid);
    if (valid == "true") {
      return setIsAuthenticated(true);
    }
    setIsAuthenticated(false);
  }, []);
  return (
    <div className="app-wrapper">
      <div className="app-navbar">
        <Navbar />
      </div>

      <div className="layout-children-main app-padding ">
        <Sidebar />
        <div className="layout-ch-l">
          <Route {...props}>
            {isAuthenticated ? children : <Redirect to="/" />}
          </Route>
        </div>
      </div>
    </div>
  );
};

export const OpenRoutes = ({ children, ...props }) => {
  return (
    <div className="app-wrapper">
      <Route {...props}>{children}</Route>
    </div>
  );
};
