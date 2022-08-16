function About() {

  return (
    <section className="about" id="About">
      <div className="container">
        <h1 className="flick" data-text="ABOUT">
          ABOUT
        </h1>
      </div>

      <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      <div
        className="blur s-blur2"
        style={{ background: "var(--purple)" }}
      ></div>
      <div className="aboutContainer">
        <div className="block"></div>
        <div className="about-info">
          <h3>Who Am I?</h3>
          <p className="satoshi">
            Hi, I'm Jenish Patel. Recent graduate student from Seneca College
            with a major in Computer Programming. I am a passionate web
            developer. I love creating unique, responsive and aesthetic user
            interfaces. Always curious to learn new technologies in web
            development.
          </p>
          <p className="satoshi">
            Aside from web designing and coding, I love playing badminton,
            reading books, and traveling. I offer a friendly, honest, respectful
            personality and always looking forward to learn more and improve.
          </p>{" "}
        </div>
      </div>
    </section>
  );
}

export default About;
