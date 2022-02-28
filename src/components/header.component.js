import { SliderComponent } from "./slider.component";
import { Navigation } from "./nav.component";

const Header = () => {
  return (
    <div>
      <div className='d-none'>
        <SliderComponent />
      </div>
      <Navigation />
    </div>
  );
};

export { Header };
