import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import "./navbar.css";
import { Link } from "react-router-dom";
export const Navbar = (props) => {
  return (
    <>
      <ul className="header">
        <li className="link">
          <Link className="link" to="/">
            <HomeIcon fontSize="large" className="movieIcon"></HomeIcon>home
          </Link>
        </li>
        <li className="link">
          <Link className="link" to="/dvd-shop">
            <MovieIcon fontSize="large" className="movieIcon"></MovieIcon>
            Dvd-shop
          </Link>
        </li>
      </ul>
    </>
  );
};
