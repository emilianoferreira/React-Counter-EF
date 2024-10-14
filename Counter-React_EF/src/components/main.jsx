import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/Users/user/React-Counter-EF/Counter-React_EF/src/styles/index.css"
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container mt-4">
      {" "}
      <h3>Contador de segundos utilizadno React:</h3>
      <App />
    </div>
  </StrictMode>
);
