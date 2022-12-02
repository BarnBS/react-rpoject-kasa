import React from "react";
import { Link } from 'react-router-dom'

import "./Error404.css"

function Error404 () {

    return <>
    <section className="Error404">
        <h1>404</h1>
        <p> Oups ! La page que </p>
        <p> vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
    </section>
    </>
}

export default Error404