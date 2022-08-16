import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
function Skills() {
  const transition = {
    duration: 1.6,
    type: "spring",
    delay: 0.8,
  };

  return (
    <div className="skillContainer" id="Skills">
      <motion.div
        initial={{ left: "8rem", bottom: "-74.5rem" }}
        whileInView={{ left: "23rem", bottom: "-74.5rem" }}
        transition={transition}
        style={{ position: "absolute" }}
      >
        <Card
          heading={"Software/Tools"}
          detail={
            "MS Visual Studio Community, MS Visual Code, Visual Paradigm, MS Visual Code, Eclipse, Intellij Idea, IBM I Access Client Solutions, IBM Rational Developer"
          }
        />
      </motion.div>

      <motion.div
        initial={{ left: "8rem", bottom: "-50.5rem" }}
        whileInView={{ left: "13rem", bottom: "-62.5rem" }}
        transition={transition}
        style={{ position: "absolute" }}
      >
        <Card heading={"Programming Languages"} detail={"C, C++, Java"} />
      </motion.div>

      <motion.div
        initial={{ left: "33rem", bottom: "-74.5rem" }}
        whileInView={{ left: "43rem", bottom: "-74.5rem" }}
        transition={transition}
        style={{ position: "absolute" }}
      >
        <Card
          heading={"Database Management"}
          detail={
            "MySQL, Oracle 12c, Mongoose, Firebase, PostgreSQL, MongoDB, pgAdmin"
          }
        />
      </motion.div>

      <motion.div
        initial={{ bottom: "-62.5rem", left: "33rem" }}
        whileInView={{ bottom: "-62.5rem", left: "33rem" }}
        transition={transition}
        style={{ position: "absolute" }}
        className="hide"
      >
        <div className="card skillCard">
          <span>My Skill Set</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ left: "58rem", bottom: "-50.5rem" }}
        whileInView={{ left: "43rem" }}
        transition={transition}
        style={{ position: "absolute" }}
      >
        <Card
          heading={"Web Technologies"}
          detail={
            "JavaScript, HTML5, CSS3, Tailwind CSS, Daisy UI, JSON, AJAX, jQuery, TypeScript, Bootstrap, Heroku, Netlify, Vercel"
          }
        />
      </motion.div>

      <motion.div
        initial={{ left: "58rem", bottom: "-74.5rem" }}
        whileInView={{ left: "53rem", bottom: "-62.5rem" }}
        transition={transition}
        style={{ position: "absolute" }}
      >
        <Card
          heading={"Frameworks & Libraries"}
          detail={
            "Angular, React, Express Js, Node Js, Handlebars Js, Lodash, Moment"
          }
        />
      </motion.div>

      <motion.div
        initial={{ left: "33rem", bottom: "-50.5rem" }}
        whileInView={{ left: "23rem" }}
        transition={transition}
        style={{ position: "absolute" }}
      >
        <Card
          heading={"Project Management Tools"}
          detail={"Git, GitHub, Slack, MS Teams, MS Office, Discord, JIRA"}
        />
      </motion.div>

      <div className="blur s-blur3" style={{ background: "#ABF1FF94" }}></div>
      <div
        className="blur s-blur4"
        style={{ background: "var(--purple)" }}
      ></div>
    </div>
  );
}

export default Skills;
