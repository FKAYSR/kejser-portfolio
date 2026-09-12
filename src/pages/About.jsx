import PolaroidCard from "../components/PolaroidCard.jsx";
import styles from "./About.module.css";

export default function About() {
  return (
    <main className="page">
      {/* Presentation section */}
      <section className={`page-section ${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.bioGrid}>
            <div className={styles.bioText}>
              <h2>Who is FREJA KEJSER?</h2>
              <p>
                Hi! I am a Multimedia Designer from Denmark, currently studying
                at Business Academy Aarhus in my 3rd semester.
              </p>
              <p>
                People in my network often describe me as a jack of all trades
                because I love exploring new creative possibilities and learning
                new skills. I am passionate about UX, design systems and turning
                complex ideas into clear, usable experiences.
              </p>
              <p>
                I enjoy creating structure, organizing information and turning
                complex ideas into something clear and manageable. At the same
                time, I like exploring different concepts and ideas to see where
                they can lead. I also appreciate collaborating with others and
                building on each other’s strengths. I find it motivating to see
                how different perspectives can shape an idea together.
              </p>
            </div>
            <div className={styles.portraitWrapper}>
              <PolaroidCard
                title="Freja Kejser"
                description="Multimedia Design Student"
                size="large"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT section with skills and passions */}
      <section
        className={`page-section ${styles.section} ${styles.sectionAlt}`}
      >
        <div></div>
      </section>

      {/* HIDDEN TALENTS section */}
      <section
        className={`page-section ${styles.section} ${styles.sectionAlt}`}
      >
        <div className={styles.container}>
          <div className={styles.centeredHeader}>
            <h2>HIDDEN TALENTS</h2>
            <p className={styles.subtitle}>
              Skills and topics I'm currently exploring and spending my spare
              time on
            </p>
          </div>

          <div className={styles.exploringGrid}>
            <PolaroidCard
              title="Embroidery"
              description="Learning how to put my own personal touch on different items."
              size="medium"
            />
            <PolaroidCard
              title="Japanese"
              description="Continued learning of Japanese, because of interest for the culture."
              size="medium"
            />
            <PolaroidCard
              title="Notion"
              description="Structuring creative projects and creating a better overview of things."
              size="medium"
            />
          </div>
        </div>
      </section>

      {/* Experience section */}
      <section
        className={`page-section ${styles.section} ${styles.sectionAlt}`}
      >
        <div></div>
      </section>
    </main>
  );
}