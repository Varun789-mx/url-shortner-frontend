import { useEffect } from "react";
import "./App.css";
import { HomePage } from "./Pages/Home";
import background from "./assets/newbg.png";

function App() {
  useEffect(() => {
    fetch('http://localhost:5000/', {
      credentials: "include"
    })
  }, [])
  return (
    <div
      className="bg-black"
      style={{ position: "relative", width: "100%", height: "100vh" }}
    >
      {/* Background */}
      <div
        style={{ position: "fixed", inset: 0, zIndex: 0 }}
        className="bg-blend-overlay"
      >
        <img
          src={background}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Foreground */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
