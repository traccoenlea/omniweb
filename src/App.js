import Homepage from "./components/Homepage/Homepage";
import "./assets/style/index.scss";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
