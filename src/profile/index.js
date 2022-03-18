import { Routes, Route, Outlet } from "react-router-dom";
import { ProfileMaster } from "./profile.master";

const Profile = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<ProfileMaster />} />
      </Routes>
      <Outlet />
    </>
  );
};

export { Profile };
export * from "./profile.form";
export * from "./profile.details";
