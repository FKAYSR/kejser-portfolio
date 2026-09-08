// Images
import merEndToastThumb from "../assets/projects/mer-end-toast/images/fav-icon.png";

const projects = [
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
    homeDescription: "",
    overviewDescription:
      "A web application for finding affordable recipes, comparing ingredient prices and planning grocery shopping.",

    // Project detail page
    detail: {
      heroImage: "",
      heroImageAlt: "Mer' end Toast recipe planning app",
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

      toolsUsed: [],

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

      whatILearned: ["", "", ""],

      ifIDidItAgain: ["", "", ""],

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

    toolsUsed: [],

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

    whatILearned: [
    "",
    "",
    "",
    ],

    ifIDidItAgain: [
    "",
    "",
    "",
    ],

    teamFeedback: "",
  },
},
*/