"use client";

import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import AnimatedSection from '../components/AnimatedSection';
import { useState } from 'react';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  // Project data
  const projects = [
    {
      title: "SAFEGUARD Smart Baby Monitoring System",
      image: "/safeguard.jpeg",
      tech: "React Native, Node.js, Express.js, MongoDB, IoT Devices, Cloud Storage",
      description:
        "A cutting-edge IoT solution for real-time baby monitoring, providing parents with peace of mind through intelligent alerts and health tracking.",
      details:
        "Real-time audio and video monitoring, Health and sleep pattern tracking, Mobile notifications for unusual activity or sound, Secure cloud storage for recorded events, User-friendly mobile app for remote access.",
      demo: "https://safeguard-blond.vercel.app",
      github: null,
    },
    {
      title: "CarePoint",
      image: "/carepoint.jpeg",
      tech: "Next.js, Node.js, TypeScript, PostgreSQL",
      description:
        "CarePoint is a cutting-edge medical application designed to revolutionize how healthcare professionals manage patient care. With a sleek, modern interface, CarePoint simplifies patient management, streamlines access to medical records, and delivers real-time insights that enhance decision-making. From effortless appointment scheduling to comprehensive patient history tracking, CarePoint offers an all-in-one solution for clinics, hospitals, and healthcare providers. Empower your team with smart analytics, intuitive workflows, and secure data management—experience the future of healthcare with CarePoint.",
      details:
        "Secure and centralized patient record management, Appointment scheduling and notifications, Integrated billing and payment processing, Role-based access control for healthcare professionals, Data analytics for improved decision-making.",
      demo: "https://innovaforge.onrender.com",
      github: null,
    },
    {
      title: "Momas-Pay Web Application",
      image: "/momas.png",
      tech: "React, Node.js, Express.js, MongoDB, Redux, Tailwind CSS",
      description:
        "A web application designed for seamless management of prepaid and postpaid electricity meters, enabling users to make payments and track consumption effortlessly.",
      details:
        "Prepaid & Postpaid Meter Management, Secure Payment Processing, Usage Tracking & Account Management, User-Friendly Dashboard, Notification System.",
      demo: "https://www.memmcol.com",
      github: null,
    },
    {
      title: "Nigtrak Application",
      image: "/nigtrak.jpeg",
      tech: "TypeScript, Java, Spring Boot, PostgreSQL, React, Redux, Docker",
      description:
        "A highly secure application designed for managing military devices, featuring an embedded inventory system for efficient tracking and reporting.",
      details:
        "Real-time inventory tracking for military equipment, Detailed reporting and analytics, Secure and scalable backend using Java and Spring Boot, Intuitive user interface built with React and Redux, Containerized deployment using Docker.",
      demo: "https://nigtrak.vercel.app",
      github: null,
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  const handleSeeMore = (project: (typeof projects)[number]) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-[#0a0a23] via-[#0a0a2a] to-[#1a1a40] font-sans text-white relative overflow-hidden flex flex-col items-center justify-center">
      <main className="flex flex-col items-center w-full max-w-6xl mx-auto py-12 px-4 z-10 justify-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 mt-8 text-[#4DB5FF]">What I Have Done</h2>
          <p className="text-sm sm:text-base text-center mb-8 text-[#e0e0e0] font-semibold">With my range of skills, I have been able to build some amazing projects. Check them out below.</p>
          {/* Project/Blog Toggle */}
          <div className="flex gap-4 mb-12 justify-center">
            <button className="px-8 py-2 rounded-full font-semibold bg-[#4DB5FF] text-black shadow-md">Project</button>
            <button className="px-8 py-2 rounded-full font-semibold bg-[#23243a] text-white shadow-md">Blog</button>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-24 w-full">
            {projects.map((project, idx) => (
              <AnimatedSection direction={idx % 2 === 0 ? 'right' : 'left'} key={project.title}>
                <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
                  <img src={project.image} alt={project.title} className="w-full md:w-1/2 rounded-xl shadow-lg object-cover bg-white" />
                  <div className="flex-1 text-left">
                    <h3 className="text-2xl font-bold mb-2 text-[#4DB5FF]">{project.title}</h3>
                    <p className="mb-2 text-[#e0e0e0cc]">{project.description}</p>
                    <ul className="list-disc pl-5 mb-2 text-sm text-[#e0e0e0cc]">
                      {project.details.split(',').map((item, i) => (
                        <li key={i}>{item.trim()}</li>
                      ))}
                    </ul>
                    <p className="mb-2 text-xs text-[#4DB5FF]">Tech Stack: {project.tech}</p>
                    <button
                      className="mt-2 px-6 py-2 rounded-full bg-[#23243a] text-white hover:bg-[#4DB5FF] hover:text-black transition"
                      onClick={() => handleSeeMore(project)}
                    >
                      See more
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </main>
      <ProjectModal open={modalOpen} onClose={handleCloseModal} project={selectedProject} />
    </div>
  );
}
