import { Megaphone } from "react-bootstrap-icons";
const Notification = () => {
  const iconStyle = { fontSize: "1.2rem" };

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex">
          <Megaphone style={iconStyle} />
          <div className="ms-5">
            small notification is here, small notification is here small
            notification is here small notification is here
          </div>
        </div>
      </div>
    </div>
  );
};

export { Notification };
