import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import boy2 from "../img/boy2.png";
import glassesimoji from "../img/glassesimoji.png";
import thumbup from "../img/thumbup.png";
import crown from "../img/crown.png";
import FloatinDiv from "../Components/FloatingDiv";
import { Typewriter } from "react-simple-typewriter";

import { motion } from "framer-motion";
const Intro = () => {
  const transition = { duration: 3, type: "spring" };

  return (
    <div className="Intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span>HY! I AM</span>
          <Typewriter words={["JENISH PATEL"]} typeSpeed={"110"} />
          <span className="satoshi">
            Frontend Developer with amazing skills in web designing and
            development,
          </span>
          <span className="satoshi">producting the quality work.</span>
        </div>
        <Link to="/files/Jenish-resume.pdf" target="_blank" download>
          <button className="button i-button satoshi">Hire me</button>
        </Link>
        <div>
          <ul className="i-icons" style={{ listStyleType: "none" }}>
            <li
              className="ri-github-fill"
              onClick={() =>
                window.open("https://github.com/JRPATEL47", "_blank")
              }
            ></li>
            <li
              className="ri-linkedin-fill"
              onClick={() =>
                window.open(
                  "http://www.linkedin.com/in/jenish-patel2011",
                  "_blank"
                )
              }
            ></li>
            <li
              className="ri-instagram-line"
              onClick={() =>
                window.open("https://www.instagram.com/_jenish_111/", "_blank")
              }
            ></li>
          </ul>
        </div>
        <div
          className="blur"
          style={{
            background: "rgb(238 150 255)",
            top: "-2rem",
            left: "-24rem",
          }}
        ></div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy2} alt="" />

        <motion.div
          initial={{ top: "-4rem", right: "100rem" }}
          whileInView={{ right: "25rem" }}
          transition={transition}
          className="floating-div"
        >
          <img src={glassesimoji} alt="" />
        </motion.div>

        <motion.div
          initial={{ top: "-1rem", left: "27rem" }}
          whileInView={{ left: "18rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        <motion.div
          initial={{ left: "5rem", top: "18rem" }}
          whileInView={{ left: "-1rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={thumbup} text1="Best" text2="Designs" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
