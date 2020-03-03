import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
	Route,
	Link
} from 'react-router-dom'

function Ex2() {
    return(
      <div className="bg-secondary p-5">
        <p>Passer d'un exo à un autre.</p>
        <div className="text-center mt-5">
            <Link to="/" className="text-decoration-none btn btn-outline-light border-0">
              <i className="fas fa-home align-middle"></i>
            </Link>
        </div>
      </div>
    )
}

export default Ex2;