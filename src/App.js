import "./assets/style/index.scss";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/components/Header";
import { Footer } from "./components/components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
