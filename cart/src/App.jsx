import React from "react";
import ReactDOM from "react-dom";

import Footer from "home/Footer";
import Header from "home/Header";
import CartContent from "./CartContent";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header app={{ name: "Large Globes" }} />
    <div className="mt-10">
      <CartContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
