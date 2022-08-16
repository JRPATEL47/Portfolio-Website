import { Icon } from "@iconify/react";

function Projects() {

  return (
    <section id="Projects">
      <div className="container" id="scroll-projects">
        <h1 className="flick" data-text="PROJECTS">
          PROJECTS
        </h1>
      </div>

      <div className="grid work_projects">
        <div className="row">
          <div className="projects_image"></div>
          <div className="projects_info">
            <h3>Spotify Cone Music App</h3>
            <p className="projects_desc satoshi">
              Built project 'Spotify music app' using Angular and data from
              Spotify. This application uses data from Spotify to create a User
              Interface(UI) with Angular / Angular Material that enables users
              to explore and discover new music.
            </p>
            <p className="projects_tools satoshi">
              Angular • HTML5 • CSS3 • Bootstrap • jQuery • Typescript • Node JS
              • Express Js • MongoDB • Git • Vercel
            </p>

            <div className="card-icons">
              <Icon
                icon="uil:github-alt"
                onClick={() =>
                  window.open(
                    "https://github.com/JRPATEL47/SPOTIFY-MUSIC-APP",
                    "_blank"
                  )
                }
              />
              <Icon
                icon="eva:external-link-outline"
                onClick={() =>
                  window.open(
                    "https://spotify-music-app-ruby.vercel.app/login",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="projects_image"></div>
          <div className="projects_info">
            <h3>House Marketplace App</h3>
            <p className="projects_desc satoshi">
              Built project 'House Marketplace' using React. This is a
              marketplace application where users can sign up or sign in by
              their email and password or using their Google account. Users can
              also create a listing for a house to sell or rent.
            </p>
            <p className="projects_tools satoshi">
              React • HTML5 • CSS3 • Javascript • Leaflet • jQuery • Firebase 9
              • Node JS • Git • Vercel
            </p>

            <div className="card-icons">
              <Icon
                icon="uil:github-alt"
                onClick={() =>
                  window.open(
                    "https://github.com/JRPATEL47/House-Market-Place",
                    "_blank"
                  )
                }
              />
              <Icon
                icon="eva:external-link-outline"
                onClick={() =>
                  window.open(
                    "https://house-market-place-jrpatel47.vercel.app/",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="projects_image"></div>
          <div className="projects_info">
            <h3>GitHub Finder App</h3>
            <p className="projects_desc satoshi">
              Built project 'GitHub Finder App' using React. This application
              provides a search bar through which users can search for a GitHub
              account and can also visit that account's GitHub profile.
            </p>
            <p className="projects_tools satoshi">
              React • HTML5 • CSS3 • Bootstrap • jQuery • Tailwind CSS • Node JS
              • Daisy UI • Git • Vercel
            </p>

            <div className="card-icons">
              <Icon
                icon="uil:github-alt"
                onClick={() =>
                  window.open(
                    "https://github.com/JRPATEL47/GITHUB_FINDER",
                    "_blank"
                  )
                }
              />
              <Icon
                icon="eva:external-link-outline"
                onClick={() =>
                  window.open(
                    "https://github-finder-eta-seven.vercel.app/",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="projects_image"></div>
          <div className="projects_info">
            <h3>General Hospital</h3>
            <p className="projects_desc satoshi">
              Built project 'General Hospital' using C++. This program displays
              the necessary data such as appointments, covid patients currently
              admitted, patients in line, number of beds empty, and more. This
              program was prepared keeping Dynamic Memory Allocation in mind.
            </p>
            <p className="projects_tools satoshi">
              C++ • Object Oriented Programming • Modular Programming
            </p>

            <div className="card-icons">
              <Icon
                icon="uil:github-alt"
                onClick={() =>
                  window.open(
                    "https://github.com/JRPATEL47/GENERAL-HOSPITAL",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="blur s-blur5" style={{ background: "#ABF1FF94" }}></div>
      <div
        className="blur s-blur6"
        style={{ background: "var(--purple)" }}
      ></div>
      <div className="blur s-blur7" style={{ background: "#ABF1FF94" }}></div>
      <div
        className="blur s-blur8"
        style={{ background: "var(--purple)" }}
      ></div>
    </section>
  );
}

export default Projects;
