import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Spinner from "./Spinner";

const Details = () => {
  const params = useParams();
  const [item, setItem] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters/${params.id}`
      );
      const quote = await axios(
        `https://www.breakingbadapi.com/api/quotes/${params.id}`
      );
      setItem(result.data);
      setQuotes(quote.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  return isLoading ? (
    <>
      <div className="mt-5 pt-5">
        <Spinner />
      </div>
    </>
  ) : (
    <>
      <h1 className="center">{item[0].name}</h1>
      <div className="row">
        <div className=" col-7 mt-5">
          <ul>
            <li className="my-4">Date of Birth: {item[0].birthday}</li>
            <li className="my-4">Occupation: {item[0].occupation[0]}</li>
            <li className="my-4">Status: {item[0].status}</li>
            <li className="my-4">Nickname: {item[0].nickname}</li>
            <li className="my-4">
              Seasons: {item[0].appearance[0]} to{" "}
              {item[0].appearance[item[0].appearance.length - 1]}
            </li>
            <li className="my-4">Portrayed by: {item[0].portrayed}</li>
            <li className="my-4">Quote: {quotes[0]?.quote || "None"}</li>
          </ul>
        </div>
        <div className="container fluid col-5 h-4">
          <img src={item[0].img} alt={item[0].name} className="img img-fluid" />
        </div>
      </div>
    </>
  );
};

export default Details;
