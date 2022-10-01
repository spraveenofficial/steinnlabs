import React from "react";
import { Navbar, SideBar } from "..";

const PageWrapper = ({ children }) => {
  return (
    <div className="homepage">
      <SideBar />
      <div className="homepage-items">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export { PageWrapper };
