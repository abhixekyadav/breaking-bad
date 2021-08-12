import React from "react";
import { useHistory } from "react-router";

import notFound from "../img/notFound.png";

const NotFound = () => {
  const history = useHistory();
  return (
    <div className=" container">
      <div className="d-flex justify-content-center">
        <img src={notFound} className="img img-fluid" />
      </div>
      <div>
        <h3 className="d-flex justify-content-center">Nothing to see here</h3>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => history.push("/")}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
