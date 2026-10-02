// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mukul785', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 28, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['mukul785/gitprofile'], // List of repository names to display.
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Deck',
          description:
            'A desktop Mac app, built with Electron and TypeScript, for tracking my own work action items in one place.',
        },
        {
          title: 'Click Me',
          description:
            'An MCP server that lets Claude drive macOS: cursor, keyboard and screen, reading the focused window UI through the Accessibility API instead of guessing from screenshots.',
        },
        {
          title: 'HISAAB',
          description:
            'A cross-platform bookkeeping app for small businesses: sales, expenses, balances and reports. Flutter app with a Node.js, Express and PostgreSQL backend.',
        },
        {
          title: 'HSB',
          description:
            'A session-aware, account-centric business management Android app in Kotlin, built with clean architecture and ViewModel-driven design.',
        },
        {
          title: '3D Property',
          description:
            'A property-leads website with immersive 3D walkthroughs. Next.js, Tailwind, Framer Motion, Supabase and Spline.',
        },
        {
          title: 'Auherbals',
          description:
            'A full-stack web app built with Next.js, TypeScript and Prisma.',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Mukul Dagar',
    description:
      'Full-stack engineer working across native apps, web, backend, databases and AI pipelines.',
    imageURL: '',
  },
  social: {
    linkedin: 'mukul-dagar-31a12a24a',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'dagarm785@gmail.com',
  },
  resume: {
    fileUrl: '/Resume_MukulDagar.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++',
    'JavaScript',
    'TypeScript',
    'React.js',
    'React Native',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Android',
    'Flutter',
    'Web3.js',
    'Solidity',
    'Tailwind',
    'Docker',
    'Git',
  ],
  experiences: [
    {
      company: 'PRISM',
      position: 'Associate Software Development Engineer',
      from: 'August 2026',
      to: 'Present',
    },
    {
      company: 'PRISM',
      position: 'Intern',
      from: 'August 2025',
      to: 'August 2026',
    },
    {
      company: 'Metacrafters',
      position: 'Blockchain Development Apprentice',
      from: 'June 2024',
      to: 'September 2024',
      companyLink: 'https://metacrafters.io',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'Chandigarh University',
      degree: 'B.E. Computer Science and Engineering',
      from: '2022',
      to: '2026',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  footer: '',

  enablePWA: true,
};

export default CONFIG;
