import React from "react";
import { IoHome } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { FaFolder } from "react-icons/fa";
import "./custom.scss";

const Navlink = () => {
  return (
    <div className="navlink">
      <h2 className="title">{"Home"}</h2>
      <nav>
        <ul>
          <li>
            <button className="link border-radius">
              <IoHome />
              home
            </button>
          </li>
          <li>
            <button className="link border-radius">
              <AiOutlineBars />
              logs
            </button>
          </li>
          <li>
            <button className="link border-radius">
              <BsFillGearFill />
              Configuration
            </button>
          </li>
          <li>
            <button className="link border-radius">
              <FaFolder />
              Save Files
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navlink;
