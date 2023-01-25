import './index.scss';

import logo from './logo.svg';

function Header(props) {
    return (
        <header className={"header"}>
            <img src={logo} alt={"Logo Kasa"} />
            <nav>
                <ul>
                    {props.children}
                </ul>
            </nav>
        </header>
    )
}

export default Header