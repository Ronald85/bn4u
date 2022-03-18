import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import { addProfile, getProfile } from "../redux/profile.slice";

export const ProfileForm = (props) => {
  const { items: profiles } = useSelector((state) => state.profiles);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const getData = (id) => {
    getProfile(id);
  };

  const onSubmit = (data) => {
    if (id) {
      getData(id);
    } else {
      dispatch(addProfile(data));
      navigate("/profiles");
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row mb-3">
            <label className="form-label col-md-2">First Name</label>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                placeholder="first name"
                {...register("firstName")}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="form-label col-md-2">Last Name</label>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                placeholder="last name"
                {...register("lastName")}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="form-label col-md-2">Gender</label>
            <div className="col-md-10">
              <select
                type="text"
                className="form-control"
                placeholder="gender"
                {...register("genderId")}
              >
                <option selected disabled value="null">
                  select
                </option>
                <option value="1">Male</option>
                <option value="2">FeMale</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <label className="form-label col-md-2">DOB</label>
            <div className="col-md-10">
              <input
                type="date"
                className="form-control"
                {...register("dob")}
              ></input>
            </div>
          </div>

          <div className="row">
            <div className="col-md-10 offset-md-2">
              <button type="submit" className="btn btn-primary me-2">
                SAVE
              </button>
              <Link className="btn btn-secondary" to="/profiles">
                CANCEL
              </Link>
            </div>
          </div>
        </form>

        {JSON.stringify(profiles)}
      </div>
    </div>
  );
};
