import { Link, useParams } from "react-router-dom";

import { useGetJobQuery } from "../redux/jobs.api";

const JobDescription = (props) => {
  const { id } = useParams();
  const { data: jobItem } = useGetJobQuery(id);

  return (
    <div className="d-flex">
      <div className="col-md-8">
        {jobItem && (
          <div>
            <h4>{jobItem.title}</h4>
          </div>
        )}
        <div className="my-5">
          <button
            className="btn btn-primary me-2"
            onClick={() => alert("applying for this job")}
          >
            Apply
          </button>

          <Link className="btn btn-primary" to="/jobs">
            Back
          </Link>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <p>Applications 10</p>
            <p>match 80%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { JobDescription };
