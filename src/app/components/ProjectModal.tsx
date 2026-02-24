"use client";

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from "react";

type Project = {
  title: string;
  image: string;
  tech: string;
  description: string;
  details?: string;
  demo?: string;
  github?: string | null;
};

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({ open, onClose, project }: ProjectModalProps) {
  if (!open || !project) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-[#10182a] rounded-2xl shadow-2xl max-w-3xl w-full mx-4 p-0 overflow-hidden relative">
        <button
          className="absolute top-4 right-4 text-white text-2xl bg-[#23243a] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#4DB5FF] hover:text-black transition"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="w-full bg-[#181a2a] flex items-center justify-center p-6 border-b border-[#23243a]">
          <img src={project.image} alt={project.title} className="rounded-xl max-h-72 w-auto object-contain bg-white" />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-[#FF3CAC] mb-2">{project.title}</h2>
          <div className="text-xs text-[#6eeaff] mb-2 font-semibold">
            Technologies Used - {project.tech}
          </div>
          <div className="mb-4">
            <div className="font-bold text-white mb-1">Project Description</div>
            <div className="text-[#e0e0e0] text-sm leading-relaxed">
              {project.description}
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#23243a] text-white hover:bg-[#4DB5FF] hover:text-black transition font-semibold"
              >
                <OpenInNewIcon fontSize="small" /> Live demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
