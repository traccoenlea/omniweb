import "./assets/style/index.scss";
import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/components/Header";
import { Footer } from "./components/components/Footer";
import ReactGA from "react-ga4";

function App() {
  //initialize the Google Analytics with our key
  ReactGA.initialize("G-BVWRBR7BE6");

  // track the pageviews
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

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
