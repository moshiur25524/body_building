import React from "react";
import { Link } from "react-router-dom";

const Expert = ({ expert }) => {
  const { id, name, img, description } = expert;
  return (
    <div className="g-5 col-12 col-md-6 col-lg-4">
      <div className="card shadow-lg" style={{ width: "18rem" }}>
        <img src={img} height="200px" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description.slice(0, 150)}</p>
          <Link
            to={`/expert/${id}`}
            className="btn btn-primary bg-warning text-dark border-0"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Expert;
