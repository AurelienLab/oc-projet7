import './index.scss'
import {useState} from "react";

import chevron from './chevron.svg'

function Dropdown({title, content, size, defaultOpen}) {
    const [isOpen, setIsOpen] = useState(defaultOpen)

    //If array passed, transform it into list

    if(Array.isArray(content)) {
        let i = 0
        content = (<ul>
            {content.map((value) => {
                i++
                return <li key={`dd-list-${i}`}>{value}</li>
            })}
        </ul>)
    }

    return (
        <div className={`dropdown ${isOpen && 'active'} ${size === 'large' && 'dropdown--lg'}`}>
            <div className={"dropdown__header"} onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <img src={chevron} alt={isOpen ? "Flêche vers le haut": "Flêche vers le bas"}/>
            </div>
            <div className={"dropdown__content"}>
                {content}
            </div>
        </div>
    )
}

export default Dropdown

