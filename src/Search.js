import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import Spinner from "./Spinner";

const Search = () => {
  const [data, setData] = useState({ results: [] });
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const handleSubmit = e => {
    e.preventDefault();
    setSearch(query);
  };

  const searchCharacter = async () => {
    const result = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${query}`
    );

    setData(result.data);
    setLoading(false);
  };
  useEffect(
    () => {
      searchCharacter();
    },
    [search]
  );

  return loading ? (
    <Spinner />
  ) : (
    <div className="results-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="results">
        <ul>
          {data.results.map(item => (
            <li key={item.id}>
              <Link to={`/details/${item.id}`}>
                <img alt={item.name} src={item.image} />
                <span className="name">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
