import React from 'react';
import {
	Link
} from 'react-router-dom'

function Ex6({recup1, recup2, res, egale, carac, bg, calcul, view, resultat}) {
    return(
      <div className="jumbotron p-5">
        <h2>Calculatrice</h2>

          <h3>Niveau1</h3>
          <input onChange={recup1} type="text"/>
          <span className="px-2">+</span>
          <input onChange={recup2} type="text"/>
          <button onClick={egale} className="mx-2">=</button>
          <span>{res}</span>

          <h3>Niveau2</h3>
          <div className="row bg-dark py-3 m-0 w-25">
            <div className="col-12 row m-0">
            <span className={`text-right ml-auto text-white ${resultat === "..."? "text-dark" : ""}`}>{resultat}</span>
            </div>
            <div className="col-12 row m-0">
              <div className={`col-11 bg-white py-1 ${view === "..." ? "text-white" : ""} `}>{view}</div>
              <div className="col-1"></div>
            </div>
          </div>

          <div className="row bg-dark m-0 w-25 border-secondary border-top border-bottom">

            {carac.map((el,i)=>{
              
              return(
                <div key={i} className={`col-3 p-0 border-secondary border-top border-bottom`}>
                  <button onClick={()=>calcul(el)} className={`btn ${bg(i)} m-2`}>{el}</button>
                </div>
              )
            })}



          </div>

        <div className="text-center mt-5">
            <Link to="/" className="text-decoration-none btn btn-outline-secondary border-0">
              <i className="fas fa-home align-middle"></i>
            </Link>
        </div>
      </div>
    )
}

export default Ex6;