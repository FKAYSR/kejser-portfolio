// Images
import merEndToastThumb from "../assets/projects/mer-end-toast/images/fav-icon.png";
import merEndToastHero from "../assets/projects/mer-end-toast/images/expo.jpg";

const projects = [
  // Mer end Toast
  {
    id: "mer-end-toast",
    title: "Mer' end Toast",
    thumbnail: merEndToastThumb,
    thumbnailAlt: "Screenshot of the Mer' end Toast recipe planning app",
    tags: ["UX/UI Design", "React", "Supabase", "Design System"],

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
      links: {
        live: "https://fkaysr.github.io/webapp-mer-end-toast/hjem",
        repository: "https://github.com/FKAYSR/webapp-mer-end-toast",
        figmaPrototype:
          "https://www.figma.com/proto/zIaaBLDnY3stpeh7Hi87vU/Design-stuff?node-id=1437-17377&viewport=203%2C135%2C0.05&t=3nsO4dxEGeFafGmU-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1437%3A17377&page-id=233%3A4196",
        designFile:
          "https://www.figma.com/design/zIaaBLDnY3stpeh7Hi87vU/Design-stuff?node-id=233-4203&t=fOH2DkUISm52xc71-1",
        report:
          "https://drive.google.com/file/d/1sxeXUF9Pvz1ZFoxMmIPyAgHiy4RwWrud/view?usp=sharing",
      },

      overview: {
        description:
          "Mer' end Toast is a web application designed to make everyday cooking more affordable and manageable. The concept combines recipe inspiration, ingredient search, price comparison and shopping lists into one platform.",
        description2:
          "The project was developed as a group project taking the concept from initial ideation and research to a functional React prototype. The process included UX research, user flows, UI design, creation of a variable-based design system in Figma and frontend development with React and data management through Supabase as a Backend-as-a-Service.",
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
          "Discover recipes - Find inspiration based on ingredients and preferences.",
          "Compare prices - See where ingredients can be bought most affordably.",
          "Build shopping lists - Add ingredients directly from recipes to a categorised shopping list.",
          "Personalize - Set preferences and allergies during onboarding.",
          "Save favorites - Save recipes for later.",
        ],
        valueCreation: [
          "Less friction in the cooking process",
          "Easier meal planning and making shopping lists",
          "Better overview of food expenses",
          "Less cognitive load during the daily cooking process",
        ],
      },

      myRole: [
        {
          title: "Figma Design System",
          text: "Set up a variable-based design system with semantic variables connected to the Mapped collection",
          bigImage: "",
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

      toolsUsed: ["Design", "Development", "Data", "Deployment", "Animation"],

      whatILearned: [
        "Testing about onboarding requires neutral test participants who don't know anything about the app beforehand.",
        "Debugging requires critical thinking.",
        "Consistent data structures are essential when multiple developers work with the same database.",
        "My biggest takeaway is I learned how important it is to understand how different parts of a webapp depend on each other.",
      ],

      ifIDidItAgain: [
        "I would improve the Supabase database structure and data fetching to make the search function fully functional.",
        "I would approach the data setup differently by agreeing early on a clear data structure and avoid changes during development.",
        "In further development, I would complete the search function and allergy feature.",
      ],

      teamFeedback: "",
    },
  },

  // Mellemrum
  {
    id: "mellemrum",
    title: "Mellemrum",
    thumbnail: "",
    thumbnailAlt: "",
    tags: ["Optimization", "Webapp", "Accessibility", "Frontend Development"],

    // Visibility
    showOnHome: true,
    homeOrder: 1,
    showOnOverview: true,

    // Short descriptions
    homeDescription:
      "Optimized web application with focus on database normalization, UI-states and increased accessibility",
    overviewDescription:
      "A React-prototype optimized with focus on database normalization, UI-states and increased accessibility",

    // Project detail page
    detail: {
      heroImage: "",
      heroImageAlt: "",
      links: {
        live: "https://fkaysr.github.io/case1-optimization/",
        repository: "https://github.com/FKAYSR/case1-optimization",
        designFile: "",
        figmaPrototype: "",
      },

      overview: {
        description:
          "The webapp Mellemrum was developed to provide citizens of Aarhus with a simple way to discover and sign up for local cultural events.",
        description2:
          "It was an individual school project about product optimization with focus on refactoring an existing React-prototype. The process began by making a technical audit and henceforth optimizing  the app accordingly. With basis in the audit I optimized the accessibility, usability, UI-consistency and performance.",
      },

      assignment: {
        type: "To optimize and refactor an existing React web application.",
        problem:
          "The prototype had a redundant data model, missing UI-states, insufficient navigation and fell short with the mobile experience.",
        targetAudience:
          "Citizens of Aarhus who seek cultural experiences nearby.",
      },

      solution: {
        created:
          "A stable and accessible React solution with a relational database structure, dynamic conditional rendering of payment and enhanced performance.",
        keyFeatures: [
          "Relational data model - Split data from two to three tables to remove redundancy and secure data integrity",
          "Dynamic payment logic - Conditional display of MobilePay-button, “Pay at the event” or default no button based on event data",
          "Interactive registration flow - Submitting a registration form saves the registration directly to Supabase, updates the public list and triggers a dynamic success state with personalized confirmation text and an option to register a friend as well",
          "Accessibility - Restructured heading hierarchy, semantic HTML tags and form-label at the registration page so screen readers can accurately read the content",
        ],
        valueCreation: [
          "Reduced maintenance - Data only has to be updated at one place in the database to affect all relevant places across the platform",
          "Higher completion rate - Instant visual feedback via the custom success animation and continuous registration flow 'Vil du tilføje en ven?' keeps users engaged",
          "Increased Accesibility(A11y) - Proper HTML-semantics to make the text easier to understand for users of screen reader",
        ],
      },

      myRole: [
        {
          title: "",
          text: "Executed a technical audit and identified 18+ optimization points across the code and the database",
          bigImage: "",
          image2: "",
          image3: "",
        },
        {
          title: "",
          text: "Restructured the given Supabase-database with a relational model to reduce redundancy",
          bigImage: "",
          image2: "",
          image3: "",
        },
        {
          title: "",
          text: "Dynamic conditional rendering of paying logic",
          bigImage: "",
          image2: "",
          image3: "",
        },
        {
          title: "",
          text: "Dynamic rendering of registrations success",
          bigImage: "",
          image2: "",
          image3: "",
        },
      ],

      toolsUsed: [
        "React",
        "Supabase",
        "CSS",
        "Lottie/Jitter",
        "GitHub",
        "HTML",
        "JavaScript",
      ],

      whatILearned: [
        "The value of database normalization to prevent data inconsistency and ease the long term project management",
        "Handling derived state and conditional showing in React based on asynchronous data from Supabase",
        "I learned the importance of prioritizing the most critical blocks for the user over simply adding new features",
        "My biggest takeaway were the insight of possible issues i could encounter in future collaborative projects",
      ],

      ifIDidItAgain: [
        "I would improve my time management by balancing quick UI fixes against more time consuming tasks",
        "I would approach other people more to bounce of ideas about possible optimizations",
        "In further development I would implement the remaining items from my technical audit list",
      ],

      teamFeedback: "",
    },
  },

  // Story Hangers
  {
    id: "story-hangers",
    title: "Story Hangers",
    thumbnail: "",
    thumbnailAlt: "",
    tags: [
      "Customer Experience",
      "Webshop",
      "Brand experience",
      "UX/UI Design",
    ],

    // Visibility
    showOnHome: true,
    homeOrder: 1,
    showOnOverview: true,

    // Short descriptions
    homeDescription: "E-commerce, vintage reuse clothes shop",
    overviewDescription:
      "A premium secondhand fashion webshop, focused on creating a trustworthy, inclusive and inspiring online shopping experience",

    // Project detail page
    detail: {
      heroImage: "",
      heroImageAlt: "",
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
        description:
          "Story Hangers is a webshop designed to sell premium secondhand clothes. With the webshop we hope to portray a reliable, inclusive and inspiring picture, so the users can shop secondhand without any worries.",
        description2:
          "The project was developed as a group project taking the concept from initial ideation and research to a functional React prototype. During the process we came across UX research, UI design, Brand design, creation of a variable-based design system in Figma and Frontend Development with React.",
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
          bigImage: "",
          image2: "",
          image3: "",
        },
        {
          title: "Frontend development",
          text: "Developed the filtering logic for the product catalogue",
          bigImage: "",
          image2: "",
          image3: "",
        },
        {
          title: "UI and interaction",
          text: "Designed and implemented the interactive newsletter footer in Figma and React with email validation and success feedback",
          bigImage: "",
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

      ifIDidItAgain: [
        "I would improve the initial target group definition to make the design process and team decisions more clear.",
        "I would approach testing earlier and identify usability issues before developing the final project.",
        "If we developed the project further, I would focus on completing the coded version of the webshop and refining the core functions.",
      ],

      teamFeedback: "",
    },
  },
];

export default projects;

/* 
========================================
NEW PROJECT TEMPLATE
========================================
{
  id: "",
  title: "",
  thumbnail: "",
  thumbnailAlt: "",
  tags: [],

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
    links: {
    live: "",
    repository: "",
    designFile: "",
    figmaPrototype: "",
    },

    overview: {
      description: "",
      description2: "",
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

    ifIDidItAgain: [],

    teamFeedback: "",
  },
},
*/