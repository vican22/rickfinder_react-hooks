import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import Quote from "./Quote";

const Details = route => {
  const [data, setData] = useState({ results: [] });
  const [loading, setLoading] = useState(true);

  const getCharacter = async () => {
    const result = await axios.get(
      `https://rickandmortyapi.com/api/character/${route.id}`
    );

    setData(result.data);
    setLoading(false);
  };
  useEffect(() => {
    getCharacter();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div className="details">
      <img alt={data.name} src={data.image} />
      <h1>{data.name}</h1>
      <div className="species">
        {data.species} <span className="status">{data.status}</span>
      </div>
      <div className="location">{data.location.name}</div>
      <Quote />
    </div>
  );
};

export default Details;
