import { Outlet, Routes, Route } from "react-router-dom";
import { MatrimonyMaster } from "./matrimony.master";

const Matrimony = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<MatrimonyMaster />} />
      </Routes>
    </div>
  );
};

export { Matrimony };
export * from "./matrimony.master";
