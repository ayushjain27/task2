import React from "react";
import styles from './Api.module.css'
import { useNavigate } from "react-router-dom";

const Api = (props) => {
  const navigate =  useNavigate();
  const GOBACK = () => {
    navigate("/");
  };
  let { imageUrl, title, description, price, rating } = props;
  return (
    <>
      <div className={`${styles.container} my-3`}>
        <div className="row">
          <div className={`${styles.col} col-5`}>
            <div>
              <img className={styles.img} src={imageUrl} alt="" />
            </div>
          </div>
          <div className={`${styles.col1} col-7`}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title my-3 fw-bold">{title}</h3>
                <p className="card-title my-3">{description}</p>
                <h5 className="card-title my-3">{price}</h5>
                <h5 className="card-title my-3">{rating}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3" style={{ width: "80%", margin: "0px auto" }}>
        <button onClick={GOBACK} type="button" className="btn btn-danger">
          Go Back
        </button>
      </div>
    </>
  );
};

export default Api;
