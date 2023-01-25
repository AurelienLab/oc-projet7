import './index.scss';

import logo from './logo_white.svg';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className={"footer"}>
            <figure className={"logo"}>
                <Link to={"/"}>
                    <img src={logo} className={"logo"} alt={"Logo Kasa"}/>
                </Link>
            </figure>

            <p>
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}

export default Footer