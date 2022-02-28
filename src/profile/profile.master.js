import { profiles } from "../data/profile.data";
import { configs } from "../data/config.data";
import { Link, NavLink } from "react-router-dom";

export const ProfileMaster = () => {
  return (
    <div>
      <div className='card'>
        <div className='card-header'>
          <div className='card-title'>
            <div className='d-flex justify-content-between'>
              <h4>Profiles</h4>
              <NavLink to='/profiles/create' className='btn btn-primary'>
                ADD
              </NavLink>
            </div>
          </div>
        </div>
        <div className='card-body'>
          <table className='table'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Gender</th>
                <th>DOB</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {profiles.map((item, index) => (
                <tr>
                  <td>{index + 1}.</td>
                  <td>{`${item.firstName}, ${item.lastName}`}</td>
                  <td>
                    {configs.find((f) => f.id == item.genderId).configValue}
                  </td>
                  <td>{item.dob.toLocaleDateString()}</td>
                  <td>
                    <Link to={`${item.id}`} className='btn btn-sm btn-primary'>
                      View
                    </Link>
                    <Link
                      to={`edit/${item.id}`}
                      className='btn btn-sm btn-primary ms-2'
                    >
                      Edit
                    </Link>
                    <button className='btn btn-sm btn-primary ms-2'>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
