import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header(props) {
  //inline style for the nav tag

  return (
    <header>
      <nav className="nav">
        <Link className="nav__link" to="/">
          Home
        </Link>
        <Link className="nav__link" to="/about">
          About
        </Link>
        <Link className="nav__link" to="/projects">
          Projects
        </Link>
      </nav>
    </header>
  );
}
