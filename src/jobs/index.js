import { Routes, Route, Outlet } from "react-router-dom";
import { JobsMaster } from "./jobs.master";

const Jobs = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<JobsMaster />} />
      </Routes>
      <Outlet />
    </>
  );
};

export { Jobs };
export * from "./job-description";
export * from "./job-form";
