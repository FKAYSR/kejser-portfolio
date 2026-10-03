import Hero from "../components/Hero.jsx";
import heroImage from "../assets/images/tent-opening.jpg";
import OverviewCard from "../components/OverviewCard.jsx";
import projects from "../data/projects.js";
 
export default function Overview() {
  const overviewProjects = projects.filter((project) => project.showOnOverview);
 
  return (
    <main>
      <header>
        <Hero
          image={heroImage}
          imageAlt="lake view from a tent opening"
          title="Projects"
          subtitle="A selection of projects exploring UX/UI Design and Frontend Development"
        />
      </header>
 
      <section
        className="page-section overview-page-section"
        aria-label="Project overview"
      >
        <div className="page">
          {overviewProjects.map((project) => (
            <OverviewCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}