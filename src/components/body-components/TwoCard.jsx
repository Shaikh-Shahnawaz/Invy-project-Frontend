import React from "react";
import styles from "../../css/body.module.css";
const TwoCard = () => {
  return (
    <>
      <div className="d-flex mb-5 justify-content-center">
        <div className={styles.firstImage}>
            <h1>Laser hair reduction</h1>

            <p>get freedom from unwanted body hair and the need for waxing.</p>
          
          <p>
          its permanent. its painless
          </p>

          <img
            src="https://assets.toothsi.in/dermafacial_2c30520b4e.webp?q=75&w=600"
            alt=""
          />
        </div>

        <div className={styles.secondImage}>
            <h1>dermafacial</h1>
            <p>Deep cleansing.Exfoliation.Nourshing.Skin Tightening.</p>
            <p>Experience a facial designed by dermatologists.</p>
          <img
            src="https://assets.toothsi.in/lhr_e5b4eb79d7.webp?q=75&w=600"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default TwoCard;
