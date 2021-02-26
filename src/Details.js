import React, { useState, useEffect } from "react";
import "./App.css";
import {Link} from 'react-router-dom';

function Details({match}) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
      const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.itemId}`)
      const item = await fetchItem.json();
      console.log(item);

  };
  return (
    <div>
        <h1>Item</h1>

    </div>
  );
}

export default Details;
