const API_SERVER = "http://localhost:8080";

export const getPlanets = () =>
  fetch(`${API_SERVER}/planets`).then((res) => res.json());

export const getPlanetById = (id) =>
  fetch(`${API_SERVER}/planets/${id}`).then((res) => res.json());

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
