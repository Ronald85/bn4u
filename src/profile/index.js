import { Routes, Route, Outlet } from "react-router-dom";

import { ProfileForm } from "./profile.form";
import { ProfileMaster } from "./profile.master";
import { ProfileDetails } from "./profile.details";

const Profile = () => {
  return (
    <div className='my-5'>
      <Routes>
        <Route exact path='/' element={<ProfileMaster />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export { Profile, ProfileForm, ProfileDetails };
