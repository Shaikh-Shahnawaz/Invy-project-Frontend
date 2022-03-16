import React from "react";
import styles from "../../css/body.module.css";
const Banner = () => {
  return (
    <div style={{backgroundColor:'#ace0f0'}} >
      <div className="d-flex container py-5">
        <div className={styles.banner} >
          <h1>Let us</h1>
          <h1>introduce</h1>
          <h1>you to a</h1>
          <h1>new YOU!</h1>

          <p>
            More good skin. More radiance. More smoothness. More youthfulness.
            With skinnsi’s dermatologists, technology and at-home service, see
            the version of you, you were waiting for
          </p>

          <button
          className="btn btn-danger btn-lg"
          >get started</button>
        </div>
        <div>
          <img
            src="https://assets.toothsi.in/home_banner_669fe2eaac.webp?q=75&w=750"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
