import React, { useEffect, useState} from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const plantsList = plants.map((p) =>
    <PlantCard
    key={p.id}
    name={p.name}
    image={p.image}
    price={p.price}
    />
  )

  return (
    <ul className="cards">{plantsList}</ul>
  );
}

export default PlantList;
