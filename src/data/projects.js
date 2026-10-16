// IMAGES
// Mer' end Toast
import merEndToastThumb from "../assets/projects/mer-end-toast/images/fav-icon.png";
import merEndToastHero from "../assets/projects/mer-end-toast/images/expo.jpg";
import toastDefault from "../assets/projects/mer-end-toast/images/mockup-default-page.png";
import toastList from "../assets/projects/mer-end-toast/images/mockup-list-flow.png";
import toastSearch from "../assets/projects/mer-end-toast/images/mockup-search-flow.png";
import toastOn1 from "../assets/projects/mer-end-toast/images/onboarding1.png";
import toastOn2 from "../assets/projects/mer-end-toast/images/onboarding2.png";
import toastOn3 from "../assets/projects/mer-end-toast/images/onboarding3.png";
import toastVariables from "../assets/projects/mer-end-toast/images/variables-figma.png";
import toastFunctionsRated from "../assets/projects/mer-end-toast/images/functions-rated.png";

// Story Hangers
import hangerHero from "../assets/projects/story-hangers/images/hanger-hero-section.png";
import hangerLogo from "../assets/projects/story-hangers/images/hanger-logo.png";
import hangerAffinityMap from "../assets/projects/story-hangers/images/hanger-affinity-mapping.png";
import hangerFilter from "../assets/projects/story-hangers/images/hanger-filter-page.png";
import hangerFooter from "../assets/projects/story-hangers/images/hanger-footer.png";
import hangerRoot from "../assets/projects/story-hangers/images/hanger-root.png";
import hangerVariables from "../assets/projects/story-hangers/images/hanger-variables.png";

// Go Rogue
import rogueColor from "../assets/projects/go-rogue/rogue-colours.png";
import rogueBe from "../assets/projects/go-rogue/rogue-be.png";
import rogueLogoRed from "../assets/projects/go-rogue/rogue-logo-red.png";
import rogueLogoVersions from "../assets/projects/go-rogue/rogue-logo-versions.png";
import rogueHangtag from "../assets/projects/go-rogue/rogue-hangtag-mockup.jpg";
import rogueTypography from "../assets/projects/go-rogue/rogue-typography.png";
import rogueBranddeck from "../assets/projects/go-rogue/rogue-branddeck.png";
import rougeBranddeck from "../assets/projects/go-rogue/rouge-branddeck.png";
import rougeNavOri from "../assets/projects/go-rogue/rouge-nav.png";
import rougeNavNew from "../assets/projects/go-rogue/rouge-nav-new.png";
import rougeDetail from "../assets/projects/go-rogue/rouge-detail.png";
import rogueDetail from "../assets/projects/go-rogue/rogue-detail.png";
import rougePersona from "../assets/projects/go-rogue/rouge-persona.png";
import roguePersona from "../assets/projects/go-rogue/rogue-persona.png";

// Mellemrum
import mellemrumName from "../assets/projects/mellemrum/mellemrum-name.png";
import mellemrumLogo from "../assets/projects/mellemrum/mellemrum-logo.png";
import mellemrumSuccess from "../assets/projects/mellemrum/mellemrum-success.png";
import mellemrumReserve from "../assets/projects/mellemrum/mellemrum-reserve.png";
import mellemrumReserveOri from "../assets/projects/mellemrum/mellemrum-reserve-ori.png";
import mellemrumThnxReserved from "../assets/projects/mellemrum/mellemrum-thnx-reserved.png";
import mellemrumHeroOri from "../assets/projects/mellemrum/mellemrum-home-hero-ori.png";
import mellemrumHeroNew from "../assets/projects/mellemrum/mellemrum-home-hero-new.png";
import mellemrumPayment from "../assets/projects/mellemrum/mellemrum-payment-method.png";
import mellemrumRegistrationOri from "../assets/projects/mellemrum/mellemrum-registration-ori.png";
import mellemrumRegistrationNew from "../assets/projects/mellemrum/mellemrum-registration-new.png";
import mellemrumDataOri from "../assets/projects/mellemrum/mellemrum-database-ori.png";
import mellemrumDataNew from "../assets/projects/mellemrum/mellemrum-database-new.png";

const projects = [
  // MER' END TOAST
  {
    id: "mer-end-toast",
    title: "Mer' end Toast",
    thumbnail: merEndToastThumb,
    thumbnailAlt: "Mer' end Toast's booth at a school EXPO",
    tags: ["Web application", "UX/UI Design", "Design System"],
    teamSize: 2,
    semester: "3rd Semester",
    role: "UX Research, Design System",

    // Visibility
    showOnHome: true,
    homeOrder: 1,
    showOnOverview: true,

    // Short descriptions
    homeDescription: "A webapp to save money and time on making food",
    overviewDescription:
      "A web application for finding affordable recipes, comparing ingredient prices and planning grocery shopping",

    // Project detail page
    detail: {
      heroImage: merEndToastHero,
      heroImageAlt: "Mer' end Toast recipe planning app",
      heroImagePosition: "center 27%",
      heroImageHeight: "clamp(480px, 80svh, 200px)",
      links: {
        live: "https://fkaysr.github.io/webapp-mer-end-toast/",
        repository: "https://github.com/FKAYSR/webapp-mer-end-toast",
        designFile:
          "https://www.figma.com/design/zIaaBLDnY3stpeh7Hi87vU/Design-stuff?node-id=233-4203&t=fOH2DkUISm52xc71-1",
        figmaPrototype:
          "https://www.figma.com/proto/zIaaBLDnY3stpeh7Hi87vU/Design-stuff?node-id=1437-17377&viewport=203%2C135%2C0.05&t=3nsO4dxEGeFafGmU-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1437%3A17377&page-id=233%3A4196",

        report:
          "https://drive.google.com/file/d/1sxeXUF9Pvz1ZFoxMmIPyAgHiy4RwWrud/view?usp=sharing",
      },

      overview: {
        pitch:
          "Mer' end Toast combines recipe inspiration, price comparison and shopping lists in one platform.",
        description:
          "Mer' end Toast is a web application designed to make everyday cooking more affordable and manageable. The concept combines recipe inspiration, ingredient search, price comparison and shopping lists into one platform.",
        description2:
          "The project was developed as a 2-people group project taking the concept from initial ideation and research to a functional React prototype. The process included UX research, user flows, UI design, creation of a variable-based design system in Figma and frontend development with React and data management through Supabase as a Backend-as-a-Service.",
        detailImage1: toastDefault,
        detailImage2: toastFunctionsRated,
        detailImage3: "",
      },

      assignment: {
        type: "To design and develop a web application from concept to functional prototype.",
        problem:
          "Cooking in everyday life can feel time-consuming and overwhelming, particularly for people with limited time and budget. Our research showed that the main barriers were food costs, time and deciding what to cook.  Most prominent were the users wish to be able to find recipes, based on ingredients they already had at home.",
        targetAudience:
          "Students and others who want to save money on food and simplify the process of planning, cooking and grocery shopping.",
      },

      solution: {
        created:
          "We created an app that combines recipe inspiration, ingredient-based search, show where the cost is lowest and shopping lists. By bringing these functions together, the concept aims to reduce friction in the cooking process and make it easier for users to plan meals and shop within their budget.",
        keyFeatures: [
          "Discover recipes - Find inspiration based on ingredients and preferences",
          "Compare prices - See where ingredients can be bought most affordably",
          "Build shopping lists - Add ingredients directly from recipes to a categorised shopping-list",
          "Personalize - Set preferences and allergies during onboarding",
          "Save favorites - Save recipes for later",
        ],
        valueCreation: [
          "Less friction in the cooking process",
          "Easier meal planning and making shopping lists",
          "Better overview of food expenses",
          "Less cognitive load during the daily cooking process",
        ],
        solutionImage1: toastList,
        solutionImage2: toastSearch,
        solutionImage3: "",
      },

      myRole: [
        {
          title: "Onboarding",
          text: "Designed and built the onboarding flow, featuring custom Jitter micro-animations integrated directly into the React prototype",
          bigImage: toastOn1,
          image2: toastOn2,
          image3: toastOn3,
        },
        {
          title: "Figma Design System",
          text: "Set up a variable-based design system with semantic variables connected to the Mapped collection",
          bigImage: toastVariables,
          image2: "",
          image3: "",
        },
        {
          title: "Frontend Development",
          text: "Developed the product grid and card component to use across multiple pages",
          bigImage: "",
          image2: "",
          image3: "",
        },
        {
          title: "Deployment",
          text: "Troubleshooted and resolved deployment issues",
          bigImage: "",
          image2: "",
          image3: "",
        },
      ],

      toolsUsed: ["Figma", "GitHub", "Supabase", "React", "Lottie"],

      whatILearned: [
        "Testing about onboarding requires neutral test participants who don't know anything about the app beforehand.",
        "Debugging requires critical thinking.",
        "Consistent data structures are essential when multiple developers work with the same database.",
        "My biggest takeaway is I learned how important it is to understand how different parts of a webapp depend on each other.",
      ],

      nextStepReflections: [
        "I would improve the Supabase database structure and data fetching to make the search function fully functional.",
        "I would approach the data setup differently by agreeing early on a clear data structure and avoid changes during development.",
        "In further development, I would complete the search function and allergy feature.",
      ],

      teamFeedback: "",
    },
  },

  // Go Rogue
  {
    id: "go-rogue",
    title: "Go Rogue",
    thumbnail: {
      src: rogueLogoRed,
      objectFit: "contain",
    },
    thumbnailAlt: "Logo of Go Rogue, subbrand to La Rouge",
    tags: ["Optimisation", "Recommerce", "Subbranding"],
    teamSize: 3,
    semester: "3rd Semester",
    year: 2026,
    role: "Design System, Concept Development",

    // Visibility
    showOnHome: true,
    homeOrder: 3,
    showOnOverview: true,

    // Short descriptions
    homeDescription:
      "Execution of a concept, subbrand and user interface for La Rouge’s new and optimised re-commerce effort.",
    overviewDescription:
      "Execution of a concept, subbrand and user interface for La Rouge’s new and optimised re-commerce effort.",

    // Project detail page
    detail: {
      heroImage: rogueBe,
      heroImageAlt: "",
      heroImagePosition: "center 45%",

      toolsUsed: ["Figma"],

      links: {
        figmaPrototype:
          "https://www.figma.com/proto/xJ147c7hA2Vpd1IKHds3Sg/La-Rouge---Go-Rogue?node-id=139-1495&p=f&viewport=25%2C116%2C0.09&t=kUT7eJuY8fWYBwpJ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=139%3A1495&page-id=139%3A1494",
        designFile:
          "https://www.figma.com/design/xJ147c7hA2Vpd1IKHds3Sg/La-Rouge---Go-Rogue?node-id=1258-14783&t=0VD10BFPtjS8ICyn-1",
      },

      overview: {
        pitch:
          "Go Rogue is a subbrand that gives La Rouge's re-commerce initiative its own identity, voice and digital presence.",
      },

      assignment: {
        type: "To develop a concept for an independent subbrand under La Rouge, that can give the re-commerce initiative its own life, voice and digital presence. The subbrand should be able to stand alone but also draw from La Rouge’s DNA of timelessness, quality and responsibility.",
        problem:
          "Today, La Rouge's re-commerce initiative lives in the shadow of the main brand, without its own visual identity, tone of voice or dedicated communication effort. This means the concept is far from reaching its full potential.",
        targetAudience:
          "La Rouge's existing customers, who value timeless quality and a brand they can trust, and a wider audience of second-hand shoppers who want to buy quality pieces at a better price and pass on their own clothes with confidence.",
      },

      solution: {
        created:
          "We created Go Rogue as a branded house for La Rouge's re-commerce initiative. Inspired by La Rouge's own storytelling, we drew on their mother-daughter story and positioned Go Rogue as the daughter brand.",
        keyFeatures: [
          "Wordplay - Go Rogue plays on La Rouge's name by swapping the U and the G, so the link is clear while the subbrand still stands on its own",
          "Hangtag with QR code - A hangtag concept that customers can scan to add their physical purchases to the online platform",
          "New story - A new perspective on La Rouge's story about their timeless pieces",
          "Visibility - A more prominent button and an identity of its own makes it more clear that you can pass on your used clothes to someone new",
        ],
        valueCreation: [
          "Gives La Rouge's re-commerce its own universe and voice",
          "Expands the target audience to include more price-conscious customers",
          "Adds a more youthful tone, so the platform does not put younger customers off",
        ],
        solutionImage1: { src: rogueLogoVersions, objectFit: "contain" },
        solutionImage2: rogueHangtag,
        solutionImage3: { src: rogueTypography, objectFit: "contain" },
        solutionImage4: { src: rogueColor, objectFit: "contain" },
      },

      beforeAfter: {
        before: {
          images: [
            {
              src: rougeBranddeck,
              objectFit: "contain",
              alt: "Branddeck based on La Rouge",
            },
            {
              src: rougeNavOri,
              objectFit: "contain",
              alt: "La Rouge's navbar",
            },
            {
              src: rougeDetail,
              objectFit: "contain",
              alt: "One of La Rouge's detailpages",
            },
            {
              src: rougePersona,
              objectFit: "contain",
              alt: "La Rouge persona",
            },
          ],
          imageAlt: "Original brand material",
          points: [
            "Re-commerce lived in the shadows of the main brand",
            "Very few users knew how to send clothes back to La Rouge for re-use",
            "No visual identity or tone of voice of its own",
            "Designed for one audience: La Rouge's existing customer",
          ],
        },
        after: {
          images: [
            {
              src: rogueBranddeck,
              objectFit: "contain",
              alt: "Go Rogue's branddeck",
            },
            {
              src: rougeNavNew,
              objectFit: "contain",
              alt: "Go Rouge's navbar",
            },
            {
              src: rogueDetail,
              objectFit: "contain",
              alt: "One of Go Rouge's detailpages",
            },
            {
              src: roguePersona,
              objectFit: "contain",
              alt: "Go Rogue persona",
            },
          ],
          imageAlt: "New brand material",
          points: [
            "Its own identity and name, which makes re-commerce easier to notice",
            "A more clear flow that is more intuitive for the user",
            "A new way to add physical purchases to the online platform with a QR code",
            "A second persona added for second-hand shoppers, so the subbrand reaches a new audience",
          ],
        },

        metric:
          "Validation: We presented Go Rogue to La Rouge on the pitch day. The prototype has not been tested with users, so the improvements are assessed against our personas, not measured.",
      },

      myRole: [
        {
          title: "Design System & Visual Identity",
          text: "I worked on the project's design system, defining typography and color palettes to ensure visual consistency across the prototype.",
          bigImage: "",
          image2: "",
          image3: "",
        },
        {
          title: "UI Design & Detail Pages",
          text: "I was responsible for designing the Project Detail page layout and the 404 page",
          bigImage: "",
          image2: "",
          image3: "",
        },
        {
          title: "Component Building & Prototyping",
          text: "Collaborated on building interactive Figma components and micro-interactions to refine the overall digital prototype.",
          bigImage: "",
          image2: "",
          image3: "",
        },
      ],

      whatILearned: [
        "Creating a subbrand that has to stand alone but still feel like the original brand is a delicate balance",
        "Exploring more than one visual direction before choosing made the process more interesting and made the final choice easier to argue for",
        "Reusing default icons and other components from earlier projects can save a lot of time",
        "My biggest takeaway is that changing visual direction mid-progress does not have to be as scary as it sounds",
      ],

      nextStepReflections: [
        "I would test the prototype with real users from both target groups",
        "I would run some user interviews, so the personas rest on feedback and not only on assumptions",
        "I would test whether the hangtag and QR code concept feels natural to someone who has never seen it",
        "I would develop the hangtag and QR code idea further, for example how a scan connects to a customers profile",
      ],
    },
  },

  // MELLEMRUM
  {
    id: "mellemrum",
    title: "Mellemrum",
    thumbnail: mellemrumLogo,
    thumbnailAlt: "Mellemrum logo",
    tags: ["Optimisation", "Webapp", "Accessibility"],
    teamSize: 1,
    semester: "3rd Semester",
    year: 2026,
    role: "Technical audit, Frontend, Database",

    // Visibility
    showOnHome: true,
    homeOrder: 2,
    showOnOverview: true,

    // Short descriptions
    homeDescription:
      "A React prototype optimized with focus on database normalization, UI-states and increased accessibility",
    overviewDescription:
      "A React prototype optimized with focus on database normalization, UI-states and increased accessibility",

    // Project detail page
    detail: {
      heroImage: mellemrumName,
      heroImageAlt: "Mellemrum",

      toolsUsed: ["React", "Supabase", "JavaScript", "CSS", "Lottie", "GitHub"],

      links: {
        live: "https://fkaysr.github.io/case1-optimization/",
        repository: "https://github.com/FKAYSR/case1-optimization",
        audit:
          "https://private-apogee-a72.notion.site/3c85785bc37080c8aafac0a4bf963939?v=3cf5785bc370809bb791000cf28164ec",
      },

      overview: {
        pitch:
          "Mellemrum is a fictive local culture and event platform for Aarhus. I made the React prototype more robust, accessible and easier to maintain.",
      },

      assignment: {
        type: "To optimize and refactor an existing React web application by prioritising the most important problems and improving them.",
        problem:
          "The prototype had a redundant data model, missing UI-states, insufficient navigation, the mobile experience fell short and the code was hard to develop further.",
        targetAudience:
          "Citizens of Aarhus who want a simple way to find and sign up for local cultural events. Organisers are a secondary audience.",
      },

      solution: {
        created:
          "I documented 30 issues in a technical audit and prioritised them by effect, risk, maintainability and the time I had. I fixed 19 of them, starting with the five high-priority issues: registrations were not saved, venue names were repeated across tables, e-mail addresses were publicly visible, the register button could submit twice and the e-mail field had no label.",
        keyFeatures: [
          "Relational data model - Split data from two to three tables to remove redundancy and secure data integrity",
          "Dynamic payment logic - Conditional display of MobilePay-button, “Pay at the event” or default no button based on event data",
          "Registration flow - Submitting a registration form saves the registration directly to Supabase, updates the public list and triggers a dynamic success state with personalized confirmation text and an option to register a friend as well",
          "Accessibility - Restructured heading hierarchy, semantic HTML tags and form-label at the registration page so screen readers can accurately read the content",
        ],
        valueCreation: [
          "Data is updated in one place, which lowers maintenance effort and makes the platform easier to develop further",
          "No longer showing users e-mail addresses publicly reduces the risk of a GDPR breach",
          "Instant visual feedback and continuous registration flow should make sign-up easier to complete",
          "Increased Accesibility by using proper HTML-semantics to make the text easier to understand for screen readers",
        ],

        solutionImage1: { src: mellemrumPayment, objectFit: "contain" },
        solutionImage2: { src: mellemrumReserve, objectFit: "contain" },
        solutionImage3: { src: mellemrumSuccess, objectFit: "contain" },
      },

      beforeAfter: {
        before: {
          images: [
            { src: mellemrumHeroOri, objectFit: "contain" },
            { src: mellemrumDataOri, objectFit: "contain" },
            { src: mellemrumRegistrationOri, objectFit: "contain" },
            { src: mellemrumReserveOri, objectFit: "contain" },
          ],
          imageAlt: "",
          points: [
            "Spacing was way to small, whivh decreased the overall readability of the site",
            "Multiple venue names were used across one table",
            "E-mail addresses were visible to everyone",
            "Registrations were not saved in the database and there were no clear success state",
          ],
        },
        after: {
          images: [
            { src: mellemrumHeroNew, objectFit: "contain" },
            { src: mellemrumDataNew, objectFit: "contain" },
            { src: mellemrumRegistrationNew, objectFit: "contain" },
            { src: mellemrumThnxReserved, objectFit: "contain" },
          ],
          imageAlt: "",
          points: [
            "Better readability by increased spacing",
            "Tables have relations and all venue info is in its own table",
            "E-mail addresses are hidden",
            "Registrations are saved in the database and can be seen at 'Se tilmeldinger' and there is a clear success state",
          ],
        },
        metric:
          "Verification: I tested the registration flow from the form to Supabase and back to the public list. The improvements have not been measured with real users.",
      },

      whatILearned: [
        "Database normalisation prevents inconsistent data and makes a project easier to maintain over time",
        "Handling derived state and conditional rendering in React when data arrives asynchronously from Supabase",
        "I learned the importance of prioritizing the most critical blocks for the user over simply adding new features",
        "My biggest takeaway is an insight into the issues I could meet in future collaborative projects when taking over someone else's code",
      ],

      nextStepReflections: [
        "I would manage my time better by balancing quick UI fixes against more time-consuming tasks",
        "I would approach other people more to bounce ideas off about possible optimisations",
        "In further development I would work through the remaining items from my technical audit",
      ],
    },
  },

  // STORY HANGERS
  {
    id: "story-hangers",
    title: "Story Hangers",
    thumbnail: hangerHero,
    thumbnailAlt: "Hero section of webshop Story Hangers",
    tags: [
      "Customer Experience",
      "Webshop",
      "Brand experience",
      "UX/UI Design",
    ],
    teamSize: 3,

    // Visibility
    showOnHome: false,
    homeOrder: 3,
    showOnOverview: true,

    // Short descriptions
    homeDescription: "E-commerce, vintage reuse clothes shop",
    overviewDescription:
      "A premium secondhand fashion webshop, focused on creating a trustworthy, inclusive and inspiring online shopping experience",

    // Project detail page
    detail: {
      heroImage: hangerHero,
      heroImageAlt: "Hero section of webshop Story Hangers",
      heroImagePosition: "",
      heroImageHeight: "",
      links: {
        live: "https://juliewboecher.github.io/customer-experience-exam/",
        repository: "https://github.com/juliewboecher/customer-experience-exam",
        designFile:
          "https://www.figma.com/design/ry3SWKjxsmnVtiojCvEkmU/Story-Hangers-Eksamensprojekt?node-id=198-17&t=cQNl2qPLqwTkZ7SO-1",
        figmaPrototype:
          "https://www.figma.com/proto/ry3SWKjxsmnVtiojCvEkmU/Story-Hangers-Eksamensprojekt?node-id=828-1679&viewport=-3216%2C-541%2C0.18&t=PwmM5OylXB9RxMgx-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=828%3A1679&page-id=1103%3A4106",
        report:
          "https://docs.google.com/document/d/1_5hdSgq_ktAzklkl8htvJVVapUCflwM4t4e3O21gmJM/edit?usp=sharing",
      },

      overview: {
        pitch: "",
        description:
          "Story Hangers is a webshop designed to sell premium secondhand clothes. With the webshop we hope to portray a reliable, inclusive and inspiring picture, so the users can shop secondhand without any worries.",
        description2:
          "The project was developed as a group project taking the concept from initial ideation and research to a functional React prototype. During the process we came across UX research, UI design, Brand design, creation of a variable-based design system in Figma and Frontend Development with React.",
        detailImage1: hangerLogo,
        detailImage2: hangerAffinityMap,
        detailImage3: "",
      },

      assignment: {
        type: "To design and develop a webshop for a fictive clothes-retailer from concept to functional prototype.",
        problem:
          "Shopping secondhand and especially premium secondhand clothes online can feel very intimidating and daunting. Through our research we found that the biggest concerns were about the clothes condition and if the clothes would fit properly as well as concerns about sustainability.",
        targetAudience:
          "Women in the age gap 18 to 35 who lives in Denmark and who wants to or already does shop secondhand either in-person or online.",
      },

      solution: {
        created:
          "We created a webshop that makes online vintage shopping more reliable",
        keyFeatures: [
          "Product discovery - Browse products through a structured category system and search functionality",
          "Product filtering - Filter products by relevant criteria such as size, condition, color, price and availability",
          "Product information - Access relevant details about each secondhand item before purchasing",
          "Favorites and shopping cart - Saving products to favorites and adding to a cart that shows the carts total price",
        ],
        valueCreation: [
          "Fewer concerns about shopping premium secondhand clothes online",
          "A unique brand experience that makes secondhand shopping feel premium and inspiring",
          "Less uncertainty around accessing items",
        ],
      },

      myRole: [
        {
          title: "Figma variables",
          text: "Set up the spacing, sizing, radius and stroke variables across the Brand, Alias and Mapped collections in Figma",
          bigImage: hangerRoot,
          image2: hangerVariables,
          image3: "",
        },
        {
          title: "Frontend development",
          text: "Developed the filtering logic for the product catalogue",
          bigImage: hangerFilter,
          image2: "",
          image3: "",
        },
        {
          title: "UI and interaction",
          text: "Designed and implemented the interactive newsletter footer in Figma and React with email validation and success feedback",
          bigImage: hangerFooter,
          image2: "",
          image3: "",
        },
      ],

      toolsUsed: ["Figma", "HTML", "CSS", "JavaScript", "GitHub", "React"],

      whatILearned: [
        "Designing a strong brand identity while keeping the interface user-focused and intuitive.",
        "Building reusable design tokens in Figma and translating them into CSS variables for development.",
        "Not defining the target audience precisely enough in the beginning, can  lead to confusion within the team and misconceptions during the design process.",
        "My biggest takeaway was learning how much research that goes into creating just one webshop.",
      ],

      nextStepReflections: [
        "I would improve the initial target group definition to make the design process and team decisions more clear.",
        "I would approach testing earlier and identify usability issues before developing the final project.",
        "If we developed the project further, I would focus on completing the coded version of the webshop and refining the core functions.",
      ],

      teamFeedback: "",
    },
  },
];

export default projects;

/* Template
========================================
NEW PROJECT TEMPLATE
========================================
{
  id: "",
  title: "",
  thumbnail: "",
  thumbnailAlt: "",
  tags: [],
  teamSize: 1,
  semester: "",
  year: 2026,
  role: "",

  // Visibility
  showOnHome: false,
  homeOrder: 1,
  showOnOverview: true,

  // Short descriptions
  homeDescription: "",
  overviewDescription: "",

  // Project detail page
  detail: {
    heroImage: "",
    heroImageAlt: "",
    heroImagePosition: "center 30%",
    heroImageHeight: "clamp(320px, 55svh, 600px)",

    links: {
      live: "",
      repository: "",
      designFile: "",
      figmaPrototype: "",
    },

    overview: {
      pitch: "",
    },

    assignment: {
      type: "",
      problem: "",
      targetAudience: "",
    },

    solution: {
      created: "",
      keyFeatures: [],
      valueCreation: [],
      solutionImage1: "",
      solutionImage2: "",
      solutionImage3: "",
    },

    beforeAfter: {
        before: {
          image: "",
          imageAlt: "",
          points: ["What the problem was", "Pain point from testing"],
        },
        after: {
          image: "",
          imageAlt: "",
          points: ["What we changed", "Result or expected metric"],
        },
      },

    myRole: [
    {
        title: "",
        text: "",
        bigImage: "",
        image2: "",
        image3: "",
    },
    {
        title: "",
        text: "",
        bigImage: "",
        image2: "",
        image3: "",
    },
    {
        title: "",
        text: "",
        bigImage: "",
        image2: "",
        image3: "",
    },
    ],

    toolsUsed: [],

    whatILearned: [],

    nextStepReflections: [],

    teamFeedback: "",
  },
},
*/