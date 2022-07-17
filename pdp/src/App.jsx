import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import PDPContent from "./PDPContent";
import SafeComponent from "./SafeComponent";
import Footer from "home/Footer";
import Header from "home/Header";

const App = () => (
  <Router>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header app={{ name: "Large Globes" }} />
      <div className="mx-auto max-w-6xl mt-20">
        <Routes>
          <Route path={"/planets/:id"} element={<PDPContent />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
