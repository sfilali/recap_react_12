import React from 'react';
import {
	Link
} from 'react-router-dom'

function Ex1({changerTitre, titre, changerColori, colori, changerFond, laBase}) {

    return(
      <div className="bg-secondary p-5">
        <h2 className={`font-weight-bold`} style={colori} onClick={laBase}>{titre === true ? "Le Titre" : "Le Titre modifié"}</h2>
        
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4"></div>
          <div className="col-4"></div>
        </div>

        <button onClick={changerTitre} className="btn btn-outline-light p-2 m-1">Changer le texte du titre</button>

        <button onClick={changerColori} className="btn btn-outline-light p-2 m-1">Changer la couleur du titre</button>

        <button onClick={changerFond} className="btn btn-outline-light p-2 m-1">Changer la couleur du fond du titre</button>
        <div className="text-center mt-5">
            <Link to="/" className="text-decoration-none btn btn-outline-light border-0">
              <i className="fas fa-home align-middle"></i>
            </Link>
        </div>                
      </div>
    )
}

export default Ex1;