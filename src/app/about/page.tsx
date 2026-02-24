"use client";

import Image from 'next/image';
import AnimatedSection from '../components/AnimatedSection';

const techStack = [
  { icon: '/icons/html.svg', name: 'HTML', level: 'Advanced' },
  { icon: '/icons/css.svg', name: 'CSS', level: 'Advanced' },
  { icon: '/icons/js.svg', name: 'JavaScript', level: 'Advanced' },
  { icon: '/icons/react.svg', name: 'React', level: 'Advanced' },
  { icon: '/icons/nextjs.svg', name: 'NextJs', level: 'Advanced' },
  { icon: '/icons/tailwind.svg', name: 'Tailwind', level: 'Advanced' },
  { icon: '/icons/bootstrap.svg', name: 'Bootstrap', level: 'Advanced' },
  { icon: '/icons/materialui.svg', name: 'Material UI', level: 'Advanced' },
  { icon: '/icons/nodejs.svg', name: 'NodeJs', level: 'Advanced' },
  { icon: '/icons/mongodb.svg', name: 'Mongo DB', level: 'Advanced' },
  { icon: '/icons/typescript.svg', name: 'TypeScript', level: 'Advanced' },
  { icon: '/icons/express.svg', name: 'Express', level: 'Advanced' },
  { icon: '/icons/dart.svg', name: 'Dart', level: 'Advanced' },
  { icon: '/icons/flutter.svg', name: 'Flutter', level: 'Advanced' },
  { icon: '/icons/php.svg', name: 'PHP', level: 'Advanced' },
  { icon: '/icons/mysql.svg', name: 'MySQL', level: 'Advanced' },
  { icon: '/icons/sanity.svg', name: 'Sanity', level: 'Advanced' },
  { icon: '/icons/redux.svg', name: 'Redux', level: 'Experienced' },
  { icon: '/icons/reactquery.svg', name: 'React Query', level: 'Experienced' },
  { icon: '/icons/pwa.svg', name: 'PWA', level: 'Experienced' },
  { icon: '/icons/aos.svg', name: 'AOS', level: 'Advanced' },
  { icon: '/icons/framer.svg', name: 'Framer Motion', level: 'Advanced' },
  { icon: '/icons/axios.svg', name: 'Axios', level: 'Advanced' },
  { icon: '/icons/github.svg', name: 'GitHub', level: 'Advanced' },
  { icon: '/icons/git.svg', name: 'Git', level: 'Advanced' },
];
export default function About() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a1d3b] to-[#1a2340] text-white px-4 py-12 relative overflow-hidden flex flex-col items-center justify-center">
        {/* Decorative geometric shapes and lines for background */}
        <div className="about-bg">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
          <div className="dots"></div>
        </div>
        <AnimatedSection className="max-w-4xl w-full mx-auto flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-2 text-[#6eeaff]">Who I Am</h2>
          <p className="mb-6 text-center text-sm sm:text-base">About me and the technology stacks I specialize in</p>
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
            <div className="rounded-xl overflow-hidden shadow-lg w-[320px] h-[220px] flex items-center justify-center bg-[#1a2340] border border-[#2d3a5a]">
              <Image src="/profile.jpeg" alt="Profile" width={320} height={220} className="object-cover w-full h-full" />
            </div>
            <div className="max-w-md flex flex-col gap-4">
              <h1 className="text-4xl font-extrabold mb-2 font-serif text-[#6eeaff]">Akinwale Daniel</h1>
              <p className="mb-6 text-base leading-relaxed">
                I am a software engineer focused on building backend and platform systems that operate reliably under real production constraints. My work centers on systems that coordinate state, execute background work deterministically, and remain correct under load, partial failure, and retries. I care deeply about system behavior over time, not just whether something works, but whether it continues to work as complexity, traffic, and failure modes increase.
              </p>
              <a href="/resume.pdf" target="_blank" rel="noopener"
                className="bg-[#1a2340] border border-[#2d3a5a] rounded-xl shadow-lg flex items-center gap-4 p-4 font-semibold text-[#6eeaff] hover:bg-[#2d3a5a] transition w-full justify-center">
                <span>View Resume</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection className="max-w-5xl mx-auto mt-12 flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4 text-[#6eeaff]">Stack And Tools</h3>
          <p className="mb-8 text-center text-base">As a Software Engineer, I use the following tools</p>
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
              {techStack.map((tool, idx) => (
                <AnimatedSection
                  key={tool.name}
                  className="w-full"
                  delay={0.05 * idx}
                  direction={idx % 2 === 0 ? 'left' : 'right'}
                >
                  <div className="bg-[#1a2340] rounded-xl shadow-lg flex items-center gap-4 p-4 border border-[#2d3a5a] w-full">
                    <Image src={tool.icon} alt={tool.name} width={40} height={40} className="object-contain" />
                    <div>
                      <div className="font-semibold text-lg">{tool.name}</div>
                      <div className="text-sm text-[#6eeaff]">{tool.level}</div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
  );
}
