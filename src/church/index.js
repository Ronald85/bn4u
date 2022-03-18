import { Routes, Route, Outlet } from "react-router-dom";

export const ChurchMaster = () => {
  return <div>we show all churches here</div>;
};

export const Churches = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<ChurchMaster />} />
      </Routes>
      <Outlet />
    </>
  );
};

export * from "./church.form";
