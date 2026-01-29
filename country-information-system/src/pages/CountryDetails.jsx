import React from "react";
import { useParams } from "react-router-dom";

export default function CountryDetails() {
  const { name } = useParams();

  return (
    <div>
      <h1>Country Details</h1>
      <p>Details for country: {name}</p>
    </div>
  );
}
