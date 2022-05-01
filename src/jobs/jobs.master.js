import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as Icons from "react-bootstrap-icons";

import { useGetAllQuery } from "../redux/jobs.api";

const Post = ({ item }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex">
          <div className="col-md-11">
            <Link to={`/jobs/description/${item.Id}`} className="h5">
              {item.title}
            </Link>
            <p className="">{item.company}</p>
            <p className="mb-1">
              <Icons.VectorPen />
              <span className="ms-2">{item.experience}</span>
            </p>

            <p className="mb-1">
              <Icons.Map />
              <span className="ms-2">{item.location}</span>
            </p>
            <p className="mb-1">
              <Icons.Briefcase />
              <span className="ms-2">{item.department}</span>
            </p>
            <p className="mb-1">
              <Icons.FileText />
              <span className="ms-2">{item.department}</span>
            </p>

            <p className="mb-1">
              <Icons.Calendar3 />
              <span className="ms-2">{item.expDate}</span>
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
  const { data: jobs, isLoading } = useGetAllQuery();
  const onLoadMoreClick = () => {};

  useEffect(() => {
    // dispatch(getAll());
  }, []);

  return (
    <div className="">
      <Link to={`${pathname}/create`}>ADD</Link>

      {jobs?.map((item) => (
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
