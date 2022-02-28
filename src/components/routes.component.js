import { Route, Routes } from "react-router-dom";
import { Connect, ContactPage } from "../pages";

// home components
import { HomeComponent } from "../home/index";

// profile components
import { Profile, ProfileForm, ProfileDetails } from "../profile";

// job components
import { Jobs, JobDescription } from "../jobs/index";

// company components
import { Company } from "../company/index";

const RouteComponent = () => {
  return (
    <Routes>
      <Route exact path={"/"} element={<HomeComponent />} />
      <Route path={"/home"} element={<HomeComponent />} />
      <Route path={"/connect"} element={<Connect />} />
      <Route path={"/contact"} element={<ContactPage />} />
      <Route path={"/company"} element={<Company />} />
      <Route path={"/profiles"} element={<Profile />}>
        <Route path='create' element={<ProfileForm />} />
        <Route path=':id' element={<ProfileDetails />} />
      </Route>
      <Route path={"/jobs"} element={<Jobs />}>
        <Route path='description/:id' element={<JobDescription />} />
      </Route>
      <Route
        path='*'
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};

export { RouteComponent };
