import React from 'react';
import {
	Link
} from 'react-router-dom'

function Ex6() {
    return(
      <div className="bg-secondary p-5">
        <h2>Le titre</h2>
        <div className="text-center mt-5">
            <Link to="/" className="text-decoration-none btn btn-outline-light border-0">
              <i className="fas fa-home align-middle"></i>
            </Link>
        </div>
      </div>
    )
}

export default Ex6;