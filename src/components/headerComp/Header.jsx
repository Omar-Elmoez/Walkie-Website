/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { Links } from "../../data";
import "./Header.css";

export default function Header(props) {
  const headerStyle = {
    paddingTop: "1.2rem",
    position: "relative",
    backgroundImage:
      props.page === "signin"
        ? "linear-gradient(180deg, rgba(137, 48, 48, 0.5) 0%, rgba(0, 0, 0, 0.450521) 0.01%, rgba(0, 0, 0, 0.152535) 94.27%, rgba(0, 0, 0, 0) 100%)"
        : "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.901042) 0.06%, rgba(0, 0, 0, 0.305071) 525.4%, rgba(0, 0, 0, 0) 557.33%)",
  };

  return (
    <header style={headerStyle} className="header" data-page={props.page}>
      <nav className="header__nav container">
        <ul className="header__list">
          {Links.groupOne.map((link, index) => (
            <NavLink key={index} to={link.path}>
              <li>{link.label}</li>
            </NavLink>
          ))}
        </ul>
        <NavLink to={"/"}>
          <h1 className="logo">
            wa<span>l</span>k<span>i</span>e
          </h1>
        </NavLink>
        <ul className="header__list">
          {Links.groupTwo.map((link, index) => (
            <NavLink key={index} to={link.path}>
              <li>{link.label}</li>
            </NavLink>
          ))}
          <li className="header__userIcon">
            <NavLink to={"/signIn"}>
              <FaUser className="icon" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
