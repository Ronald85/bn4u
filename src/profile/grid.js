import * as Icon from "react-bootstrap-icons";

const Item = ({ data }) => {
  const fullName = `${data.title} ${data.firstName} ${data.lastName}`;

  return (
    <div className="card">
      <img src={data.image} class="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5>{fullName}</h5>
        <p>
          <Icon.Calendar /> {JSON.stringify(data.dob)}
        </p>
        {JSON.stringify(data)}
      </div>
    </div>
  );
};

const GridDisplay = ({ data }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {data &&
        data.map((item) => (
          <div className="col">
            <Item data={item} />
          </div>
        ))}
    </div>
  );
};

export { GridDisplay };
