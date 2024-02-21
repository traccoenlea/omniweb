import Homepage from "./components/Homepage/Homepage";
import "./assets/style/index.scss";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
