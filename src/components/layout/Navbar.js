import { Link } from "react-router-dom";
import styles from "./Navbar.css";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      <container className="navbar">
        <Link to="/">
          <img src={Logo} alt="logomarca" className="logos" />
        </Link>
        <ul className="list">
          <li className="item">
            <Link to="/">Início</Link>
          </li>
          <li className="item">
            <Link to="/itinerarios">Itinerários</Link>
          </li>
          <li className="item">
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </container>
    </div>
  );
}

export default Navbar;
