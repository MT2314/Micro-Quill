import React, { useState, useEffect } from "react";

import { getPlanets, currency } from "./planets";

export default function HomeContent() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets().then(setPlanets);
  }, []);

  return (
    <div className="my-10 grid grid-cols-4 gap-5">
      {planets.map((planet) => (
        <div
          key={planet.id}
          className="col-md-6 col-sm-12 px-4 py-2 text-center"
        >
          <img src={planet.image} alt={planet.name} />
          <div className="flex">
            <div className="flex-grow front-bold">
              <a>{planet.name}</a>
            </div>
            <div className="flex-end">
              <a>{currency.format(planet.price)}</a>
            </div>
          </div>
          <div className="text-sm mt-4 text">
            <a>{planet.description}</a>
          </div>
        </div>
      ))}
    </div>
  );
}
