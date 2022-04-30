import React from "react";
import avatar from "./assets/user.png";
import logo from "./assets/logo.png";
import puspi from "./assets/puspi.png";

import "./custom.scss";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="boxContainer">
      <Logo src={puspi} txtAlt={puspi} txtLogo={"PUPUK SRIWIDJAJA PALEMBANG"}/>
      <div className="header">
        <div className="lisence">
          <p className="text-lisence">
            powered by <img src={logo} alt="" /> MUSA
          </p>
        </div>
        <div className="avatar">
          <img className="" src={avatar} alt="avatar" />
          <p>paksiyudha</p>
          <button>
            <IoIosArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
