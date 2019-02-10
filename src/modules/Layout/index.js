import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";

export const Layout = () => (
  <React.Fragment>
    <div className="Grid u-sizeFull">
      <Header />
      <Body />
      <Footer />
    </div>
  </React.Fragment>
);

export default Layout;
