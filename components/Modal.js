import React from "react";
import styles from "./Modal.module.css";
import Link from "next/link";

const Modal = ({ open, onClose, text, link }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className={styles.overlay}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.modalContainer}
      >
        <p>{text}</p>
        <div className="modalRight">
          <p onClick={onClose} className={styles.closeBtn}>
            X
          </p>
          <div>
            <a href={link}>
              {console.log(link)}
              {/* <a href="https://store-3d-model-app.herokuapp.com/store/"> */}
              <button className={styles.button91}>Visit Site</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
