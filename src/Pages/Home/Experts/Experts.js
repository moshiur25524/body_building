import React from "react";
import Expert from "../Expert/Expert";
import { experts } from "../Expert/ExpertData";

const Experts = () => {
  return (
    <div className="container">
      <h1 className="text-center highlight mt-5">Our Experts</h1>
      <div className="row">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert} />
        ))}
      </div>
    </div>
  );
};

export default Experts;
