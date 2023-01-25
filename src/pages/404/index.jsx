import './index.scss';

import {useDocumentTitle} from "../../utils/hooks";
import {Link} from "react-router-dom";

function Error404() {
    useDocumentTitle('Page introuvable')
    return (
        <main className={"error"}>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to={'/'}>Retourner sur la page d'accueil</Link>
        </main>
    )
}

export default Error404