import Hero from "../components/Hero.jsx";
import { useParams } from "react-router";
import projects from "../data/projects.js";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.id === slug);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <header>
      <Hero
        image={project.detail.heroImage || project.thumbnail}
        imageAlt={
          project.detail.heroImage
            ? project.detail.heroImageAlt
            : project.thumbnailAlt
        }
        title={project.title}
      />
    </header>
  );
}
