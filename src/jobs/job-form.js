import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { usePostJobMutation } from "../redux/jobs.api";

const JobForm = (props) => {
  const [postJob] = usePostJobMutation();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    await postJob(data);
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row mb-3">
            <label className="col-form-label col-md-2">Job Title</label>
            <div className="col-md-10">
              <input
                type="text"
                className={`form-control ${errors.title ? "is-invalid" : ""}`}
                placeholder="enter job title"
                {...register("title", { required: true })}
              ></input>
              {errors.title && (
                <p className="invalid-feedback">job title is required</p>
              )}
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-form-label col-md-2">Description</label>
            <div className="col-md-10">
              <textarea
                className="form-control"
                placeholder="enter job description"
              ></textarea>
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-form-label col-md-2">Exp Req.</label>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                placeholder="enter experience required"
              ></input>
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-form-label col-md-2">Location</label>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                placeholder="enter experience required"
              ></input>
            </div>
          </div>

          <div className="row mb-3">
            <div className="offset-md-2 col-md-10">
              <button type="submit" className="btn btn-primary me-2">
                SAVE
              </button>
              <button type="reset" className="btn btn-secondary me-2">
                RESET
              </button>
              <Link className="btn btn-danger" to="/jobs">
                CANCEL
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export { JobForm };
