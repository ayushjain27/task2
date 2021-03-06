import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from './Api'

const Details = () => {
  const params = useParams();
  const [Notes, setNotes] = useState([]);
  
  const getId = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${params.id}`,
      {
        method: "GET",
      }
    );
    const json = await response.json();
    console.log(json);
    setNotes(json);
    console.log("Complete");
  };

  useEffect(() => {
    getId();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h2>{params.id}</h2>
      {Notes.map((element) => {
        return(
          <Api imageUrl={element.image} title={element.title} description={element.description} price={element.price} rating={element.rating} />
        )
      })}
    </>
  );
};

export default Details;
