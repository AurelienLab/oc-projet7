import './index.scss'

import starOn from './star_on.svg'
import starOff from './star_off.svg'


function Rating({value}) {


    let stars = [];
    for(let i = 1; i <= 5; i++) {
        stars.push(i <= value ? starOn : starOff)
    }
    let j = 0
    return (
        <div className={"rating"}>
            {stars.map((value) => {
                j++
                return <img src={value} key={`star-${j}`} className={"rating-star"} alt={""}/>
            })}
        </div>
    )
}

export default Rating