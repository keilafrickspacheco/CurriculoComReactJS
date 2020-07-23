import React from 'react';
import { Link } from 'react-router-dom';

function Page1() {
  return (
    <div className="row">
      <div className="col">
          <div className="col text-center align-self-bottom pt-2">
                <Link to="/page2" className="btn btn-primary">
                    Ir para segunda pagina
                </Link>
                <h1>keila 1</h1>
            </div>
        </div>
    </div>
  );
}

export default Page1;