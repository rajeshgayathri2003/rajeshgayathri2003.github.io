// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Collection of projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-a-beginner-39-s-guide-to-undergraduate-research",
        
          title: "A Beginner&#39;s Guide to Undergraduate Research",
        
        description: "An introductory guide for undergraduate students aiming to pursue research",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/beginners-guide-to-undergraduate-research/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-graduated-from-nit-tiruchirappalli-with-a-b-tech-in-electrical-and-electronics-engineering",
          title: 'Graduated from NIT Tiruchirappalli with a B.Tech in Electrical and Electronics Engineering!',
          description: "",
          section: "News",},{id: "news-heading-to-uc-san-diego-this-fall-for-my-masters-in-computer-science-i-aim-to-focus-on-robotics-and-ai",
          title: 'Heading to UC San Diego this fall for my masters in Computer Science....',
          description: "",
          section: "News",},{id: "news-awarded-the-j-n-tata-endowment-loan-scholarship-by-the-j-n-tata-endowment-for-the-higher-education-of-indian",
          title: 'Awarded the J.N. Tata Endowment Loan Scholarship by the J.N. Tata Endowment for...',
          description: "",
          section: "News",},{id: "projects-low-light-image-enhancement-using-u-net-and-modified-u-net-architectures",
          title: 'Low-light Image Enhancement using U-net and Modified U-net architectures',
          description: "Guide - Prof Kaushik Mitra, IIT Madras, Chennai, India",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-gpt-fabric-leveraging-pre-trained-foundation-models-for-fabric-manipulation-tasks",
          title: 'GPT-Fabric++ - Leveraging Pre-trained Foundation Models for fabric manipulation tasks',
          description: "Guide - Daniel Seita, University of Southern California, Los Angeles",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-bi-level-optimization-for-electric-vehicle-routing-and-pricing",
          title: 'Bi-level optimization for Electric Vehicle Routing and Pricing',
          description: "Guide - Ankur Singh Rana, NIT Tiruchirappalli, Tiruchirappalli, India",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%32%72%61%6A%65%73%68@%75%63%73%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/rajeshgayathri2003", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/rajesh-gayathri", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
