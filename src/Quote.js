import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const Quote = route => {
  const [data, setData] = useState({ results: [] });
  const [loading, setLoading] = useState(true);

  const getQuote = async () => {
    const result = await axios.get(
      `http://loremricksum.com/api/?paragraphs=1&quotes=1`
    );

    setData(result.data);
    setLoading(false);
  };
  useEffect(() => {
    getQuote();
  }, []);

  return loading ? <Spinner /> : <div className="quote">{data.data}</div>;
};

export default Quote;
