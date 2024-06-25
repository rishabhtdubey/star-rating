import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { StarRating } from "./StarRating";

const App = () => {
  return (
    <div>
      <StarRating />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
