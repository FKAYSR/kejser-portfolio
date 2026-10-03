import { Link } from "react-router";
import name from "../assets/icons/full-name.svg";
import heroImage from "../assets/images/me-green-shirt.jpg";
import mandalaName from "../assets/icons/mandala-freja-kejser.svg";
import mandalaInitials from "../assets/icons/mandala-initials.svg";
import projects from "../data/projects.js";
import PolaroidCard from "../components/PolaroidCard.jsx";
import styles from "./Home.module.css";
import projectDetailStyles from "./ProjectDetail.module.css";
import ToolItem from "../components/ToolItem.jsx";
import toolIcons, { homeTools } from "../data/toolIcons.js";
import LinkBtn from "../components/LinkBtn.jsx";
import FullNameMandala from "../components/MandalaGraphic.jsx";
 
export default function Home() {
  const featuredProjects = projects
    .filter((project) => project.showOnHome)
    .sort((a, b) => a.homeOrder - b.homeOrder);
 
  return (
    <main>
      {/* HERO: <header> har fuld bredde og baggrund, <section> er containeren */}
      <header className={styles.homeHero}>
        <section
          className={`page ${styles.homeHeroInner}`}
          aria-label="Introduction"
        >
          <div className={styles.homeHeroContent}>
            <h1 className={styles.homeHeroTitle}>
              <img src={name} alt="Freja Kejser" />
            </h1>
            <p className={styles.homeHeroSubtitle}>
              UX/UI Designer & Frontend Developer
            </p>
            <LinkBtn
              href="#projects"
              className={`${styles.exploreWorkButton} ${styles.homeHeroCta}`}
              arrowDirection="down"
            >
              Explore my work
            </LinkBtn>
          </div>
 
          <div className={styles.homeHeroVisual} aria-hidden="true">
            <div className={styles.polaroidWrapper}>
              <img
                className={`${styles.homeHeroMandala} ${styles.heroMandalaTopRight}`}
                src={mandalaName}
                alt=""
              />
 
              <img
                className={`${styles.homeHeroMandala} ${styles.heroMandalaBottomLeft}`}
                src={mandalaInitials}
                alt=""
              />
 
              <PolaroidCard
                images={[heroImage]}
                imageAlt="Image of Freja Kejser"
                size="large"
              />
            </div>
          </div>
        </section>
      </header>
 
      {/* FEATURED PROJECTS */}
      <section
        id="projects"
        className="page-section"
        aria-label="Featured projects"
      >
        <div className="page">
          <div className={styles.sectionHeader}>
            <div>
              <h2>FEATURED PROJECTS</h2>
              <p className={styles.sectionSubtitle}>
                Selected work from my journey through learning UX, UI and
                Frontend development.
              </p>
            </div>
            <Link to="/overview" className={styles.seeAllLink}>
              See all
            </Link>
          </div>
 
          <div className={styles.projectsGrid}>
            {featuredProjects.map((project) => (
              <PolaroidCard
                key={project.id}
                project={project}
                size="large"
                link={`/project/${project.id}`}
              />
            ))}
          </div>
        </div>
      </section>
 
      {/* ABOUT ME */}
      <section className="page-section" aria-label="About me">
        <div className="page">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <h2>ABOUT ME</h2>
              <p>
                I am Freja Kejser, Multimedia student at Business Academy
                Aarhus, who is born and raised in Aarhus, Denmark.
              </p>
              <p>
                I love taking an idea and turning it into something real.
                Whether I'm designing in Figma or building in code, I like
                working through the details and seeing how the different parts
                can come together to create a clear and enjoyable experience.
              </p>
              <LinkBtn to="/about" variant="internal">
                Read more
              </LinkBtn>
            </div>
            <FullNameMandala />
          </div>
        </div>
      </section>
 
      {/* TOOLKIT */}
      <section className="page-section" aria-label="Toolkit">
        <div className="page">
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
        </div>
      </section>
    </main>
  );
}
 
