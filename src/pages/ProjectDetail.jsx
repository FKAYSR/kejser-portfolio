import { Link, useParams } from "react-router";
import LinkBtn from "../components/LinkBtn.jsx";
import PolaroidCard from "../components/PolaroidCard.jsx";
import figmaLinkIcon from "../assets/icons/figma-link.svg?raw";
import githubLinkIcon from "../assets/icons/github-link.svg?raw";
import globeIcon from "../assets/icons/globe-link.svg?raw";
import reportIcon from "../assets/icons/report-link.svg?raw";
import projects from "../data/projects.js";
import styles from "./ProjectDetail.module.css";
import arrow from "../assets/icons/arrow-accent-middle.svg";
import { useState } from "react";

function BeforeAfterGallery({
  images,
  alt,
  className,
  currentImage,
  onImageChange,
}) {
  const normalizedImages = images.map((image) =>
    typeof image === "string" ? { src: image } : image,
  );
  const hasMultipleImages = normalizedImages.length > 1;
  const imageIndex = currentImage % normalizedImages.length;
  const image = normalizedImages[imageIndex];

  function changeImage(direction) {
    onImageChange(direction);
  }

  return (
    <div className={className}>
      <div className={styles.baGalleryImageContainer}>
        <img
          src={image.src}
          alt={image.alt || alt}
          className={styles.baImage}
          style={{ objectFit: image.objectFit || "cover" }}
        />
        {hasMultipleImages && (
          <>
            <button
              type="button"
              className={`${styles.baGalleryZone} ${styles.baGalleryZoneLeft}`}
              onClick={() => changeImage(-1)}
              aria-label="Previous image"
            />
            <button
              type="button"
              className={`${styles.baGalleryZone} ${styles.baGalleryZoneRight}`}
              onClick={() => changeImage(1)}
              aria-label="Next image"
            />
          </>
        )}
      </div>
      {hasMultipleImages && (
        <div className={styles.baGalleryDots}>
          {normalizedImages.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`${styles.dot} ${
                index === imageIndex ? styles.activeDot : ""
              }`}
              onClick={() => onImageChange(index - imageIndex)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const [beforeAfterImage, setBeforeAfterImage] = useState(0);

  const project = projects.find((item) => item.id === slug);

  if (!project) {
    return (
      <main className={`page ${styles.notFound}`}>
        <p className="text-style-body-text">Project not found.</p>
      </main>
    );
  }

  const detail = project.detail;

  const currentProjectIndex = projects.findIndex(
    (item) => item.id === project.id,
  );

  const nextProject = projects[(currentProjectIndex + 1) % projects.length];

  const solutionImages = [
    detail.solution?.solutionImage1,
    detail.solution?.solutionImage2,
    detail.solution?.solutionImage3,
    detail.solution?.solutionImage4,
    detail.solution?.solutionImage5,
  ].filter(Boolean);

  const beforeAfterImageCount = Math.max(
    detail.beforeAfter?.before?.images?.length ||
      (detail.beforeAfter?.before?.image ? 1 : 0),
    detail.beforeAfter?.after?.images?.length ||
      (detail.beforeAfter?.after?.image ? 1 : 0),
  );

  function changeBeforeAfterImage(direction) {
    if (beforeAfterImageCount === 0) return;

    setBeforeAfterImage(
      (current) =>
        (current + direction + beforeAfterImageCount) % beforeAfterImageCount,
    );
  }

  const linkLabels = {
    live: "Visit live project",
    repository: "View repository",
    figmaPrototype: "View prototype",
    designFile: "View design file",
    brandDeck: "View brand deck",
    report: "Read report",
    audit: "View audit",
  };

  const linkIcons = {
    repository: githubLinkIcon,
    figmaPrototype: figmaLinkIcon,
    designFile: figmaLinkIcon,
    audit: reportIcon,
    report: reportIcon,
    brandDeck: reportIcon,
  };

  const heroLabels = [
    ...(project.tags || []),
    project.semester,
    project.year,
  ].filter(Boolean);

  const heroImage = detail.heroImage || project.thumbnail;
  const heroImageAlt = detail.heroImage
    ? detail.heroImageAlt || project.title
    : project.thumbnailAlt;

  return (
    <>
      <header
        className={styles.heroImage}
        style={
          detail.heroImageHeight
            ? {
                height: detail.heroImageHeight,
              }
            : undefined
        }
      >
        <img
          src={heroImage}
          alt={heroImageAlt}
          style={
            detail.heroImagePosition
              ? { objectPosition: detail.heroImagePosition }
              : undefined
          }
        />
      </header>

      <main>
        {/* OVERVIEW */}
        <section className="page-section">
          <div className={`page ${styles.section}`}>
            <div className={styles.projectIntro}>
              <Link to="/overview" className={styles.backLink}>
                ← All projects
              </Link>

              {heroLabels.length > 0 && (
                <ul className={styles.tags}>
                  {heroLabels.map((label) => (
                    <li key={label}>{label}</li>
                  ))}
                </ul>
              )}

              <h1 className={styles.projectTitle}>{project.title}</h1>

              <div className={styles.introGrid}>
                <div className={styles.introMain}>
                  {detail.overview?.pitch && (
                    <p className={styles.pitch}>{detail.overview.pitch}</p>
                  )}

                  {detail.links?.live && (
                    <LinkBtn
                      href={detail.links.live}
                      variant="external"
                      icon={globeIcon}
                      className={styles.liveLinkBtn}
                    >
                      Visit live site
                    </LinkBtn>
                  )}
                </div>

                <dl className={styles.meta}>
                  {project.teamSize && (
                    <div>
                      <dt>Team</dt>
                      <dd>
                        {project.teamSize}{" "}
                        {project.teamSize === 1 ? "person" : "people"}
                      </dd>
                    </div>
                  )}

                  {project.role && (
                    <div>
                      <dt>Role</dt>
                      <dd>{project.role}</dd>
                    </div>
                  )}

                  {detail.toolsUsed?.length > 0 && (
                    <div>
                      <dt>Tools</dt>
                      <dd>
                        <ul className={styles.chips}>
                          {detail.toolsUsed.map((tool) => (
                            <li key={tool} className={styles.chip}>
                              {tool}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* THE ASSIGNMENT */}
        <section className="page-section">
          <div className={`page ${styles.section}`}>
            <div className={styles.sectionLabel}>
              <h2 className="text-style-h2">THE ASSIGNMENT</h2>
              {detail.assignment?.type && (
                <article className={styles.infoBlock}>
                  <p className="text-style-body-text">
                    {detail.assignment.type}
                  </p>
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
          </div>
        </section>

        {/* OUR SOLUTION */}
        <section className="page-section">
          <div className={`page ${styles.section}`}>
            <div className={styles.solutionLayout}>
              <div className={styles.solutionText}>
                <h2 className="text-style-h2">
                  {project.teamSize === 1 ? "MY SOLUTION" : "OUR SOLUTION"}
                </h2>
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
                      <h3 className="text-style-h3">Business potential</h3>

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
          </div>
        </section>

        {/* BEFORE & AFTER */}
        {detail.beforeAfter && (
          <section className="page-section">
            <div className={`page ${styles.section}`}>
              <div className={styles.sectionLabel}>
                <h2 className="text-style-h2">BEFORE &amp; AFTER</h2>
              </div>

              <div className={styles.sectionContent}>
                <div className={styles.beforeAfterLayout}>
                  {["before", "after"].map((side) => {
                    const data = detail.beforeAfter[side];
                    if (!data) return null;

                    return (
                      <article
                        key={side}
                        className={`${styles.baColumn} ${
                          side === "after" ? styles.baAfter : ""
                        }`}
                      >
                        <h3 className="text-style-h3">
                          {side === "before" ? "Before" : "After"}
                        </h3>

                        {(data.images?.length > 0 || data.image) && (
                          <BeforeAfterGallery
                            images={data.images || [data.image]}
                            alt={data.imageAlt || `${project.title} ${side}`}
                            className={styles.baGallery}
                            currentImage={beforeAfterImage}
                            onImageChange={changeBeforeAfterImage}
                          />
                        )}

                        {data.points?.length > 0 && (
                          <ul className={styles.baList}>
                            {data.points.map((point) => (
                              <li key={point} className="text-style-body-text">
                                {point}
                              </li>
                            ))}
                          </ul>
                        )}
                      </article>
                    );
                  })}
                </div>

                {detail.beforeAfter.metric && (
                  <p className={`${styles.baMetric} text-style-body-text`}>
                    {detail.beforeAfter.metric}
                  </p>
                )}
              </div>
            </div>
          </section>
        )}

        {/* MY ROLE */}
        {detail.myRole?.length > 0 && (
          <section className="page-section">
            <div className={`page ${styles.section}`}>
              <div className={styles.sectionLabel}>
                <h2 className="text-style-h2">MY ROLE</h2>
              </div>

              <div className={styles.sectionContent}>
                <div className={styles.roleGrid}>
                  {detail.myRole.map((role) => (
                    <article key={role.title} className={styles.infoBlock}>
                      <h3 className="text-style-h3">{role.title}</h3>
                      <p className="text-style-body-text">{role.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* WHAT I LEARNED / NEXT STEPS & REFLECTIONS */}
        {(detail.whatILearned?.length > 0 ||
          detail.nextStepReflections?.length > 0) && (
          <section className="page-section">
            <div className={`page ${styles.section} ${styles.learnedSection}`}>
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

              {detail.nextStepReflections?.length > 0 && (
                <div className={styles.learnedColumn}>
                  <h2 className="text-style-h2">
                    NEXT STEPS &amp; REFLECTIONS
                  </h2>

                  <ul className={styles.pointList}>
                    {detail.nextStepReflections.map((item) => (
                      <li key={item}>
                        <p className="text-style-body-text">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* EXPLORE PROJECT */}
        {detail.links && Object.values(detail.links).some(Boolean) && (
          <section className="page-section">
            <div className={`page ${styles.section}`}>
              <div className={styles.sectionLabel}>
                <h2 className="text-style-h2">EXPLORE THE PROJECT</h2>
              </div>

              <div className={styles.sectionContent}>
                <ul className={styles.projectLinks}>
                  {Object.entries(detail.links)
                    .filter(([key, url]) => key !== "live" && url)
                    .map(([key, url]) => {
                      return (
                        <li key={key}>
                          <LinkBtn
                            href={url}
                            variant="external"
                            icon={linkIcons[key]}
                          >
                            {linkLabels[key] || key}
                          </LinkBtn>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* NEXT PROJECT */}
        {nextProject && nextProject.id !== project.id && (
          <section className={styles.nextProject}>
            <div className={`page ${styles.nextProjectInner}`}>
              <div className={styles.nextProjectContent}>
                <span className="text-style-small-text">NEXT PROJECT</span>

                <Link
                  to={`/project/${nextProject.id}`}
                  className={styles.nextProjectLink}
                >
                  <h2 className="text-style-h2">
                    {nextProject.title}
                    <img
                      src={arrow}
                      alt=""
                      aria-hidden="true"
                      className={styles.nextProjectArrow}
                    />
                  </h2>
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
