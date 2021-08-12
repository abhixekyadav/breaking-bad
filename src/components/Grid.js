import React from "react";
import Item from "./Item";
import Spinner from "./Spinner";

const Grid = ({ items, isLoading, setId }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <Item key={item.char_id} item={item}></Item>
      ))}
    </section>
  );
};

export default Grid;
