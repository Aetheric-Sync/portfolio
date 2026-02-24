import React from "react";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SuccessModal({ open, onClose }: SuccessModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-[#181824] rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 overflow-hidden relative flex flex-col items-center">
        <button
          className="absolute top-4 right-4 text-white text-2xl bg-[#23243a] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#4DB5FF] hover:text-black transition"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="mb-4">
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#4DB5FF"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h2 className="text-2xl font-bold text-[#4DB5FF] mb-2">Message Sent!</h2>
        <p className="text-[#e0e0e0] text-center mb-4">Thank you for reaching out. Your message was sent successfully and I'll get back to you soon.</p>
        <button className="mt-4 px-6 py-2 rounded-full bg-[#4DB5FF] text-black font-semibold hover:bg-[#23243a] hover:text-white transition" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
