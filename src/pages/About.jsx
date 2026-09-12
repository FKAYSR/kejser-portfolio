import PolaroidCard from "../components/PolaroidCard.jsx";
import styles from "./About.module.css";
import LinkBtn from "../components/LinkBtn.jsx";
import whDo from "../assets/icons/wh-do.svg";
import whEnjoy from "../assets/icons/wh-enjoy.svg";
import whLearning from "../assets/icons/wh-learning.svg";
import whUse from "../assets/icons/wh-use.svg";

export default function About() {
  const skillsBoxes = [
    {
      title: "WHAT I USE",
      icon: whUse,
      items: ["Figma", "HTML & CSS", "JavaScript & React", "VS Code", "GitHub"],
    },
    {
      title: "WHAT I CAN DO",
      icon: whDo,
      items: [
        "UI & UX Design",
        "Frontend Development",
        "Design Systems",
        "Prototyping",
      ],
    },
    {
      title: "WHAT I ENJOY",
      icon: whEnjoy,
      items: [
        "Micro-interactions",
        "Structured Workflows",
        "Hiking & Nature",
        "Creative Problem Solving",
      ],
    },
    {
      title: "WHAT I AM LEARNING",
      icon: whLearning,
      items: [
        "Accessibility (WCAG)",
        "Advanced React States",
        "Database Normalization",
      ],
    },
  ];

  const timelineData = [
    {
      period: "2025 - NOW",
      title: "Multimedia Design",
      subtitle: "Business Academy Aarhus",
      description:
        "Education with focus on UX design, UI-prototyping in Figma, Accessibility and modern frontend-development with React.",
    },
    {
      period: "2023",
      title: "Volunteer Teacher",
      subtitle: "Bagamoyo, Tanzania",
      description:
        "Taught English and Math to 4th-6th grade students. Developed strong intercultural communication skills, adaptability, and gained experience in structuring engaging lesson plans.",
    },
    {
      period: "2020 - 2023",
      title: "Student NGO Board Member & Chair",
      subtitle: "Egaa Gymnasium",
      description:
        "Served as Vice Chair and later Chair for the school's student-led NGO called RANI. Coordinated annual fundraising initiatives, managing student workdays to support community projects in Tanzania.",
    },
    {
      period: "2022",
      title: "Red Cross High School Ambassador",
      subtitle: "Egaa Gymnasium",
      description:
        "Represented a Red Cross campaign at Egaa Gymnasium. Co-hosted a school-wide presentation to drive student awareness and engagement for the national Red Cross high-school fundraiser.",
    },
    {
      period: "2020 - 2023",
      title: "General Upper Secondary Education (STX)",
      subtitle: "Egaa Gymnasium",
      description:
        "High school diploma with specialized focus on English and Music. Built a strong foundation in collaborative project work, critical thinking, and creative expression.",
    },
  ];

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
              <PolaroidCard images={[]} title="" size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT section with skills and passions */}
      <section className={`page-section ${styles.section}`}>
        <div className={styles.skillsGrid}>
          {skillsBoxes.map((box, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.cardHeader}>
                <img
                  src={box.icon}
                  alt=""
                  className={styles.cardIcon}
                  aria-hidden="true"
                />
                <h3>{box.title}</h3>
              </div>
              <ul>
                {box.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* HIDDEN TALENTS section */}
      <section className={`page-section ${styles.section}`}>
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
      <section className={`page-section ${styles.timelineSection}`}>
        <div className={styles.timelineContainer}>
          <div className={styles.timelineHeader}>
            <h2>Education & Experience</h2>
          </div>

          {/* Timeline */}
          <div className={styles.timelineWrapper}>
            <ul className={styles.timelineList}>
              {timelineData.map((item, index) => (
                <li key={index} className={styles.timelineItem}>
                  <div className={styles.timelinePeriod}>{item.period}</div>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <h3>{item.title}</h3>
                    <span className={styles.timelineSubtitle}>
                      {item.subtitle}
                    </span>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CV Download button */}
        <div className={styles.cvContainer}>
          <LinkBtn
            href="/freja-kejser-cv.pdf"
            variant="external"
            target="_blank"
            className={styles.cvButton}
          >
            Download full CV (PDF)
          </LinkBtn>
        </div>
      </section>
    </main>
  );
}
