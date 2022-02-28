import "./styles.css";
import { configs } from "./data/index";

export default function App() {
  return (
    <div className="">
      {configs.map((item, index) => (
        <div>{JSON.stringify(item)}</div>
      ))}
    </div>
  );
}
