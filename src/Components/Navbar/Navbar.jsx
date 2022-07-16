import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.logo}>LOGO</div>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-warning" type="submit">
            Search
          </button>
        </form>
        <button
          type="button"
          className="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Navbar;
