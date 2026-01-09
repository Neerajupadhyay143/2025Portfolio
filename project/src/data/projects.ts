import { Project } from '../contexts/ProjectContext';
import whatsapp1 from "../assets/images/Projects/Whatsapp1.png"
import whatsapp2 from "../assets/images/Projects/Whatsapp2.png"
import whatsapp3 from "../assets/images/Projects/Whatsapp3.png"
import Netflex1 from "../assets/images/Projects/Netflex1.png"
import Netflex2 from "../assets/images/Projects/Netflex2.png"
import Netflex3 from "../assets/images/Projects/Netflex3.png"
import Netflex4 from "../assets/images/Projects/Netflex4.png"
import Netflex5 from "../assets/images/Projects/Netflex5.png"
import Netflex6 from "../assets/images/Projects/Netflex6.png"
import Netflex7 from "../assets/images/Projects/Netflex7.png"
import covid1 from "../assets/images/Projects/covid1.png"
import ludo1 from "../assets/images/Projects/ludo1.png"
import Gradhub1 from "../assets/images/Projects/Gradhub1.png"
import Gradhub2 from "../assets/images/Projects/Gradhub2.png"
import Gradhub3 from "../assets/images/Projects/Gradhub3.png"
import Gradhub4 from "../assets/images/Projects/Gradhub4.png"
import MIRELO1 from "../assets/images/Projects/MIRELO1.png"
import MIRELO2 from "../assets/images/Projects/MIRELO2.png"
import MIRELO3 from "../assets/images/Projects/MIRELO3.png"
import MIRELO4 from "../assets/images/Projects/MIRELO4.png"
import KAUTILYA1 from "../assets/images/Projects/KAUTILYA1.png"
import KAUTILYA2 from "../assets/images/Projects/KAUTILYA2.png"
import KAUTILYA3 from "../assets/images/Projects/KAUTILYA3.png"
import KAUTILYA4 from "../assets/images/Projects/KAUTILYA4.png"
import KAUTILYA5 from "../assets/images/Projects/KAUTILYA5.png"

export const projectsData: Project[] = [
  {
    id: 'whatsapp-clone',
    title: 'Whatsapp Clone',
    description: 'A full-stack chat application built with React, Node.js, and Firebase. Features include real-time messaging, group chats, media sharing, status updates, push notifications, and user authentication. The app supports responsive design for both mobile and desktop, ensuring seamless communication.',
    shortDescription: 'Full-stack chat app with React, Node.js, and Firebase',
    techStack: ['React', 'Node.js', 'Firebase', 'Redux', 'Tailwind CSS', 'Socket.io'],
    category: 'Web Development',
    year: 2024,
    image: whatsapp1,
    images: [
      whatsapp1,
      whatsapp2,
      whatsapp3
    ],
    liveUrl: 'https://whats-app-clone-2-smoky.vercel.app/',
    repoUrl: 'https://github.com/Neerajupadhyay143/whatsApp-clone-2',
    challenges: 'Implementing real-time messaging with Socket.io, ensuring message synchronization across devices, managing media uploads efficiently, and handling user authentication securely with Firebase.',
    role: 'Full-stack Developer',
    featured: true
  }
  ,
  {
    id: 'netflix-clone',
    title: 'Netflix Clone',
    description: 'A responsive frontend Netflix clone built with React, fetching movie and TV show data from the TMDB API. Features include dynamic browsing, search functionality, genre-based filtering, responsive UI, and smooth animations for an immersive streaming experience.',
    shortDescription: 'Frontend Netflix clone with React & TMDB API integration',
    techStack: ['React', 'TMDB API', 'Tailwind CSS', 'React Router'],
    category: 'Web Development',
    year: 2022,
    image: Netflex3,
    images: [
      Netflex1,
      Netflex2,
      Netflex3,
      Netflex4,
      Netflex5,
      Netflex6,
      Netflex7,
    ],
    liveUrl: 'https://github.com/Neerajupadhyay143/Netflix-Clone-02',
    repoUrl: 'https://github.com/Neerajupadhyay143/Netflix-Clone-02',
    challenges: 'Integrating TMDB API efficiently, managing state for dynamic content rendering, and ensuring fully responsive UI across devices.',
    role: 'Frontend Developer',
    featured: true
  }
  ,
  {
    id: 'covid-tracker',
    title: 'COVID-19 Tracker App',
    description: 'A cross-platform COVID-19 tracking application built with React Native and Expo. Provides real-time updates on global and country-specific COVID-19 statistics, interactive charts, vaccination progress, and safety guidelines. Includes offline data caching and notifications for critical updates.',
    shortDescription: 'Cross-platform COVID-19 tracker with real-time stats and charts',
    techStack: ['React Native', 'Expo', 'Firebase', 'REST API', 'Chart.js', 'Node.js'],
    category: 'Mobile Development & web development',
    year: 2022,
    image: covid1,
    images: [
      covid1
    ],
    liveUrl: 'https://github.com/Neerajupadhyay143/Covid--19-Tracker',
    repoUrl: 'https://github.com/Neerajupadhyay143/Covid--19-Tracker',
    challenges: 'Fetching accurate and up-to-date data from multiple APIs, implementing offline caching, and displaying complex statistics through interactive charts.',
    role: 'Mobile Developer',
    featured: true
  }
  ,

  {
    id: 'ludo-web-app',
    title: 'Ludo Web Application',
    description: 'A browser-based multiplayer Ludo game built with React and Node.js. Features real-time gameplay, turn-based mechanics, dice roll animations, chat functionality, and game room management. Supports multiple players with smooth interactions and responsive design for desktop and mobile.',
    shortDescription: 'Multiplayer Ludo game with real-time gameplay and chat',
    techStack: ['React', 'Node.js', 'Tailwind', 'CSS', 'HTML5'],
    category: 'Web Development (Company Project)',
    year: 2023,
    image: ludo1,
    images: [
      ludo1
    ],
    liveUrl: 'https://github.com/Neerajupadhyay143/ludo-user',
    repoUrl: 'https://github.com/Neerajupadhyay143/ludo-user',
    challenges: 'Implementing real-time multiplayer functionality with Socket.io, managing game state across multiple clients, and ensuring smooth animations and responsive design.',
    role: 'Full-stack Developer',
    featured: true
  }
  ,
  {
    id: 'gradhub-platform',
    title: 'Gradhub Platform',
    description: 'A product-based platform for Gradhub, where I designed and developed the complete dashboard and landing page. Features include responsive UI, product management, analytics widgets, and smooth user interactions. Implemented full-stack solutions to manage data efficiently and enhance user experience.',
    shortDescription: 'Complete dashboard and landing page development for Gradhub',
    techStack: ['Next js', 'Node.js', 'Redux', "Mantine UI", 'Chart.js'],
    category: 'Web Development (Company Project)',
    year: 2024,
    image: Gradhub1,
    images: [
      Gradhub1,
      Gradhub2,
      Gradhub3,
      Gradhub4
    ],
    liveUrl: 'https://gradhub.co/',
    repoUrl: 'https://github.com/Neerajupadhyay143/',
    challenges: 'Designing a responsive and intuitive dashboard, implementing complex product management features, and integrating real-time analytics widgets.',
    role: 'Full-stack Developer',
    featured: true
  }
  ,
  {
    id: 'Freelancing',
    title: 'MIRELO BATHROOMS',
    description: 'A paid client-based freelancing project where I designed and developed the frontend for a product-based bathroom brand platform. The project involved building a responsive and modern UI, integrating Sanity.io as a headless CMS for managing products, categories, and content, and ensuring smooth user experience across devices.',
    shortDescription: 'Paid freelancing project – frontend development with Sanity.io CMS',
    techStack: ['Next.js', 'Sanity.io', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
    category: 'Web Development (Paid Freelancing Project)',
    year: 2025,
    image: MIRELO1,
    images: [
      MIRELO1,
      MIRELO2,
      MIRELO3,
      MIRELO4
    ],
    liveUrl: 'https://mirelo.co.uk/',
    repoUrl: 'https://github.com/Neerajupadhyay143/Room-sanitary',
    challenges: 'Working with Sanity.io was a new experience for me. Understanding schema design, CMS structure, and real-time content updates was challenging initially, but I successfully implemented product management and dynamic content updates, proving my ability to learn and deliver on new technologies.',
    role: 'Frontend Developer (Freelancing)',
    featured: true
  }
  ,
  {
    id: 'Freelancing_Kautilya',
    title: 'Kautilya Law Institute',
    description: 'A paid client-based freelancing project where I designed and developed a complete full-stack website for a coaching institute. The project included building a responsive frontend using React, developing backend services with Node.js, and integrating Firebase for authentication, database, and real-time data handling. An admin panel was also created to manage courses, content, and student-related data efficiently.',
    shortDescription: 'Paid freelancing project – Full-stack coaching institute website with admin panel',
    techStack: [
      'React.js',
      'Node.js',
      'Firebase',
      'JavaScript',
      'Tailwind CSS',
      'REST APIs'
    ],
    category: 'Web Development (Paid Freelancing Project)',
    year: 2025,
    image: KAUTILYA1,
    images: [
      KAUTILYA1,
      KAUTILYA2,
      KAUTILYA3,
      KAUTILYA4,
      KAUTILYA5
    ],  
    liveUrl: 'https://kautilyalawinstitute.com/',
    repoUrl: 'https://github.com/Neerajupadhyay143/KautilyaClasses',
    challenges: 'Handling both frontend and backend development was challenging, especially managing authentication, role-based access for the admin panel, and real-time data updates using Firebase. However, this project strengthened my full-stack skills and helped me gain confidence in building scalable, production-ready applications.',
    role: 'Full Stack Developer (Freelancing)',
    featured: true
  }


];

