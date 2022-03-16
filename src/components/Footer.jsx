import React from "react";
import styles from "../css/footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="d-flex justify-content-around">
        <div>
          <img
            src="https://assets.toothsi.in/logo_ba7eedb67a.svg?q=75&w=384"
            alt=""
          />
        </div>

        <div>
          <h6>everything skinnsi</h6>
          <p>laser hair removal</p>
          <p>dermafacial</p>
        </div>

        <div>
          <h6>about the brand</h6>
          <p>about us</p>
          <p>blog</p>
        </div>

        <div>
          <h6>the cool stuff</h6>
          <p>instagram</p>
          <p>facebook</p>
        </div>

        <div>
          <h6>chat with us</h6>
          <p>+91 8976941251</p>
          <p>info@skinnsi.in</p>
          <p>+91 9136994234</p>
          <small>9:00 AM to 10:00 PM</small>
        </div>
      </div>


<div>
  2021 skinnsi. All Rights Reserver. | terms of use | privacy policy | refund policy
</div>


    </div>
  );
};

export default Footer;
