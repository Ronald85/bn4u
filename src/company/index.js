import { companies } from "../data";
import { StarFill, StarHalf } from "react-bootstrap-icons";

const CompanyItem = ({ item }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <p className="h6">{item.name}</p>
        <div className="d-flex">
          <StarFill style={{ color: "#ffe200" }} />
          <StarFill style={{ color: "#ffe200" }} />
          <StarFill style={{ color: "#ffe200" }} />
          <StarFill style={{ color: "#ffe200" }} />
          <StarHalf style={{ color: "#ffe200" }} />
        </div>
      </div>
    </div>
  );
};

const Company = () => {
  return (
    <div className="container">
      {companies.map((item) => (
        <CompanyItem item={item} />
      ))}
    </div>
  );
};

export { Company };
