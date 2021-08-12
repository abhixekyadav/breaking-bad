import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Grid from "./components/Grid";
import Details from "./components/Details";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}&limit=8&offset=${
          (currentPage - 1) * 8
        }`
      );
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query, currentPage]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Search getQuery={(q) => setQuery(q)} />
            <Grid isLoading={isLoading} items={items} />
            {!query.length && (
              <div className="d-flex justify-content-center mt-5">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={8}
                  totalItemsCount={64}
                  onChange={setCurrentPageNo}
                  nextPageText={">"}
                  prevPageText={"<"}
                  firstPageText={"First"}
                  lastPageText={"Last"}
                  itemClass="page-item"
                  linkClass="page-link"
                />
              </div>
            )}
          </Route>
          <Route exact path="/:id">
            <Details items={items} />
          </Route>
          <Route>
            {/* {setIsLoading(false)} */}
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
