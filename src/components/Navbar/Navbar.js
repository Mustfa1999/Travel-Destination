import {Link} from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return(
        <div id="bar-nav">
             <Link to="/" id="home"> Home </Link>
        </div>
    );
}