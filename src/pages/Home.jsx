import Hero from "../components/Hero.jsx";
import name from "../assets/images/full-name.svg";
import heroImage from "../assets/images/hero-img.jpg";
import heroStyles from "../components/Hero.module.css";

export default function Home() {
  return (
    <>
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
        />
      </header>
    </>
  );
}
