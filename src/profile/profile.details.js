import { useParams } from "react-router-dom";

const ProfileDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <div>here is where you see the full details of the selected profile.</div>
      <h4>{id}</h4>
    </div>
  );
};

export { ProfileDetails };
