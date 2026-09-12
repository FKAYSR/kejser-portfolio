import Hero from "../components/Hero.jsx";
import name from "../assets/images/full-name.svg";
import heroImage from "../assets/images/hero-img.jpg";
import heroStyles from "../components/Hero.module.css";
import projects from "../data/projects.js";
import PolaroidCard from "../components/PolaroidCard.jsx";

export default function Home() {
    const featuredProjects = projects
      .filter((project) => project.showOnHome)
      .sort((a, b) => a.homeOrder - b.homeOrder);

  return (
    <main>
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

      <section id="projects" className="projects" aria-label="Featured projects">
        {featuredProjects.map((project) => (
          <PolaroidCard
            key={project.id}
            project={project}
            size="large"
          />
        ))}
      </section>
    </main>
  );
}
