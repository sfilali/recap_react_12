import React from 'react';
import {
    Link
} from 'react-router-dom'

function Ex3({perso, valu, bluri, go}) {
    return(
      <div className="bg-secondary p-5">
        <h2 className="font-weight-bold">Welcome <span className="h2 font-weight-bold">{perso}</span></h2>

        <input onChange={bluri} value={valu} type="text" className="px-3 py-2 mr-3 rounded-pill" placeholder="Aujourd'hui on acceuille ..."/>
        <button onClick={go} className="btn btn-light rounded-pill px-3 py-2" >Go</button>

        <div className="text-center mt-5">
            <Link to="/" className="text-decoration-none btn btn-outline-light border-0">
              <i className="fas fa-home align-middle"></i>
            </Link>
        </div>
      </div>
    )
}

export default Ex3;