import React, { useState, useEffect } from "react";
import "./App.css";
import {Link} from 'react-router-dom';

function Dashboard() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );

    const items = await data.json(data);
    console.log(items.data);
    setItems(items.data);
  };
  return (
    <div>
      {items.map(item => (
        <h1 style={{textAlign:'center'}} key={item.item.itemId} >
           <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link> 
        </h1>
      ))}
    </div>
  );
}

export default Dashboard;
