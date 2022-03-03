import "./styles.css";
import { Header, RouteComponent, FooterComponent } from "./components";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="my-5">
          <RouteComponent />
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
