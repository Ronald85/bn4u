import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getAll } from "../redux/job.slice";

const Post = ({ item }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex">
          <div className="col-md-11">
            <Link to={`/jobs/description/${item.id}`} className="h5">
              {item.title}
            </Link>
            <p className="">{item.company}</p>
            <p className="mb-1">
              <i class="bi bi-vector-pen m-2"></i>
              {item.experience}
            </p>

            <p className="mb-1">
              <i class="bi bi-map m-2"></i> {item.location}
            </p>
            <p className="mb-1">
              <i class="bi bi-briefcase m-2"></i>
              {item.department}
            </p>
            <p className="mb-1">
              <i class="bi bi-file-text m-2"></i>
              {item.department}
            </p>

            <p className="mb-1">
              <i class="bi bi-calendar3 m-2"></i>
              {item.expDate}
            </p>
          </div>
          <div className="col-md-1">
            <img
              src={
                "http://www.blairtg.com/media/logo_brand/ibm-logo_circle_600.png"
              }
              style={{ width: 32, height: 32 }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const JobsMaster = () => {
  const { pathname } = useLocation();
  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const onLoadMoreClick = () => {
    setIsLoading(true);
    dispatch(getAll());
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    // dispatch(getAll());
  }, []);

  return (
    <div className="">
      <Link to={`${pathname}/create`}>ADD</Link>

      {jobs.items.map((item) => (
        <Post item={item} />
      ))}

      <div className="row">
        <button
          className="btn btn-primary"
          disabled={isLoading}
          onClick={onLoadMoreClick}
        >
          {isLoading && (
            <div className="spinner-border text-light me-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          Load More
        </button>
      </div>
    </div>
  );
};

export { JobsMaster };
export * from "./job-description";
