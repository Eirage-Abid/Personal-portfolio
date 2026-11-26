const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  // Rotating words in the Experience section heading ("Building for ___")
  const expWords = ["Web & Mobile", "Real Users", "Startups", "Every Screen"];

  const counterItems = [
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 200, suffix: "+", label: "Satisfied Clients" },
    { value: 108, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    }, {
      imgPath: "/images/logos/futurenostics.jpeg",
    },
     {
      imgPath: "/images/logos/icreatives.png",
    },
     {
      imgPath: "/images/logos/railfood.jpeg",
    }
    

  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      imgPath: "/images/logos/react.png",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      imgPath: "/images/logos/python.svg",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      imgPath: "/images/logos/node.png",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      imgPath: "/images/logos/three.png",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      imgPath: "/images/logos/git.svg",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
    company: "Futurenostics",
    type: "Full-time",
    highlight:
      "Keeping a legacy backend stable while shipping frontend features each sprint.",
    stack: ["TODO", "TODO", "TODO"], // TODO: replace with real tech stack
    logoPath: "/images/logos/futurenostics.jpeg",
    linkedinUrl: "https://www.linkedin.com/company/futurenostics/posts/?feedView=all",
    title: "Software Engineer",
    date: "October 2025 - Present",
    responsibilities: [
      "Maintaining and debugging a legacy backend system to ensure stability and performance.",
      "Contributed to frontend development during training, gaining exposure to UI workflows.",
      "Collaborating with team members to deliver tasks within sprint timelines.",
    ],
  },
  {
    company: "iCreativez",
    type: "Intern → Junior",
    highlight:
      "Promoted from intern to junior developer while shipping production mobile apps.",
    stack: ["Flutter", "Dart", "Firebase Auth", "Firestore", "Firebase Storage"],
    logoPath: "/images/logos/icreatives.png",
    linkedinUrl: "https://www.linkedin.com/company/icreativez/posts/?feedView=all",
    title: "Flutter Developer",
    date: "November 2024 - June 2025",
    responsibilities: [
      "Progressed from Flutter Intern to Junior Flutter Developer by delivering consistent performance.",
      "Built and contributed to production-level mobile applications for the company portfolio.",
      "Developed strong foundations in UI design, state management, and scalable application structure.",
    ],
  },
  {
    company: "RailFood",
    type: "Internship",
    highlight:
      "Built a real-world restaurant app end to end with Kotlin and a PostgreSQL backend.",
    stack: ["Kotlin", "Jetpack Compose", "PostgreSQL"],
    logoPath: "/images/logos/railfood.jpeg",
    linkedinUrl: "https://www.linkedin.com/company/railfoodpk/posts/?feedView=all",
    title: "Android Developer Intern",
    date: "June 2024 - September 2024",
    responsibilities: [
      "Developed a real-world mobile application using Kotlin and Jetpack Compose.",
      "Worked on backend integration using PostgreSQL for managing users, orders, and restaurant data.",
      "Focused on performance optimization and clean, maintainable code practices.",
    ],
  },
];
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      imgPath: "/images/insta.png",
    },
    {
      name: "fb",
      imgPath: "/images/fb.png",
    },
    {
      name: "x",
      imgPath: "/images/x.png",
    },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
    },
  ];
  
  const showcaseCards = [
    {
      id: 1,
      title: "Serenessa - Women's Safety App",
      subtitle: "Serenessa aims to empower women by providing real-time protection, safe zone monitoring, community-driven awareness, and secure communication with emergency contacts.",
      thumbnail: "src/assets/work-experience/serenessa-banner.png",
      githubLink: "https://github.com/Eirage-Abid/serenessa_first_versionn",
      aspect: 1920 / 1080,
    },
    {
      id: 2,
      title: "Text Treasure - E-book Library",
      subtitle: "A modern, distraction-free e-book discovery and reading platform with reading progress tracking, a personal PDF library, bookmarks, and a clean in-app book viewer, powered by Flutter and Firebase.",
      thumbnail: "src/assets/work-experience/text-treasure-showcase.png",
      githubLink: "https://github.com/Eirage-Abid/text_treasure_first_version",
      aspect: 2400 / 1200,
    },
    // {
    //   id: 3,
    //   title: "YC Directory - Startup Showcase",
    //   subtitle: "A directory app showcasing innovative startups and founders",
    //   thumbnail: "/images/project3.png",
    //   githubLink: "https://github.com/Eirage-Abid/yc-directory",
    //   aspect: 824 / 645,
    // },
    {
      id: 4,
      title: "Recorvea - Dental Clinical Records App",
      subtitle: "A digital workspace for dentists: register patients through a guided step-by-step flow, capture medical history, BPE scores and FDI tooth charts, collect signed informed consent, and track practice insights from one dashboard.",
      thumbnail: "src/assets/work-experience/recorvea-banner-dark.png",
      githubLink: "https://github.com/Eirage-Abid/recorvea", // TODO: confirm repo URL
      aspect: 2400 / 1350,
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expWords,
    testimonials,
    socialImgs,
    techStackIcons,
    navLinks,
    showcaseCards,
  };