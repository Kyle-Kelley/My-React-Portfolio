import NavMenu from "./NavMenu";
import React from "react";

const Header = () => {
  return (
    <div>
      <NavMenu />
      <style jsx>{`
        .Header {
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default Header;
