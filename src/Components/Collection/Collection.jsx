import React, { useState, useEffect } from "react";
import styles from "./Collection.module.css";
import NoteItem from "./NoteItem";

const Collection = () => {
  const [text, setText] = useState("HOME");
  const [Notes, setNotes] = useState([]);

  const getNotes = async () => {
    const response = await fetch(`https://fakestoreapi.com/products`, {
      method: "GET",
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  useEffect(() => {
    getNotes();
  }, []);

  const handleClickHome = () => {
    let newText = "HOME";
    setText(newText);
  };

  const handleClickMenClothing = () => {
    let newText = "MEN CLOTHING";
    setText(newText);
  };

  const handleClickJewelery = () => {
    let newText = "JEWELLERY";
    setText(newText);
  };

  const handleClickElectronics = () => {
    let newText = "ELECTRONICS";
    setText(newText);
  };

  const handleClickWomenClothing = () => {
    let newText = "WOMEN CLOTHING";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  return (
    <>
      <div className={styles.ref1}>
        <div className="row">
          <div className="col-3">
            <div className={`${styles.row} row`}>
              <div
                onClick={handleClickHome}
                className={`${styles.col} col-12 `}
              >
                <div>HOME</div>
                <i className="fa fa-home" aria-hidden="true"></i>
              </div>
              <div
                onClick={handleClickMenClothing}
                className={`${styles.col} col-12 `}
              >
                <div>MEN'S CLOTHING</div>
                <i className="fa-solid fa-shirt"></i>
              </div>
              <div
                onClick={handleClickJewelery}
                className={`${styles.col} col-12 `}
              >
                <div>JEWELLERY</div>
                <i className="fa-solid fa-gem"></i>
              </div>
              <div
                onClick={handleClickElectronics}
                className={`${styles.col} col-12 `}
              >
                <div>ELECTRONICS</div>
                <i className="fa-solid fa-tv"></i>
              </div>
              <div
                onClick={handleClickWomenClothing}
                className={`${styles.col} col-12 `}
              >
                <div>WOMEN'S CLOTHING</div>
                <i className="fa-solid fa-shirt-tank-top"></i>
              </div>
            </div>
          </div>
          <div className={`${styles.col1} col-9`}>
            <div className={`${styles.row3} row`}>
              <div className="col-12">
                <div
                  onChange={handleOnChange}
                  value={text}
                  className={styles.coats}
                >
                  {text}
                </div>
                <div className={styles.view}>View More</div>
              </div>
            </div>
            <div className={`${styles.row4} row`}>
              <div className={`${styles.col4} col-12`}>
                <div className="row">
                  <div className={`${styles.button} col-2`}>
                    <div className={`${styles.box} box`}>Sort</div>
                  </div>
                  <div className={`${styles.button} col-2`}>
                    <div className={`${styles.box} box`}>Product Type</div>
                  </div>
                  <div className={`${styles.button} col-2`}>
                    <div className={`${styles.box} box`}>Style</div>
                  </div>
                  <div className={`${styles.button} col-2`}>
                    <div className={`${styles.box} box`}>Size</div>
                  </div>
                  <div className={`${styles.button} col-2`}>
                    <div className={`${styles.box} box`}>Color</div>
                  </div>
                  <div className={`${styles.button} col-2`}>
                    <div className={`${styles.box} box`}>Price Range</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{height: '250px', overflow: 'auto'}} className="row">
              <div className="col-12">
                <div className="container">
                  {/* <div className="container"> */}
                    <div className="row" onChange={handleOnChange} value={text}>
                      {Notes.map((element) => {
                        if (text === "MEN CLOTHING" && element.category === "men's clothing") {
                          return (
                            <div className="col-md-3" key={element.id}>
                              <NoteItem imageUrl={element.image} id={element.id}/>
                            </div>
                          );
                        }
                        else if (text === "JEWELLERY" && element.category === "jewelery") {
                          return (
                            <div className="col-md-3" key={element.id}>
                              <NoteItem imageUrl={element.image} id={element.id}/>
                            </div>
                          );
                        }
                        else if (text === "ELECTRONICS" && element.category === "electronics") {
                          return (
                            <div className="col-md-3" key={element.id} >
                              <NoteItem imageUrl={element.image} id={element.id}/>
                            </div>
                          );
                        }
                        else if (text === "WOMEN CLOTHING" && element.category === "women's clothing") {
                          return (
                            <div className="col-md-3" key={element.id}>
                              <NoteItem imageUrl={element.image} id={element.id}/>
                            </div>
                          );
                        }
                        else if (text === "HOME") {
                          return (
                            <div className="col-md-3" key={element.id}>
                              <NoteItem imageUrl={element.image} id={element.id}/>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Collection;
