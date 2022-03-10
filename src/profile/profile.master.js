import { useState } from "react";
import { NavLink } from "react-router-dom";
import * as Icons from "react-bootstrap-icons";

import { useSelector } from "react-redux";

import { GridDisplay } from "./grid";
import { ListItem } from "./list";

const ProfileMaster = () => {
  const profiles = useSelector((state) => state.profiles);
  const [display, setDisplay] = useState("list");

  const changeDisplay = () => {
    if (display === "list") {
      setDisplay("grid");
    } else {
      setDisplay("list");
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="card-title">
            <div className="d-flex justify-content-between">
              <h4>Profiles</h4>
              <div>
                <NavLink to="/profiles/create" className="btn btn-primary">
                  ADD
                </NavLink>
                <button className="btn btn-primary" onClick={changeDisplay}>
                  {display === "grid" ? <Icons.Table /> : <Icons.Grid />}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          {display === "grid" ? (
            <GridDisplay data={profiles.items} />
          ) : (
            <ListItem data={profiles.items} />
          )}
        </div>
      </div>
    </>
  );
};

export { ProfileMaster };
