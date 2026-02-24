"use client";
import AnimatedSection from './components/AnimatedSection';
import { useEffect, useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import PhoneTwoToneIcon from '@mui/icons-material/PhoneTwoTone';
import Link from 'next/link';

const roles = ["Backend Engineer", "Platform Engineer", "Systems Engineer"];

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 120);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span>
      {words[index].substring(0, subIndex)}
      <span className={blink ? "opacity-100" : "opacity-0"}>|</span>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <AnimatedSection>
        <div className="relative min-h-screen w-full bg-gradient-to-br from-[#0a0a23] via-[#0a0a2a] to-[#1a1a40] font-sans text-white overflow-hidden flex flex-col items-center justify-center">
          {/* Background SVG/Circles */}
          <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="800" r="180" stroke="#FF3CAC" strokeWidth="3" fill="none" />
            <circle cx="1300" cy="200" r="120" stroke="#FF3CAC" strokeWidth="3" fill="none" />
            <circle cx="1200" cy="700" r="60" stroke="#4DB5FF" strokeWidth="2" fill="none" />
            <circle cx="400" cy="200" r="80" stroke="#4DB5FF" strokeWidth="2" fill="none" />
            <circle cx="900" cy="100" r="40" stroke="#FF3CAC" strokeWidth="2" fill="none" />
            <circle cx="700" cy="500" r="300" stroke="#4DB5FF22" strokeWidth="1" fill="none" />
          </svg>
          {/* Hero Section */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-6 py-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-2 text-center">
              Hi, I&apos;m <span className="text-[#4DB5FF]">Akinwale Daniel Oluwagbenga</span>
            </h2>
            <span className="font-bold text-[2.5rem] sm:text-[4rem] md:text-[4.5rem] capitalize mb-4 block text-center w-full">
              <Typewriter words={roles} />
            </span>
            <p className="text-[#e0e0e099] text-base sm:text-lg text-center w-full max-w-xl mx-auto mb-8">
              Senior Software Engineer building backend and platform systems under real production constraints. Specialized in distributed job orchestration, control-plane design, state coordination, and deterministic failure recovery. Strong background in Go, Node.js, Python, and PostgreSQL, delivering systems that operate correctly at scale under load and failure.
            </p>
            <div className="flex flex-row gap-4 my-6 justify-center w-full">
              {/* Add your action buttons here if needed */}
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/* Bottom Navigation Bar - always fixed */}
      <nav className="fixed left-1/2 -translate-x-1/2 bottom-0 mb-4 flex gap-x-8 px-12 py-4 rounded-[48px] backdrop-blur-md bg-[#172347]/80 z-[100] shadow-lg min-w-150 max-w-[90vw] justify-center items-center w-auto">
        <Link href="/" title="HOME" className="flex items-center justify-center w-12 h-12 rounded-full text-white bg-white/10 focus:bg-white/20">
          <HomeIcon sx={{ fontSize: 28, color: '#fff' }} />
        </Link>
        <Link href="/services" title="SERVICES" className="flex items-center justify-center w-12 h-12 rounded-full text-white bg-transparent focus:bg-white/20">
          <DesignServicesOutlinedIcon sx={{ fontSize: 28, color: '#fff' }} />
        </Link>
        <Link href="/projects" title="PROJECTS" className="flex items-center justify-center w-12 h-12 rounded-full text-white bg-transparent focus:bg-white/20">
          <BusinessCenterOutlinedIcon sx={{ fontSize: 28, color: '#fff' }} />
        </Link>
        <Link href="/about" title="ABOUT" className="flex items-center justify-center w-12 h-12 rounded-full text-white bg-transparent focus:bg-white/20">
          <Person2OutlinedIcon sx={{ fontSize: 28, color: '#fff' }} />
        </Link>
        <Link href="/contact" title="CONTACT" className="flex items-center justify-center w-12 h-12 rounded-full text-white bg-transparent focus:bg-white/20">
          <PhoneTwoToneIcon sx={{ fontSize: 28, color: '#fff' }} />
        </Link>
      </nav>
    </>
  );
}
