import React from "react";
import "./App.css";

function App() {
  return (
    <div class="App">
      {/* start Section */}
      <div class="start">
        <img
          class="background"
          src="https://i.imgur.com/F0Rp7vF.jpeg"
          alt="background"
        />
        <div class="start-content">
          <p>
            Hi, I'm Riley Damasco—a passionate computer science and security
            student with a knack for game design.
          </p>
        </div>
      </div>

      {/* About Section */}
      <section id="about" class="section">
        <h2>About Me</h2>
        <p>
          I love working on ambitious projects, and there’s nothing quite as
          satisfying as seeing an idea evolve into a fully realized project. I
          take great pride in my work, and I’m always driven to push projects to
          their fullest potential. My approach is highly collaborative and
          idea-driven. I naturally step into leadership roles, but I make it a
          point to ensure that every team member has a voice. I believe that the
          best solutions come when diverse ideas are shared and combined. When
          I’m not immersed in coding or designing innovative projects, you’ll
          often find me rock climbing or at the gym.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" class="section">
        <h2>Projects</h2>
        <div class="projects-container">
          {/* Space Astronaut Platformer */}
          <div class="project-card">
            <img
              src="https://i.imgur.com/gzXTS2R.gif"
              alt="Space Astronaut Platformer Gameplay"
            />
            <div class="project-content">
              <h3>Space Astronaut Platformer</h3>
              <p>
                A 2D platformer game featuring an astronaut exploring space.
                Built with Unity and C#.
              </p>
              <a
                href="https://mywebspace.quinnipiac.edu/rmdamasco/200/FinalPro/"
                class="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>

          {/* LET US COOK Project Card */}
          <div class="project-card">
            <img
              src="https://i.imgur.com/O2o2EFQ.png"
              alt="LET US COOK Game Screenshot"
            />
            <div class="project-content">
              <h3>LET US COOK (Rogue-like Game)</h3>
              <p>
                <strong>Role:</strong> Software Engineer
                <br />
                <strong>Description:</strong> Worked with a team of four
                software engineers to create a 2D top-down rogue-like game.
                Owned projectile and item subsystems, including software
                architecture and UI design. Used Git for version control.
              </p>
              <a
                href="https://a-r-t.github.io/SER225-Project-Website/semesters/fall2023/teams/let-us-cook"
                class="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Enter The Gungeon Modding Project Card */}
          <div class="project-card">
            <img
              src="https://i.imgur.com/P2DO3dE.png"
              alt="Enter The Gungeon Modding Screenshot"
            />
            <div class="project-content">
              <h3>Enter The Gungeon Modding</h3>
              <p>
                <strong>Role:</strong> Open-source Software Developer
                <br />
                <strong>Description:</strong> Created two mods for the game
                Enter The Gungeon, adding new items, characters, and abilities.
                Learned how to investigate codebases with complex and sparse
                documentation. Created hand-drawn sprites for the project.
              </p>
              <a
                href="https://ellidelli.github.io/SER375ProjectsSite/projects/let_us_mod_etg"
                class="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Current Engagements Section */}
      <section id="engagements" class="section">
        <h2>Other stuff i'm doing!</h2>
        <div class="engagements-container">
          {/* Hackathon */}
          <div class="engagement-card">
            <img src="https://i.imgur.com/GcYRhsq.png" alt="Hackathon" />
            <div class="engagement-content">
              <h3>
                Vice President of Events | Quinnipiac Computing Club Hackathon
              </h3>
              <p>
                Co-coordinated hackathons for the student body, with 19 teams
                and 50 participants. Connected with sponsors to secure prizes
                for winners, including M&T Tech, UNAPEN, and Connecticut
                Manufacturing.
              </p>
            </div>
          </div>

          {/* Computing Club */}
          <div class="engagement-card">
            <img
              src="https://i.imgur.com/5WBC8le.png"
              alt="Quinnipiac Computing Club"
            />
            <div class="engagement-content">
              <h3>Quinnipiac Computing Club</h3>
              <p>
                Actively involved in organizing events, workshops, and coding
                competitions to foster a community of tech enthusiasts.
              </p>
            </div>
          </div>

          {/* Rock Climbing Club */}
          <div class="engagement-card">
            <img
              src="https://i.imgur.com/Cdq9pZU.jpeg"
              alt="Rock Climbing Club"
            />
            <div class="engagement-content">
              <h3>Club Rock Climbing </h3>
              <p>
                A passionate member of the club rock climbing team, where I enjoy
                challenging myself physically and mentally while building
                camaraderie with fellow climbers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" class="section">
        <h2>Contact</h2>
        <div class="contact-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:riley.damasco.04@gmail.com">
              riley.damasco.04@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+16313889669">(631) 388-9669</a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/riley-damasco-a50b71240/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Riley Damasco
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Riley Damasco. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
