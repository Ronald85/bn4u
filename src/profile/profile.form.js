import { Link } from "react-router-dom";

export const ProfileForm = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <form>
          <div className='row mb-3'>
            <label className='form-label col-md-2'>First Name</label>
            <div className='col-md-10'>
              <input
                type='text'
                className='form-control'
                placeholder='first name'
              />
            </div>
          </div>

          <div className='row mb-3'>
            <label className='form-label col-md-2'>Last Name</label>
            <div className='col-md-10'>
              <input
                type='text'
                className='form-control'
                placeholder='last name'
              />
            </div>
          </div>

          <div className='row mb-3'>
            <label className='form-label col-md-2'>Gender</label>
            <div className='col-md-10'>
              <select type='text' className='form-control' placeholder='gender'>
                <option selected disabled>
                  select
                </option>
                <option>Male</option>
                <option>FeMale</option>
              </select>
            </div>
          </div>

          <div className='row mb-3'>
            <label className='form-label col-md-2'>DOB</label>
            <div className='col-md-10'>
              <input type='date' className='form-control'></input>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-10 offset-md-2'>
              <button type='submit' className='btn btn-primary me-2'>
                SAVE
              </button>
              <Link className='btn btn-secondary' to="/profiles">CANCEL</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
