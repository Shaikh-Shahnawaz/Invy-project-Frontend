import React from "react";
import styles from "../../css/body.module.css";
const MultipleCard = () => {
  const data = [
    {
      heading: "we work from home",
      img: "https://assets.toothsi.in/img_at_home_service_8a08549827.jpeg",
      logoImg: "https://assets.toothsi.in/ic_home_43e90952a1.png",
      description:
        "Yours to be precise. Experience high quality professional in-clinic like treatment at the convenience & safety of your home #HundoP",
    },
    {
      heading: "we’re tech focused",
      img: "https://assets.toothsi.in/image_3e782066a6.jpeg",
      logoImg: "https://assets.toothsi.in/ic_focused_406f109075.png",
      description:
        "We use the newest innovation in laser technology-quadruple wavelength machine widening applications to all types of skin and hair",
    },
    {
      heading: "we’re pocket-friendly",
      img: "https://assets.toothsi.in/img_pocket_friendly_6374d4fd09.jpeg",
      logoImg: "https://assets.toothsi.in/ic_pocket_9760a068f7.png",
      description: "With easy EMI options, we are your pocket’s best friend",
    },
    {
      heading: "we customise",
      img: "https://assets.toothsi.in/img_we_customise_7abc91e249.jpeg",
      logoImg: "https://assets.toothsi.in/ic_customise_0faa558386.png",
      description:
        "Not every skin’s the same, so why the plan. We customize your treatment plan based on your skin and hair type.",
    },
    {
      heading: "trained professionals",
      img: "https://assets.toothsi.in/img_trained_professional_27b28458d1.jpeg",
      logoImg: "https://assets.toothsi.in/ic_trained_493112ff3f.png",
      description:
        "We have expert dermatologists and trained therapists on our team",
    },
    {
      heading: "call me, maybe?",
      img: "https://assets.toothsi.in/img_at_home_service_8a08549827.jpeg",
      logoImg: "https://assets.toothsi.in/ic_call_me_1bd882fb7f.png",
      description:
        "skinnsi support team will be by your side, at every single step",
    },
  ];

  return (
    <div className=" py-4 bg-light">
      {/* <div className={` `}> */}
        <h1 style={{ color: "red", fontSize:'60px' }}>why skinnsi, why not?</h1>

        <div className={`${styles.multipleCard} container row`}>
          {data.map((ele, index) => (
            <div class="card mt-3 mb-4 mx-4 " style={{ width: "20rem",border:'none', backgroundColor:'transparent', boxShadow:'3px 3px 10px 3px #888888' }}>
              {/* <div className=""> */}
                <img class="card-img-top" src={ele.img}/>

                <div className={`${styles.iconDiv}`}>
                  <img width={80} src={ele.logoImg} alt="" />
                </div>
                <div
                  style={{ backgroundColor: !(index%2) ? "#ace0f0": '' }}
                  class="card-body py-5"
                >
                  <h3 class="card-title mt-2">{ele.heading}</h3>
                  <p class="card-text mt-2"> {ele.description}</p>
                </div>
              {/* </div> */}
            </div>
          ))}
        </div>

       
      </div>
    // </div>
  );
};

export default MultipleCard;
