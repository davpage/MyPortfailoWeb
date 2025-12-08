'use client';
import React from 'react';
import Image from "next/image";
import Link from "next/link";

export const TechnologiesLine = () => {
    const technologies = [
        { name: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5', image: '/scillsLogos/HTML5.png' },
        { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', image: '/scillsLogos/CSS3.png' },
        { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', image: '/scillsLogos/JavaScript.png' },
        { name: 'TypeScript', url: 'https://www.typescriptlang.org/', image: '/scillsLogos/TypeScript.webp' },
        { name: 'React', url: 'https://reactjs.org/', image: '/scillsLogos/React.webp' },
        { name: 'Next.js', url: 'https://nextjs.org/', image: '/scillsLogos/nextjs.png' },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com/', image: '/scillsLogos/tailwindCss.png' },
        { name: 'Node.js', url: 'https://nodejs.org/', image: '/scillsLogos/nodeJs.png' },
        { name: 'Express.js', url: 'https://expressjs.com/', image: '/scillsLogos/expressjs.png' },
        { name: 'MongoDB', url: 'https://www.mongodb.com/', image: '/scillsLogos/MongoDB.png' },
        { name: 'Git', url: 'https://git-scm.com/', image: '/scillsLogos/git.webp' },
        { name: 'GitLab', url: 'https://gitlab.com/', image: '/scillsLogos/gitLab.webp' },
        { name: 'GitHub', url: 'https://github.com/', image: '/scillsLogos/gitHub.png' },
        { name: 'Web APIs', url: 'https://developer.mozilla.org/en-US/docs/Web/API', image: '/scillsLogos/WebAPI.png' },
    ];

    const looped = [...technologies, ...technologies]; // infinite scroll trick

    return (
        <div className="relative z-30 mt-[50px] w-full h-[90px] bg-[var(--nav-bg)] text-[var(--scills)] overflow-hidden">

            <div className="scroll-track flex items-center gap-10 whitespace-nowrap h-full">
                {looped.map((tech, idx) => (
                    <div key={idx} className="relative group flex flex-col items-center justify-center w-[130px] shrink-0">
                        <Link href={tech.url} target="_blank" rel="noopener noreferrer"
                              className="hover:text-transparent text-center text-sm">

                            <span className={'text-[18px]'}>{tech.name}</span>

                            <div
                                className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-[80px] h-[80px]
                                rounded-lg px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                                <Image
                                    src={tech.image}
                                    alt={tech.name}
                                    width={100}
                                    height={100}
                                    className="object-contain w-full h-full rounded"
                                />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
