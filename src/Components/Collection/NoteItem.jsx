import React from "react";
import { Link } from "react-router-dom";

const NoteItem = (props) => {
  let { imageUrl, id} = props;
  return (
    <div className="my-3">
      <div style={{ height: "200px", cursor: "pointer" }} className="card">
        <Link to={`/details/${id}`}>
        <img
          style={{ objectFit: "contain", height: "100%" }}
          src={imageUrl}
          className="card-img-top"
          alt="..."
        />
        </Link>
      </div>
    </div>
  );
};

export default NoteItem;
