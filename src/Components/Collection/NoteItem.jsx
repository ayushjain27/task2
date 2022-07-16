import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Details from "../Details";

const NoteItem = (props) => {
  const [Notes, setNotes] = useState([]);
  const navigate = useNavigate();

  function ImageClick(id) {
    navigate("/details");
    alert(id);

    const getId = async (id) => {
      // alert(id);
      console.log(id);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "GET",
      });
      const json = await response.json();
      console.log(json);
      setNotes(json);
      console.log("Complete");
    };

    useEffect(() => {
      getId();
      // eslint-disable-next-line
    }, []);

    {Notes.map((element) => {
        return (
          <div className="col-md-3" key={element.id}>
            <Details imageUrl={element.image}/>
          </div>
        );
      })}
  }


  let { imageUrl, id } = props;
  return (
    <div className="my-3">
      <div style={{ height: "200px", cursor: "pointer" }} className="card">
        <img
          style={{ objectFit: "contain", height: "100%" }}
          onClick={() => ImageClick(id)}
          src={imageUrl}
          className="card-img-top"
          alt="..."
        />
      </div>
    </div>
  );
};

export default NoteItem;
