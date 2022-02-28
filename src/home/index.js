import { Jobs } from "../jobs/index";
import { Notification, FAQ } from "../components";

export const HomeComponent = () => {
  return (
    <div className='container my-5 d-flex'>
      <div className='row'>
        <div className='col-md-8'>
          <Notification />

          <Jobs />
        </div>
        <div className='col-md-4 '>
          <FAQ />
        </div>
      </div>
    </div>
  );
};
