import React from "react";
import { useHistory } from "react-router";

const Item = ({ item, setId }) => {
  const history = useHistory();
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img
            src={item.img}
            alt={item.name}
            onClick={() => history.push(`/${item.char_id}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
