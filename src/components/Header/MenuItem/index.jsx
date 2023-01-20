import './index.scss'
import {NavLink} from "react-router-dom";

function MenuItem({path, name}) {
    return (
        <li className={"nav__item"}>
            <NavLink to={path} className={({isActive}) => isActive ? "active" : ''}>
                {name}
            </NavLink>
        </li>
    )
}

export default MenuItem