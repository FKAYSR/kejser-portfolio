import { useState } from "react";
import { Link, useParams } from "react-router";
import Hero from "../components/Hero.jsx";
import LinkBtn from "../components/LinkBtn.jsx";
import PolaroidCard from "../components/PolaroidCard.jsx";
import ToolItem from "../components/ToolItem.jsx";
import figmaLinkIcon from "../assets/icons/figma-link.svg?raw";
import githubLinkIcon from "../assets/icons/github-link.svg?raw";
import reportIcon from "../assets/icons/report-link.svg?raw";
import projects from "../data/projects.js";
import toolIcons from "../data/toolIcons.js";
import styles from "./ProjectDetail.module.css";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((item) => item.id === slug);

  const [currentRole, setCurrentRole] = useState(0);

  if (!project) {
    return (
      <main className={styles.notFound}>
        <p className="text-style-body-text">Project not found.</p>
      </main>
    );
  }

  const detail = project.detail;

  const currentProjectIndex = projects.findIndex(
    (item) => item.id === project.id,
  );

  const nextProject = projects[(currentProjectIndex + 1) % projects.length];

  const overviewImages = [
    detail.overview?.detailImage1,
    detail.overview?.detailImage2,
    detail.overview?.detailImage3,
  ].filter(Boolean);

  const solutionImages = [
    detail.solution?.solutionImage1,
    detail.solution?.solutionImage2,
    detail.solution?.solutionImage3,
  ].filter(Boolean);

  const roles = detail.myRole || [];
  const currentRoleData = roles[currentRole];

  const roleImages = currentRoleData
    ? [
        currentRoleData.bigImage,
        currentRoleData.image2,
        currentRoleData.image3,
      ].filter(Boolean)
    : [];

  function nextRole() {
    setCurrentRole((current) =>
      current === roles.length - 1 ? 0 : current + 1,
    );
  }

  function previousRole() {
    setCurrentRole((current) =>
      current === 0 ? roles.length - 1 : current - 1,
    );
  }

  const linkLabels = {
    live: "Visit live project",
    repository: "View repository",
    figmaPrototype: "View prototype",
    designFile: "View design file",
    report: "Read report",
  };

  return (
    <>
      <header>
        <Hero
          image={detail.heroImage || project.thumbnail}
          imageAlt={
            detail.heroImage
              ? detail.heroImageAlt || project.title
              : project.thumbnailAlt
          }
          title={project.title}
        />
      </header>

      <main className={styles.projectDetail}>
        {/* OVERVIEW */}
        <section className={`${styles.section} ${styles.overviewSection}`}>
          <div className={styles.overviewLayout}>
            <div className={styles.overviewText}>
              <h2 className={`${styles.overviewTitle} text-style-h2`}>
                OVERVIEW
              </h2>

              {project.tags?.length > 0 && (
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              )}

              {detail.overview?.description && (
                <p className="text-style-body-text">
                  {detail.overview.description}
                </p>
              )}

              {detail.overview?.description2 && (
                <p className="text-style-body-text">
                  {detail.overview.description2}
                </p>
              )}

              {detail.links?.live && (
                <LinkBtn
                  href={detail.links.live}
                  variant="external"
                  icon={githubLinkIcon}
                >
                  Visit live site
                </LinkBtn>
              )}
            </div>

            {overviewImages.length > 0 && (
              <div className={styles.overviewPolaroids}>
                <PolaroidCard
                  images={overviewImages}
                  imageAlt={`${project.title} overview`}
                  size="large"
                />
              </div>
            )}
          </div>
        </section>

        {/* THE ASSIGNMENT */}
        <section className={styles.section}>
          <div className={styles.sectionLabel}>
            <h2 className="text-style-h2">THE ASSIGNMENT</h2>
            {detail.assignment?.type && (
              <article className={styles.infoBlock}>
                <p className="text-style-body-text">{detail.assignment.type}</p>
              </article>
            )}
          </div>

          <div className={styles.sectionContent}>
            <div className={styles.assignmentLayout}>
              {detail.assignment?.problem && (
                <article className={styles.infoBlock}>
                  <h3 className="text-style-h3">Problem</h3>
                  <p className="text-style-body-text">
                    {detail.assignment.problem}
                  </p>
                </article>
              )}

              {detail.assignment?.targetAudience && (
                <article className={styles.infoBlock}>
                  <h3 className="text-style-h3">Target audience</h3>
                  <p className="text-style-body-text">
                    {detail.assignment.targetAudience}
                  </p>
                </article>
              )}
            </div>
          </div>
        </section>

        {/* OUR SOLUTION */}
        <section className={styles.section}>
          <div className={styles.solutionLayout}>
            <div className={styles.solutionText}>
              <h2 className="text-style-h2">OUR SOLUTION</h2>
              <div className={styles.solutionIntro}>
                {detail.solution?.created && (
                  <p className="text-style-body-text">
                    {detail.solution.created}
                  </p>
                )}
              </div>

              <div className={styles.solutionLists}>
              {detail.solution?.keyFeatures?.length > 0 && (
                <div className={styles.listBlock}>
                  <h3 className="text-style-h3">Key features</h3>

                  <ul>
                    {detail.solution.keyFeatures.map((feature) => (
                      <li key={feature} className="text-style-body-text">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {detail.solution?.valueCreation?.length > 0 && (
                <div className={styles.listBlock}>
                  <h3 className="text-style-h3">Value creation</h3>

                  <ul>
                    {detail.solution.valueCreation.map((value) => (
                      <li key={value} className="text-style-body-text">
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              </div>
            </div>

            {solutionImages.length > 0 && (
              <div className={styles.solutionPolaroids}>
                <PolaroidCard
                  images={solutionImages}
                  imageAlt={`${project.title} solution`}
                  size="large"
                />
              </div>
            )}
          </div>
        </section>

        {/* TOOLS */}
        {detail.toolsUsed?.length > 0 && (
          <section className={styles.section}>
            <div className={styles.sectionLabel}>
              <h2 className="text-style-h2">TOOLS I USED</h2>
            </div>

            <div className={styles.sectionContent}>
              <div className={styles.toolsList}>
                {detail.toolsUsed.map((tool) => (
                  <ToolItem key={tool} name={tool} icon={toolIcons[tool]} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* MY ROLE */}
        {roles.length > 0 && currentRoleData && (
          <section className={styles.section}>
            <div className={styles.sectionLabel}>
              <h2 className="text-style-h2">MY ROLE</h2>
            </div>

            <div className={styles.sectionContent}>
              <div className={styles.roleLayout}>
                <div className={styles.roleContent}>
                  <span className={styles.roleNumber}>
                    {String(currentRole + 1).padStart(2, "0")}
                    {" / "}
                    {String(roles.length).padStart(2, "0")}
                  </span>

                  <h2 className="text-style-h2">{currentRoleData.title}</h2>

                  <p className="text-style-body-text">{currentRoleData.text}</p>

                  {roles.length > 1 && (
                    <div className={styles.roleNavigation}>
                      <button
                        type="button"
                        onClick={previousRole}
                        className={styles.arrowButton}
                        aria-label="Previous role"
                      >
                        ←
                      </button>

                      <button
                        type="button"
                        onClick={nextRole}
                        className={styles.arrowButton}
                        aria-label="Next role"
                      >
                        →
                      </button>
                    </div>
                  )}
                </div>

                {roleImages.length > 0 && (
                  <div className={styles.rolePolaroids}>
                    <PolaroidCard
                      images={roleImages}
                      imageAlt={currentRoleData.title}
                      title={currentRoleData.title}
                      description={currentRoleData.text}
                      size="large"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* WHAT I LEARNED / IF I DID IT AGAIN */}
        {(detail.whatILearned?.length > 0 || detail.ifIDidItAgain?.length > 0) && (
          <section className={`${styles.section} ${styles.learnedSection}`}>
            {detail.whatILearned?.length > 0 && (
              <div className={styles.learnedColumn}>
                <h2 className="text-style-h2">WHAT I LEARNED</h2>

                <ul className={styles.pointList}>
                  {detail.whatILearned.map((item) => (
                    <li key={item}>
                      <p className="text-style-body-text">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {detail.ifIDidItAgain?.length > 0 && (
              <div className={styles.learnedColumn}>
                <h2 className="text-style-h2">IF I DID IT AGAIN</h2>

                <ul className={styles.pointList}>
                  {detail.ifIDidItAgain.map((item) => (
                    <li key={item}>
                      <p className="text-style-body-text">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* EXPLORE PROJECT */}
        {detail.links && Object.values(detail.links).some(Boolean) && (
          <section className={styles.section}>
            <div className={styles.sectionLabel}>
              <h2 className="text-style-h2">EXPLORE THE PROJECT</h2>
            </div>

            <div className={styles.sectionContent}>
              <div className={styles.projectLinks}>
                {Object.entries(detail.links)
                  .filter(([key, url]) => key !== "live" && url)
                  .map(([key, url]) => {
                    return (
                      <LinkBtn
                        key={key}
                        href={url}
                        variant="external"
                        icon={
                          key === "repository"
                            ? githubLinkIcon
                            : key === "figmaPrototype" || key === "designFile"
                              ? figmaLinkIcon
                              : key === "report"
                                ? reportIcon
                                : undefined
                        }
                      >
                        {linkLabels[key] || key}
                      </LinkBtn>
                    );
                  })}
              </div>
            </div>
          </section>
        )}

        {/* NEXT PROJECT */}
        {nextProject && nextProject.id !== project.id && (
          <section className={styles.nextProject}>
            <div className={styles.nextProjectContent}>
              <span className="text-style-small-text">NEXT PROJECT</span>

              <Link
                to={`/project/${nextProject.id}`}
                className={styles.nextProjectLink}
              >
                <h2 className="text-style-h2">{nextProject.title} →</h2>
              </Link>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
