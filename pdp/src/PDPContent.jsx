import React, { useState, useEffect } from "react";
import { getPlanetById, currency } from "home/planets";
import { useParams } from "react-router-dom";

export default function PDPContent() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    if (id) {
      getPlanetById(id).then((planet) => {
        setPlanet(planet);
      });
    } else {
      setPlanet(null);
    }
  }, [id]);

  if (!planet) return null;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={planet.image} alt={planet.name} />
      </div>
      <div>
        <div className="flex m-20">
          <h1 className="font-bold text-3xl flex-grow">{planet.name}</h1>
          <div className="font-bold text-3xl flex-end">
            {currency.format(planet.price)}
          </div>
        </div>
        <div className="mt-10">{planet.description}</div>
      </div>
    </div>
  );
}
