import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ListItem = (props) => {
  const { items: configs, errors } = useSelector((state) => state.configs);
  const { data: profiles } = props;

  return (
    <>
      <table className="table">
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
            <tr key={item.id}>
              <td>{index + 1}.</td>
              <td>{`${item.firstName}, ${item.lastName}`}</td>
              <td>{configs.find((f) => f.id == item.genderId)?.configValue}</td>
              <td>{JSON.stringify(item.dob)}</td>
              <td>
                <Link to={`${item.id}`} className="btn btn-sm btn-primary">
                  View
                </Link>
                <Link
                  to={`edit/${item.id}`}
                  className="btn btn-sm btn-primary ms-2"
                >
                  Edit
                </Link>
                <button className="btn btn-sm btn-primary ms-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export { ListItem };
