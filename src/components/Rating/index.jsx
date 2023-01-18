import './index.scss'

import starOn from './star_on.svg'
import starOff from './star_off.svg'


function Rating({value}) {


    let stars = [];
    for(let i = 1; i <= 5; i++) {
        stars.push(i <= value ? starOn : starOff)
    }
    return (
        <>
            {stars.map((value) => <img src={value} className={"rating-star"} />)}
        </>
    )
}

export default Rating