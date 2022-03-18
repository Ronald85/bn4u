import { Route, Routes, Outlet } from "react-router-dom";
import { Connect, ContactPage, News, Services } from "../pages";

// home components
import { HomeComponent } from "../home/index";

// profile components
import { Profile, ProfileForm, ProfileDetails } from "../profile";

// job components
import { Jobs, JobDescription, JobForm } from "../jobs/index";

// company components
import { Company } from "../company/index";

// matrimony
import { Matrimony } from "../matrimony";

// churches
import { Churches } from "../church";

const RouteComponent = () => {
  return (
    <>
      <Routes>
        <Route exact path={"/"} element={<HomeComponent />} />
        <Route path={"/home"} element={<HomeComponent />} />
        <Route path={"/connect"} element={<Connect />} />
        <Route path={"/contact"} element={<ContactPage />} />
        <Route path={"/news"} element={<News />} />
        <Route path={"/services"} element={<Services />} />
        <Route path={"/company"} element={<Company />} />
        <Route path={"/churches"} element={<Churches />}></Route>
        <Route path={"/profiles"} element={<Profile />}>
          <Route path="create" element={<ProfileForm />} />
          <Route path=":id" element={<ProfileDetails />} />
          <Route path="edit/:id" element={<ProfileForm />} />
        </Route>
        <Route path={"/jobs"} element={<Jobs />}>
          <Route path="description/:id" element={<JobDescription />} />
          <Route path="create" element={<JobForm />} />
        </Route>
        <Route path={"/matrimony"} element={<Matrimony />}></Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <Outlet />
    </>
  );
};

export { RouteComponent };
