import { Link } from "react-router";
import Hero from "../components/Hero.jsx";
import name from "../assets/images/full-name.svg";
import heroImage from "../assets/images/hero-img.jpg";
import heroStyles from "../components/Hero.module.css";
import projects from "../data/projects.js";
import PolaroidCard from "../components/PolaroidCard.jsx";
import styles from "./Home.module.css";
import projectDetailStyles from "./ProjectDetail.module.css";
import ToolItem from "../components/ToolItem.jsx";
import toolIcons, { homeTools } from "../data/toolIcons.js";

export default function Home() {
  const featuredProjects = projects
    .filter((project) => project.showOnHome)
    .sort((a, b) => a.homeOrder - b.homeOrder);

  return (
    <main className="page">
      <header>
        <Hero
          image={heroImage}
          imageAlt="A portrait of Freja Kejser in nature"
          title={
            <span
              className={heroStyles.homeNameHero}
              role="img"
              aria-label="Freja Kejser"
              style={{
                "--logo-image": `url(${name})`,
              }}
            />
          }
          subtitle="Digital Designer & Frontend Developer"
          ctaLabel="Explore my work"
          ctaHref="#projects"
        />
      </header>

      {/* FEATURED PROJECTS SECTION */}
      <section
        id="projects"
        className={`page-section ${styles.section}`}
        aria-label="Featured projects"
      >
        <div className={styles.sectionHeader}>
          <div>
            <h2>FEATURED PROJECTS</h2>
            <p className={styles.sectionSubtitle}>
              Selected work from my journey through learning UX, UI and Frontend
              development.
            </p>
          </div>
          <Link to="/overview" className={styles.seeAllLink}>
            See all
          </Link>
        </div>

        <div className={styles.projectsGrid}>
          {featuredProjects.map((project) => (
            <PolaroidCard key={project.id} project={project} size="large" />
          ))}
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section
        className={`page-section ${styles.section}`}
        aria-label="About me"
      >
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <h2>ABOUT ME</h2>
            <p>
              I am Freja Kejser, Multimedia student at Business Academy Aarhus,
              who is born and raised in Aarhus, Denmark.
            </p>
            <p>
              I love taking an idea and turning it into something real. Whether
              I'm designing in Figma or building in code, I like working through
              the details and seeing how the different parts can come together
              to create a clear and enjoyable experience.
            </p>
            <Link to="/about" className={styles.ctaButton}>
              Read more &rarr;
            </Link>
          </div>
          <PolaroidCard size="large" />
        </div>
      </section>

      {/* TOOLKIT SECTION */}
      <section
        className={`page-section ${styles.section}`}
        aria-label="Toolkit"
      >
        <div className={styles.centeredHeader}>
          <h2>TOOLKIT</h2>
        </div>
        
        <div className={projectDetailStyles.sectionContent}>
          <ul className={projectDetailStyles.toolsList}>
            {homeTools.map((tool) => (
              <ToolItem key={tool} name={tool} icon={toolIcons[tool]} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
