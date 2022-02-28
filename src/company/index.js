import { companies } from "../data";

const CompanyItem = ({ item }) => {
  return (
    <div className='card mb-3'>
      <div className='card-body'>
        <p className='h6'>{item.name}</p>
        <div className='d-flex'>
          <i class='bi bi-star-fill' style={{ color: "#ffe200" }}></i>
          <i class='bi bi-star-fill' style={{ color: "#ffe200" }}></i>
          <i class='bi bi-star-fill' style={{ color: "#ffe200" }}></i>
          <i class='bi bi-star-half' style={{ color: "#ffe200" }}></i>
          <i class='bi bi-star' style={{ color: "#ffe200" }}></i>
        </div>
      </div>
    </div>
  );
};

const Company = () => {
  return (
    <div className='container'>
      {companies.map((item) => (
        <CompanyItem item={item} />
      ))}
    </div>
  );
};

export { Company };
