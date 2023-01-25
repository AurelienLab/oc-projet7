import './index.scss';

import logo from './logo.svg';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <header className={"header"}>
            <Link to={"/"}>
                <img src={logo} alt={"Logo Kasa"} />
            </Link>
            <nav>
                <ul>
                    {props.children}
                </ul>
            </nav>
        </header>
    )
}

export default Header