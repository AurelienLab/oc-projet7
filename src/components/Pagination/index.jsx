import './index.scss'

function Pagination({currentPage, setCurrentPage, nbPages}) {
    const pages = []

    for(let i = 0; i < nbPages; i++) {
        if(nbPages > 6) {
            if(i === 0 || i === nbPages-1 || (currentPage-1 <= i && i <= currentPage+1)) {
                pages.push(<li className={i===currentPage ? 'active': undefined} onClick={() => setCurrentPage(i)} key={`page${i}`}>{i+1}</li>)
            }

            if((i === currentPage-2) && i !== nbPages-1 && i !== 0) {
                pages.push (<li>...</li>)
            }

            if((currentPage === 0 && i === currentPage+2) || (currentPage === nbPages-1 && i === currentPage-2)) {
                pages.push(<li className={i===currentPage ? 'active': undefined} onClick={() => setCurrentPage(i)} key={`page${i}`}>{i+1}</li>)
            }

            if((i === currentPage+2) && i !== nbPages-1 && i !== 0) {
                pages.push (<li>...</li>)
            }
        }
        else {
            pages.push(<li className={i===currentPage ? 'active': undefined} onClick={() => setCurrentPage(i)} key={`page${i}`}>{i+1}</li>)
        }
    }

    const pageDown = () => {
        if(currentPage > 0) {
            setCurrentPage(currentPage-1)
        }
    }

    const pageUp = () => {
        if(currentPage < nbPages-1) {
            setCurrentPage(currentPage+1)
        }
    }
    return (
        <div className={"pagination"}>
            <button onClick={pageDown}>Précédent</button>
            <ul className={"pagination__pagelist"}>
                {pages}
            </ul>

            <button onClick={pageUp}>Suivant</button>
        </div>
    )
}

export default Pagination