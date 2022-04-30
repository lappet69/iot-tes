import React from "react";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <section className="">{children}</section>
      </Router>
    </React.Fragment>
  );
};

export default Layout;
