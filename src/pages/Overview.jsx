import Hero from "../components/Hero.jsx";
import heroImage from "../assets/images/tent-opening.jpg";

export default function Overview() {
  return (
    <header>
      <Hero
        image={heroImage}
        imageAlt="lake view from a tent opening"
        title="Projects"
        subtitle="A selection of projects exploring UX/UI Design and Frontend Development"
      />
    </header>
  );
}
