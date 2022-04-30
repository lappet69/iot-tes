import React from "react";
import {Link} from 'react-router-dom'
const Logo = ({src, txtAlt,txtLogo}) => {
  return (
    <Link to="/" className="logo">
      <img src={src} alt={txtAlt} /> {txtLogo}
    </Link>
  );
};

export default Logo;
