import Hero from "../components/Hero.jsx";
import heroImage from "../assets/images/tent-opening.jpg";
import OverviewCard from "../components/OverviewCard.jsx";
import projects from "../data/projects.js"

export default function Overview() {
  const overviewProjects = projects.filter((project) => project.showOnOverview);

  return (
    <main>
      <Hero
        image={heroImage}
        imageAlt="lake view from a tent opening"
        title="Projects"
        subtitle="A selection of projects exploring UX/UI Design and Frontend Development"
      />

      <section>
        {overviewProjects.map((project) => (
          <OverviewCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}
