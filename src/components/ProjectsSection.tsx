'use client';

import {useTranslations} from 'next-intl';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
  qrCode?: string;
  real: boolean;
}

export default function ProjectsSection() {
  const t = useTranslations('Projects');

  const projects: Project[] = [
    {
      title: 'FleetHub',
      description:
        'Fleet management platform used by taxi companies to automate operations, manage vehicles, track services, and optimize workflows. Built with real API integrations and scalable architecture.',
      tags: [
        'React',
        'Vite.js',
        'JavaScript',
        'Tailwind CSS',
        'API',
        'PostgreSQL',
        'Full-stack',
        'Real-world project',
        'PWA',
        'Tailwind CSS'
      ],
      qrCode: '',
      image: '/projects/fleethub.png',
      github: '',
      demo: '',
      real: true
    },
    {
      title: 'FleetHub Driver',
      description:
        'Driver-focused platform for taxi operators to manage accounts, track transactions, and handle daily operations. Integrated with backend APIs and optimized for mobile and responsive usage.',
      tags: [
        'React',
        'Vite.js',
        'JavaScript',
        'Responsive Design',
        'API',
        'Mobile-first',
        'Real-world project',
        'PWA',
        'Tailwind CSS'
      ],
      qrCode: '',
      image: '/projects/fleethubDriver.png',
      github: '',
      demo: '',
      real: true
    },
    {
      title: t('SyntaxAcademy.title'),
      description: t('SyntaxAcademy.description'),
      tags: [
        'HTML',
        'React',
        'Next.js',
        'Tailwind CSS',
        'CSS',
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'API',
        'Version control'
      ],
      qrCode: '/projectsQr/syntaxQr.png',
      image: '/projects/syntaxAcademy.jpg',
      github: 'https://github.com/davpage/SyntaxAcademy',
      demo: 'https://www.syntaxacade.my/',
      real: false
    },
    {
      title: t('MovieNest.title'),
      description: t('MovieNest.description'),
      tags: [
        'HTML',
        'Next.js',
        'React',
        'Tailwind CSS',
        'JavaScript',
        'API',
        'Version control'
      ],
      qrCode: '/projectsQr/movieNestQr.png',
      image: '/projects/movieNest.png',
      github: 'https://github.com/davpage/MovieNestNext',
      demo: 'https://movienest.cc/',
      real: false
    },
    {
      title: t('jsGames.title'),
      description: t('jsGames.description'),
      tags: ['HTML', 'CSS', 'JavaScript'],
      qrCode: '/projectsQr/gamesQr.png',
      image: '/projects/games.png',
      github: 'https://github.com/davpage/JsGames',
      demo: 'https://games.syntaxacade.my/',
      real: false
    },
    {
      title: t('weddings.title'),
      description: t('weddings.description'),
      tags: ['HTML', 'CSS', 'JavaScript'],
      qrCode: '/projectsQr/yddQr.png',
      image: '/projects/wedding.png',
      github: 'https://github.com/davpage/Weddings',
      demo: 'https://ydd.syntaxacade.my/wedding_one/index.html',
      real: false
    },

    {
      title: t('dowBot.title'),
      description: t('dowBot.description'),
      tags: [
        'JavaScript',
        'Node.js',
        'PostgreSQL',
        'API',
        'Version control',
        'Telegram-API',
        'Ubuntu Server'
      ],
      qrCode: '/projectsQr/dowBotQr.png',
      image: '/projects/dowBot.png',
      github: 'https://github.com/davpage/DowBot',
      demo: 'https://t.me/lav_dow_bot',
      real: false
    }
  ];

  return (
    <section className="flex pb-16 flex-col gap-6 w-full">
      {projects.map((project, index) => (
        <ProjectCard key={index} i={index} {...project} />
      ))}
    </section>
  );
}
