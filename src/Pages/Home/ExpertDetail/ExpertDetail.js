import { useParams } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { experts } from "../Expert/ExpertData";

const ExpertDetail = () => {
  const { expertId } = useParams();

  const expert = experts.find((expert) => expert?.id === Number(expertId));

  return (
    <div className="hero-section">
      <PageTitle title="ExpertDetail"></PageTitle>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={expert.img}
              className="rounded mx-auto d-block vh-100 img-fluid img-thumbnail"
              alt="Hero"
            />
          </div>
          <div className="col-md-6">
            <h1>{expert.name}</h1>
            <p style={{ fontFamily: "" }}>{expert.description}</p>
            <button className="btn btn-primary">Get Started: {expertId}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertDetail;
