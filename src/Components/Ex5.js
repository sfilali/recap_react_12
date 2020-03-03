import React from 'react';
import {
	Link
} from 'react-router-dom'

function Ex5({nid, pondreUnOeuf, mangerOeuf, toutManger}) {
    return(
      <div className="jumbotron p-5">
        <h2 className="font-weight-bold">Générer des éléments du DOM</h2>

        <button onClick={pondreUnOeuf} className="btn btn-success font-weight-bold m-2 align-center"> <img className="align-center" src="./img/45369.png" alt="" style={{width:"30px"}}/>
        </button>
        

        <button onClick={mangerOeuf} className="btn btn-warning font-weight-bold m-2"><img src="./img/114967.png" alt="" style={{width:"30px"}}/></button>

        <button onClick={toutManger} className="btn btn-danger font-weight-bold m-2"><img src="./img/icon.png" alt="" style={{width:"30px"}}/></button>

        <div className={`text-center bg-dark ${nid.length > 0 ? "p-3" : ""}`}>
          {nid.map((el,i)=>{
            return(
              <img key={i} className="w-25" src="./img/boiled-egg.png" alt="Oeuf"/>
              // <i className="fas fa-egg h1 mx-2"></i>
            )
          })}
        </div>


        <div className="text-center mt-5">
            <Link to="/" className="text-decoration-none btn btn-outline-dark border-0">
              <i className="fas fa-home align-middle"></i>
            </Link>
        </div>
      </div>
    )
}

export default Ex5;