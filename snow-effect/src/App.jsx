import { useState } from "react";
import { SnowOverlay } from "react-snow-overlay";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <SnowOverlay />
        <nav>
          <div className="nav-links">
            <i className="fa-solid fa-plane-departure"></i>
            <a href="">Tours</a>
            <a href="">About us</a>
            <a href="">Contacts</a>
          </div>
          <button className="btn">Book a tour</button>
        </nav>
        <section>
          <div className="hero-text">
            <h1>WINTER</h1>
            <p>is coming soon</p>
          </div>

          <div className="hero-box">
            <input type="text" placeholder="Search your destinations" />
            <div className="card-panel">
              <div className="card1">
                <div className="card-img1"></div>
                <div className="card-text">
                  <h3>Closer to Nature</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis, iusto.
                  </p>
                </div>
              </div>
              <div className="card2">
                <div className="card-img2"></div>
                <div className="card-text">
                  <h3>Closer to Nature</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis, iusto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container-2"></div>
    </>
  );
}

export default App;
