import './index.scss'
import logo from './logo_white.svg'

function Footer() {
    return (
        <footer className={"footer"}>
            <figure className={"logo"}>
                <img src={logo} className={"logo"} alt={"Logo Kasa"}/>
            </figure>

            <p>
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}

export default Footer