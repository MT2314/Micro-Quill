import React from "react";

export default function Header({ app }) {
  return (
    <div className="flex justify-center items-center bg-gray-700 h-32 ">
      <h1 className="text-6xl text-white">{app.name}</h1>
    </div>
  );
}
