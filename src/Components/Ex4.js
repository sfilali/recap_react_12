import React from 'react';
import {
	Link
} from 'react-router-dom'

function Ex4({count, place1, place2, changerPlace, reset}) {
    return(
      <div className="bg-secondary p-5">
        <h2 className="font-weight-bold">Déplacer les éléments:</h2>

        <div className="row">
            <div className="col-5 h-100" >
                <div className="bg-primary" style={{height: "200px"}}>
                    <div className={`bg-danger squarre ${place1}`} style={{height: "50px", width:"50px"}}></div>
                </div>
            </div>
            <div className="col-2"></div>
            <div className="col-5 h-100" >
                <div className="bg-primary" style={{height: "200px"}}>
                    <div className={`bg-danger squarre ${place2}`} style={{height: "50px", width:"50px"}}></div>
                </div>
            </div>
        </div>

        <div className="text-center my-2 mt-3"><button onClick={changerPlace} className="btn btn-danger">Changer Place</button></div>
        <div className="text-center my-2"><button onClick={reset} className="btn btn-warning">Click : {count}</button></div>

        <div className="text-center">
            <Link to="/" className="text-decoration-none btn btn-outline-light border-0">
              <i className="fas fa-home align-middle"></i>
            </Link>
        </div>
      </div>
    )
}

export default Ex4;